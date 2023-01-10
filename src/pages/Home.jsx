import React from 'react'
import BookingComp from './BookingComp/BookingComp'
import Slider from './Slider/Slider'
import styles from "./_pages.module.css"

const Home = () => {
  return (
    <section id={styles.pagesBlock}>
      <Slider />
      <BookingComp/>
      </section>
  )
}

export default Home