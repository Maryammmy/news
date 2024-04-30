import React, { useState, useEffect, useContext } from 'react';
import { storecontext } from '../Context/Context';
import { useNavigate } from 'react-router-dom';
import { doc, getDoc, collection, query, where, getDocs } from "firebase/firestore"; // Add these imports
import { db } from '../../Firebase/Firebase';
import CardSkeleton from '../CardSkeleton/CardSkeleton';

const Media = () => {
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



  async function fetchDataFromFirestoreByCategory() {
    try {
      const querySnapshot = await getDocs(query(collection(db, 'Artciles'), where('categoryName', '==', 'مالتي ميديا')));

      querySnapshot.forEach((doc) => {
        const data = doc.data();
       
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
    <div className=' w-60 bg-white my-3 shadow me-lg-5'>


      <>
        <h4 className=' px-2 py-2 shadow brdr-top brdr-bottom fw-bolder'>انفوجراف</h4>
      {loading?<CardSkeleton cards={10}/> :  <div className='container-fluid'>

{articleData.map((article, index) => (
  <div key={index} className="row py-3 px-3" onClick={() => handleTitleClick(article)}>
    <div className="col-md-4 pe-0">
      <div className='w-img'>
        <img src={article.images[0]} alt={`Image`} />
      </div>
    </div>
    <div className="col-md-7 padding-right pe-xl-4 pe-xxl-0">
    <h4 className='fw-bolder title pt-3 pt-md-0'>{article.subCategory}</h4>
      <h4 className='fw-bolder title pt-3 pt-md-0'>{article.title}</h4>
      <p className='time'>{formatDate(article.date)}</p>
    </div>
  </div>
))}
</div>}
      </>

    </div>
  );
};

export default Media;
