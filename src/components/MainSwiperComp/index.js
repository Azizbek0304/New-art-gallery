import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import 'swiper/components/effect-coverflow/effect-coverflow.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';
import './mainswipercomp.css';

function MainSwiperComp() {
  const slideImages = [
    'https://t4.ftcdn.net/jpg/05/53/48/87/360_F_553488732_6GhfwBhYFelkhgYykFHXqLY7Rasubfcs.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMg7NE_SCcMWgFrB6EvSGHqk841w6mNRQYYGyo2sYj&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3CbIesBcurufchcr_LNxKW9V3lK34KzjDOOyCS6Hnmnt-vynfaU1GTq8umLA3aacfRuc&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhzvDQnk7uV6kTqfD45rc9Hf5rsYIK7afQMILBuMzn&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfyZEprYRBrpHmBZtBvW1m2PDqQxaTvPRT9IdQkImcX-ez63h1IY7r_KnNrYF7Zg2NdYY&usqp=CAU',
    'https://t3.ftcdn.net/jpg/05/73/05/68/360_F_573056850_uoc6YmCgy1VNDbQQvMSDmXZ4ASYxR14N.jpg',
  ];

  return (
    <div className="container">
      <h1 className="heading">Flower Gallery</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {slideImages.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`slide_image_${index + 1}`} />
          </SwiperSlide>
        ))}
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default MainSwiperComp;
