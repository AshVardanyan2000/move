import React from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


const Index = ({ list, onClick }) => {
  return (
      <Swiper
        spaceBetween={15}
        slidesPerView={8}
        navigation={list.length > 8}
        modules={[Navigation]}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {list.map((l) => (
          <SwiperSlide key={l.Id}>
            <div
              role="button"
              tabIndex="0"
              onClick={() => onClick(l)}
              className="slider_item"
            >
              <img src={`/images/${l.CoverImage}`} alt="image" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
  );
};

Index.propTypes = {
  list: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Index;
