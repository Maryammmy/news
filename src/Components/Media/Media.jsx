import React, { useState, useEffect, useContext } from 'react';
import { storecontext } from '../Context/Context';
import { useNavigate } from 'react-router-dom';
import { doc, getDoc, collection, query, where, getDocs } from "firebase/firestore"; // Add these imports
import { db } from '../../Firebase/Firebase';
import CardSkeleton from '../CardSkeleton/CardSkeleton';

const Media = () => {
  const { setSelected } = useContext(storecontext);
  const navigate = useNavigate();
  const [subItem, setSubItem] = useState('انفوجراف');
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
      let querySnapshot;
      if (subItem === 'انفوجراف') {
        querySnapshot = await getDocs(query(collection(db, 'Artciles'), where('subCategory', '==', 'انفوجراف')));
      } else if (subItem === 'فيديو') {
        querySnapshot = await getDocs(query(collection(db, 'Artciles'), where('subCategory', '==', 'فيديو')));
      }
  
      const newData = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        newData.push(data);
      });
  
      setArticleData(newData);
      setLoading(false);
   
    } catch (error) {
      console.error("Error fetching documents:", error);
    }
  }

  useEffect(() => {
    fetchDataFromFirestoreByCategory();
  }, [subItem]);

  function handleTitleClick(item) {
    setSelected(item);
    navigate('/title');
  }
  const handleSubSelectChange = (e) => {
    setSubItem(e.target.value);
    console.log(subItem)
  };
  return (
    <div className=' w-60 bg-white my-3 shadow me-lg-5'>


      <>
        
        <h4 className=' px-2 py-2 shadow brdr-top brdr-bottom fw-bolder'>مالتي ميديا</h4>
        <select
              name="subCategory"
              value={subItem}
              onChange={handleSubSelectChange}
              className='my-3 form-control w-input'>
              <option value="انفوجراف">انفوجراف</option>
              <option value="فيديو">فيديو</option>
            </select>
      {loading?<CardSkeleton cards={10}/> :  <div className='container-fluid'>

{articleData.map((article, index) => (
  <div key={index} className="row py-3 px-3" onClick={() => handleTitleClick(article)}>
    <div className="col-md-4 pe-0">
      <div className='w-img'>
        <img src={article.images[0]} alt={`Image`} />
      </div>
    </div>
    <div className="col-md-7 padding-right pe-xl-4 pe-xxl-0">
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
