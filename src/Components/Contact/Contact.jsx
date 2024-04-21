import React from 'react'
import logo from '../../Assets/Images/logo.png'

export default function Contact() {
  return (
    <div className='contact-bg pt-3 '>
      <div className='contact-brdr'>
      <div className="container-fulid mx-5 px-5">
        <div className='d-flex justify-content-between'>
          <div className='logo'>
            <img src={logo} alt="logo" className='w-100 h-100 object-fit-cover' />
          </div>
        
          <div className='d-flex mt-4'>
            <div className='icon-white mx-2'>  <a href='https://web.facebook.com/' target='_blank' className='color'><i className="fa-brands fa-facebook-f "></i></a></div>
            <div className='icon-white mx-2'><a href='https://www.youtube.com' target='_blank' className='color'><i className="fa-brands fa-youtube "></i></a> </div>
            <div className='icon-white mx-2'>  <a href='https://twitter.com' target='_blank' className='color'><i className="fa-brands fa-x-twitter "></i></a> </div>
            <div className='icon-white mx-2'><a href='https://www.instagram.com/' target='_blank' className='color'><i className="fa-brands fa-instagram fw-bolder "></i></a></div>

        
        </div>
        </div>


      </div>
      </div>
     
      <div className="container">
      <div className='row justify-content-center py-3'>
        <div className=' col-md-1 '><a href="misrnews" className=' text-decoration-none text-black fw-bolder'>أخبار مصر</a></div>
        <div  className='col-md-1'><a href="policy" className=' text-decoration-none text-black fw-bolder'> سياسة</a></div>
        <div  className='col-md-1'><a href="sports" className=' text-decoration-none text-black fw-bolder'>رياضة</a></div>
        <div  className='col-md-1'><a href="economics" className=' text-decoration-none text-black fw-bolder'>اقتصاد</a></div>
        <div  className='col-md-1'><a href="culture" className=' text-decoration-none text-black fw-bolder'>ثقافة وفنون</a></div>
        <div  className='col-md-1'><a href="events" className=' text-decoration-none text-black fw-bolder'>حوادث</a></div>
        <div  className='col-md-1'><a href="provinces" className=' text-decoration-none text-black fw-bolder'>محافظات</a></div>

        
      </div>
    </div>
    </div>
  
  )
}
