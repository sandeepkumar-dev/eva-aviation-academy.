/* eslint-disable */

import React from 'react';
import {useNavigate} from 'react-router-dom';

import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../styles/PhotoCarousel.css';

import {
  Navigation,
  Pagination,
  EffectCoverflow,
  Scrollbar,
  A11y,
} from 'swiper/modules';

import slide_image_1 from '../images/img-01.jpg';
import slide_image_2 from '../images/img-02.jpg';
import slide_image_3 from '../images/img-03.jpg';
import slide_image_4 from '../images/img-04.jpg';
import slide_image_5 from '../images/img-05.jpg';
import slide_image_6 from '../images/img-06.jpg';
import slide_image_7 from '../images/img-07.jpg';
import slide_image_8 from '../images/img-08.jpg';
import slide_image_9 from '../images/img-09.jpg';
import slide_image_10 from '../images/img-10.jpg';
import slide_image_11 from '../images/img-11.jpg';
import slide_image_12 from '../images/img-28.jpg';

// for spices-box
import SpiceImage from '../images/img-01.jpg';
import SpiceImage2 from '../images/img-02.jpg';
import SpiceImage3 from '../images/img-03.jpg';
import SpiceImage4 from '../images/img-04.jpg';
import SpiceImage5 from '../images/img-05.jpg';
import SpiceImage6 from '../images/img-06.jpg';
import SpiceImage7 from '../images/img-07.jpg';
import SpiceImage8 from '../images/img-08.jpg';
import SpiceImage9 from '../images/img-09.jpg';
import SpiceImage10 from '../images/img-10.jpg';
import SpiceImage11 from '../images/img-11.jpg';
import SpiceImage12 from '../images/img-12.jpg';
import SpiceImage13 from '../images/img-13.jpg';
import SpiceImage14 from '../images/img-14.jpg';
import SpiceImage15 from '../images/img-15.jpg';
import SpiceImage16 from '../images/img-16.jpg';
import SpiceImage17 from '../images/img-17.jpg';
import SpiceImage18 from '../images/img-18.jpg';
import SpiceImage19 from '../images/img-19.jpg';
import SpiceImage20 from '../images/img-20.jpg';
import SpiceImage21 from '../images/img-21.jpg';
import SpiceImage22 from '../images/img-22.jpg';
import SpiceImage23 from '../images/img-23.jpg';
import SpiceImage24 from '../images/img-24.jpg';
import SpiceImage25 from '../images/img-25.jpg';
import SpiceImage26 from '../images/img-26.jpg';
import SpiceImage27 from '../images/img-27.jpg';
import SpiceImage28 from '../images/img-28.jpg';
import SpiceImage29 from '../images/img-29.jpg';

