import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import slider_image1 from "./slider_Images/slider_image1.jpg";
import slider_image2 from "./slider_Images/slider_image2.jpg";
import slider_image3 from "./slider_Images/slider_image3.jpg";
import slider_image4 from "./slider_Images/slider_image4.jpg";
import slider_image5 from "./slider_Images/slider_image5.jpg";
import styles from "./_slider.module.css"

const Slider = () => {
  return (
    <Carousel
      autoPlay={5000}
      infiniteLoop
      showThumbs={false}
      // stopOnHover
      transitionTime={1000}
      showIndicators={false}
    >
      <div className={styles.sliderWrapper}>
        <img src={slider_image1} />
        <p className="legend">
          “Jobs fill your pockets, adventures fill your soul.”
        </p>
      </div>
      <div className={styles.sliderWrapper}>
        <img src={slider_image2} />
        <aside className="legend">
          <h1>SIRSI</h1>
          <p>“Travel. Your money will return. Your time won’t.”</p>
        </aside>
      </div>
      <div className={styles.sliderWrapper}>
        <img src={slider_image3} />
        <aside className="legend">
          <h1>BANGLORE</h1>
          <p>“Travel is the only thing you buy that makes you richer.”</p>
        </aside>
      </div>
      <div className={styles.sliderWrapper}>
        <img src={slider_image4} />
        <aside className="legend">
          <h1>MYSORE</h1>
          <p>
            “The world is a book and those who do not travel read only one
            page.”
          </p>
        </aside>
      </div>
      <div className={styles.sliderWrapper}>
        <img src={slider_image5} />
        <aside className="legend">
          <h1>MANDYA</h1>
          <p>
            “I love places that make you realize how tiny you and your problems
            are.”
          </p>
        </aside>
      </div>
    </Carousel>
  );
};

export default Slider;
