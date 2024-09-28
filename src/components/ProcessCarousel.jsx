import React from 'react'
import Carousel from 'react-multi-carousel';
import './process.css'

import 'react-multi-carousel/lib/styles.css';

const ProcessCarousel = () => {
  return (
    <div>
        <Carousel
  // additionalTransfrom={0}
  // arrows
  autoPlaySpeed={3000}
  // centerMode={true}
  // className=""
  // dotListClass=""
  draggable
  focusOnSelect={false}
  infinite={false}
  // itemClass=""
  // keyBoardControl
  minimumTouchDrag={80}
  // pauseOnHover
  // renderArrowsWhenDisabled={false}
  // renderButtonGroupOutside={false}
  // renderDotsOutside={false}
  responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 564
      },
      items: 2,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 564,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
  
  }}
  rewind={false}
  rewindWithAnimation={false}
  rtl={false}
  shouldResetAutoplay
  showDots={false}
  sliderClass=""
  slidesToSlide={1}
  swipeable
>
  <div className='processItem'>
    <i class="fa-solid fa-headset"></i>
    <h1>Consultation</h1>
    <p>We listen, understand, and strategize. From the first conversation, we dive deep  into your vision to ensure we're aligned with your goals.
  </p>
  </div>
  <div className='processItem'>
  <i class="fa-brands fa-dribbble"></i>
    <h1>Design</h1>
    <p> Crafting your digital identity. We translate your brand's essence into a visual masterpiece, balancing aesthetics with functionality.</p>
  </div>
  <div className='processItem'>
    <i class="fa-solid fa-laptop-code"></i>
    <h1>Development</h1>
    <p>Where creativity meets technology – Using the latest tech, we build robust, scalable, and dynamic solutions tailored to your needs.</p>
  </div>
  <div className='processItem'>
    <i class="fa-regular fa-window-maximize"></i>
    <h1>Launch & Support</h1>
    <p>Beyond the launch – we’re in it for the long haul : We ensure a seamless go-live experience, with ongoing maintenance and optimization to keep you ahead of the curve.</p>
  </div>
</Carousel>
    </div>
  )
}

export default ProcessCarousel