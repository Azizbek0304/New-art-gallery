import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import './swipercomponent.scss'; // Create a CSS file to add styles for the component

const CreativeSwiperComponent = () => {
  useEffect(() => {
    const swiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      mousewheel: {},
      effect: 'cube',
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
    });

    // Clean up Swiper instance on unmount
    return () => {
      swiper.destroy();
    };
  }, []);

  // Sample data for the gallery items
  const galleryData = [
    { id: 1, effect: 'wrap-effect-1' },
    { id: 2, effect: 'wrap-effect-2' },
    { id: 3, effect: 'wrap-effect-3' },
    { id: 4, effect: 'wrap-effect-4' },
  ];

  return (
    <>
      <div className="heading">Scroll to see more</div>
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {galleryData.map((item) => (
            <div className="swiper-slide" key={item.id}>
              <div className="container-general">
                <div className={`gallery-wrap ${item.effect}`}>
                  {/* Add your content here for each gallery item */}
                  <div className="item"></div>
                  <div className="item"></div>
                  <div className="item"></div>
                  <div className="item"></div>
                  <div className="item"></div>
                </div>
              </div>
            </div>
          ))}
          <div className="swiper-slide">
            Inspire by{' '}
            <a
              className="inspire"
              href="https://dribbble.com/galshir"
              target="_blank"
            >
              &nbsp;Galshir arts
            </a>
            . Thank you
          </div>
        </div>
      </div>
    </>
  );
};

export default CreativeSwiperComponent;
