import React from 'react'
import './testimonies.css'
import AVTR1 from '../../assets/AVTR1.jpg'
import AVTR2 from '../../assets/AVTR2.jpg'
import AVTR3 from '../../assets/AVTR3.jpg'
import AVTR4 from '../../assets/AVTR4.jpg'
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
const data =[
 {
   avatar:AVTR1,
   name:'Tina Snow',
   review: 'Lorem esse harum praesentium obcaecati provident sunt earum repudiandae accusamus deleniti veniam ducimus corrupti?',
   
  },
  {
    avatar:AVTR2,
    name:'Shatta Wale',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eveniet animi at, quisquam, doloribus neque vitae, consequatur esse harum praesentium obcaecati provident sunt earum repudiandae accusamus deleniti veniam ducimus corrupti?',
    
   },
   {
    avatar:AVTR3,
    name:'Kwame Despite',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eveniet animi at, quisquam, doloribus neque vitae, consequatur esse harum praesentium obcaecati provident sunt earum repudiandae accusamus deleniti veniam ducimus corrupti?',
    
   },
   {
    avatar:AVTR4,
    name:'Alberto Earnest',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eveniet animi at, quisquam, doloribus neque vitae, consequatur esse harum praesentium obcaecati provident sunt earum repudiandae accusamus deleniti veniam ducimus corrupti?',
    
   },

]

const testimonies = () => {
  return (
    <section id='testimonial'>
      <h5>
      Review from clients
      </h5>
      <h2>
        Testimonials
      </h2>
      <Swiper className="container testimonials-container" 
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}>{
        data.map(({avatar,name,review},index) => {
          return(
            <SwiperSlide key={index} className='testimonial'>
              <div className='client-avatar'>
                <img src={avatar} />
              </div>
              <h5 className='client-name'> {name} </h5>
              <small className='client-review'> {review}</small>
            </SwiperSlide>
          )
        })
      }
        </Swiper>
     
    </section>
  )
}

export default testimonies