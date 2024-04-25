import { useState, useEffect, useContext } from 'react';
import { storecontext } from '../Context/Context';
import { useNavigate } from 'react-router-dom';
import { doc, getDoc, collection, query, where, getDocs } from "firebase/firestore"; // Add these imports
import { db } from '../../Firebase/Firebase';
const Cars = () => {
  const { setSelected } = useContext(storecontext);
  const navigate = useNavigate();
  const [articleData, setArticleData] = useState([]);
  const [loading, setLoading] = useState(true);

  function formatDate(dateString) {
    const options = {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
      localeMatcher: 'best fit',
    };
    const date = new Date(dateString);
    return date.toLocaleDateString('ar-EG', options);
  }

  
// Function to fetch data from Firestore based on categoryName
async function fetchDataFromFirestoreByCategory() {
  try {
    // Query the Firestore collection where categoryName is equal to 'السيارات'
    const querySnapshot = await getDocs(query(collection(db, 'Artciles'), where('categoryName', '==', 'السيارات')));

    // Iterate through the documents in the query snapshot
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      console.log("Document data:", data);
      data.date = formatDate(data.date);
      // Update state with fetched data
      setArticleData(prevState => [...prevState, data]);
    });

    setLoading(false);
  } catch (error) {
    console.error("Error fetching documents:", error);
  }
}


useEffect(() => {
  fetchDataFromFirestoreByCategory();
}, []);


  function handleTitleClick(item) {
    setSelected(item);
    navigate('/title');
  }

  return (
    <div className=' w-60 bg-white my-3 shadow'>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="container-fluid">
          {articleData.map((article, index) => (
            <div key={index} className="row py-3" onClick={() => handleTitleClick(article)}>
              <div className="col-md-5">
                <div className='w-img'>
                  <img src={article.images[0]} alt={`Image`} />
                </div>
              </div>
              <div className="col-md-7 ">
                <button className='btn text-end but border-0'><h5>{article.title}</h5> </button>
                <p>{article.description}</p>
                <p>{article.date}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cars;



