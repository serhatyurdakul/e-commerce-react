import React from "react";
import Slider from "react-slick";

const SliderComp = () => {
  const settings = {
    //dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className='!flex items-center bg-gray-100 px-6'>
          <div>
            <div className='text-6xl font-bold'>Legendary shoes are here</div>
            <div className='text-lg my-4'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
              vitae accusantium numquam, magni itaque accusamus neque magnam
              cumque maiores ullam nemo, voluptatibus excepturi, pariatur sint
              consequuntur earum minus harum. Soluta?
            </div>
            <div className='border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200'>
              Review
            </div>
          </div>
          <img src='/src/assets/img/1.png' alt='' />
        </div>

        <div className='!flex items-center bg-gray-100 px-6'>
          <div>
            <div className='text-6xl font-bold'>Legendary shoes are here</div>
            <div className='text-lg my-4'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
              vitae accusantium numquam, magni itaque accusamus neque magnam
              cumque maiores ullam nemo, voluptatibus excepturi, pariatur sint
              consequuntur earum minus harum. Soluta?
            </div>
            <div className='border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200'>
              Review
            </div>
          </div>
          <img className='' src='/src/assets/img/2.png' alt='' />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
