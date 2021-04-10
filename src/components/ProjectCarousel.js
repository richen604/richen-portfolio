import React, { useState } from "react"
import {
  CarouselItem,
  CarouselCaption,
  Carousel,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap"
import "./ProjectCarousel.css"

const items = [
  {
    src: `bloglist-mockup.png`,
    altText: "BlogList App Mockup",
    caption: "Slide 1",
    header: "BlogList",
    key: "1",
  },
  {
    src: `raterepo-mockup.png`,
    altText: "RateRepo App Mockup",
    caption: "Slide 2",
    header: "RateRepo",
    key: "2",
  },
  {
    src: `library-mockup.png`,
    altText: "Library App Mockup",
    caption: "Slide 3",
    header: "Library",
    key: "3",
  },
]

const ProjectCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [animating, setAnimating] = useState(false)

  const next = () => {
    if (animating) return
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1
    setActiveIndex(nextIndex)
  }

  const previous = () => {
    if (animating) return
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1
    setActiveIndex(nextIndex)
  }

  const goToIndex = newIndex => {
    if (animating) return
    setActiveIndex(newIndex)
  }

  const slides = items.map(item => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img className="carousel-img" src={item.src} alt={item.altText} />
        <CarouselCaption
          className="carousel-details"
          captionHeader={item.header}
        />
      </CarouselItem>
    )
  })

  return (
    <div id="carousel-container">
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          className="carousel-details"
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          className="carousel-details"
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          className="carousel-details"
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </div>
  )
}

export default ProjectCarousel
