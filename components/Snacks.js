import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import Menu from './Menu';
import {SNACKS} from '../shared/snacks';

/* const items = [
  {
    src: 'images/CarPic23.png',
    altText: 'Hummus Flavors',
    caption: 'Hummus Flavors',
    selection: 'classic | red pepper | basil pesto | roasted garlic | lemon'
  },
  {
    src: 'images/CarPic47.png',
    altText: 'Veggies Selection',
    caption: 'Veggies Selection',
    selection: 'cucumbers | peppers | carrots | celery | broccoli'
  },
  {
    src: 'images/CarPic28.png',
    altText: 'Pitas Flavors',
    caption: 'Pitas Flavors',
    selection: 'whole wheat | pita chips | pita with cheese '
  },
  {
    src: 'images/CarPic33.png',
    altText: 'Juice Selection',
    caption: 'Juice Selection',
    selection: 'carrot | tomato | orange | mango | apple '
  }
]; */
const items = SNACKS;

const Snacks = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} width='100%' alt={item.altText} />
        <CarouselCaption captionText={item.selection} captionHeader={item.caption} />
      </CarouselItem>
    
    );
  });

  return (
        <div className = 'container'>
          <div className = 'row'>
            <Carousel
              activeIndex={activeIndex}
              next={next}
              previous={previous}
            >
              <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
              {slides}
              <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
              <CarouselControl direction="next" directionText="Next" onClickHandler={next} />  
            </Carousel>
            </div>
            <div className = 'row'>
              <Menu />
            </div>
        </div>
     
  );
}

export default Snacks;