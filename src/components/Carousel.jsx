// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

import bgimg1 from '../assets/b1.jpg'
import bgimg2 from '../assets/b2.jpg'
import bgimg3 from '../assets/b3.jpeg'


export default function Carousel() {
  return (
    <div className='h-screen'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper h-[800px]'
      >
        <SwiperSlide className='object-cover'>
            <img src={bgimg1} alt="" />
        </SwiperSlide>
        <SwiperSlide className=''>
        <img className='object-cover' src={bgimg2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img className='h-full w-full' src={bgimg3} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}