const spiceData = [
  {
    id: 1,
    spicePhoto: SpiceImage,
    spiceName: 'Turmeric',
    botanicalName: 'Curcuma longa',
  },
  {
    id: 2,
    spicePhoto: SpiceImage2,
    spiceName: 'Green Cardamom',
    botanicalName: 'Elettaria cardamomum',
  },
  {
    id: 3,
    spicePhoto: SpiceImage3,
    spiceName: 'Mace',
    botanicalName: ' Myristica fragrans',
  },
  {
    id: 4,
    spicePhoto: SpiceImage4,
    spiceName: 'Star Anise',
    botanicalName: 'Illicium verum',
  },
  {
    id: 5,
    spicePhoto: SpiceImage5,
    spiceName: 'Black Cardamom',
    botanicalName: 'Amomum subulatum',
  },
  {
    id: 6,
    spicePhoto: SpiceImage6,
    spiceName: 'Cinnamom',
    botanicalName: 'Cinnamomum verum ',
  },
  {
    id: 7,
    spicePhoto: SpiceImage7,
    spiceName: 'Black Pepper',
    botanicalName: 'Piper nigrum',
  },
  {
    id: 8,
    spicePhoto: SpiceImage8,
    spiceName: 'Cumin',
    botanicalName: 'Cuminun cyminum',
  },
  {
    id: 9,
    spicePhoto: SpiceImage9,
    spiceName: 'Clove',
    botanicalName: 'Syzygium aromaticum',
  },
  {
    id: 10,
    spicePhoto: SpiceImage10,
    spiceName: 'Nutmeg',
    botanicalName: 'Myristica fragrans',
  },
  {
    id: 11,
    spicePhoto: SpiceImage11,
    spiceName: 'Carom Seeds (Ajwain)',
    botanicalName: 'Trachyspermum ammi',
  },
  {
    id: 12,
    spicePhoto: SpiceImage12,
    spiceName: 'Dry Ginger',
    botanicalName: 'Zingiber officinale',
  },
  {
    id: 13,
    spicePhoto: SpiceImage13,
    spiceName: 'Red Dried Chili',
    botanicalName: 'Capsicum annuum',
  },
  {
    id: 14,
    spicePhoto: SpiceImage14,
    spiceName: 'Red Chilli Flakes',
    botanicalName: 'Capsicum annum L.',
  },
  {
    id: 15,
    spicePhoto: SpiceImage15,
    spiceName: 'Long Pepper',
    botanicalName: 'Piper longum',
  },
  {
    id: 16,
    spicePhoto: SpiceImage16,
    spiceName: 'Nigella Seeds',
    botanicalName: 'Nigella',
  },
  {
    id: 17,
    spicePhoto: SpiceImage17,
    spiceName: 'Bay Leaf',
    botanicalName: 'Laurus nobilis',
  },
  {
    id: 18,
    spicePhoto: SpiceImage18,
    spiceName: 'Feenel Seeds',
    botanicalName: 'Foeniculum vulgare',
  },
  {
    id: 19,
    spicePhoto: SpiceImage19,
    spiceName: 'Fenugreek Seeds',
    botanicalName: 'Trigonella foenum-graecum',
  },
  {
    id: 20,
    spicePhoto: SpiceImage20,
    spiceName: 'Tamarind',
    botanicalName: 'Tamarindus indica',
  },
  {
    id: 21,
    spicePhoto: SpiceImage21,
    spiceName: 'White Peppercorns',
    botanicalName: 'Piper nigrum',
  },
  {
    id: 22,
    spicePhoto: SpiceImage22,
    spiceName: 'Asafoetida',
    botanicalName: 'Ferula assa-foetida',
  },
  {
    id: 23,
    spicePhoto: SpiceImage23,
    spiceName: 'Coriander Seeds',
    botanicalName: 'Coriandrum sativum',
  },
  {
    id: 24,
    spicePhoto: SpiceImage24,
    spiceName: 'Yellow Mustard',
    botanicalName: 'Sinapis alba',
  },
  {
    id: 25,
    spicePhoto: SpiceImage25,
    spiceName: 'Pomegranate Seeds',
    botanicalName: 'Punica granatum',
  },
  {
    id: 26,
    spicePhoto: SpiceImage26,
    spiceName: 'Poppy Seeds (Black)',
    botanicalName: 'Papaver somniferum',
  },
  {
    id: 27,
    spicePhoto: SpiceImage27,
    spiceName: 'Poppy Seeds (White)',
    botanicalName: 'Papaver somniferum',
  },
  {
    id: 28,
    spicePhoto: SpiceImage28,
    spiceName: 'Saffron',
    botanicalName: 'Crocus sativus',
  },
  {
    id: 29,
    spicePhoto: SpiceImage29,
    spiceName: 'Thyme Dry Leaves',
    botanicalName: 'Thymus vulgaris',
  },
];

const Spices = () => {
  const navigate = useNavigate();

  const handleClick = (spice) => {
    navigate(`/spice-description/${spice.id}`);
  };

  return (
    <>
      <div className="spices-gallary">
        <div className="spicessss-container">
          <h1 className="heading">Spices Gallery</h1>
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
            pagination={{el: '.swiper-pagination', clickable: true}}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation, Scrollbar, A11y]}
            className="swiper_container"
          >
            <SwiperSlide>
              <img src={slide_image_1} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide_image_2} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide_image_3} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide_image_4} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide_image_5} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide_image_6} alt="slide_image" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={slide_image_7} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide_image_8} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide_image_9} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide_image_10} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide_image_11} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide_image_12} alt="slide_image" />
            </SwiperSlide>

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
      </div>
      <div className="spices-container">
        {spiceData.map((spice) => (
          <div key={spice.id} className="spices-box">
            <img
              src={spice.spicePhoto}
              alt={spice.spiceName}
              onClick={() => handleClick(spice)}
            />
            <h3>
              {' '}
              <a onClick={() => handleClick(spice)}>{spice.spiceName}</a>{' '}
            </h3>
            <p>Botanical Name: {spice.botanicalName}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Spices;
