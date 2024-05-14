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
import bgimg4 from '../assets/b4.jpg'


export default function Carousel() {
  return (
    <div className='relative'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper md:h-[600px]'
      >
        <SwiperSlide className='object-cover'>
            <img src={bgimg1} alt="" />
        </SwiperSlide>
        <SwiperSlide className=''>
        <img className='object-cover ' src={bgimg2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        {/* <img className=' object-cover ' src={bgimg3} alt="" /> */}
        <img className=' object-cover ' src={bgimg2} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}