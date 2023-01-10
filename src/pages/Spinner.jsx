import React from 'react'
import styles from "./_pages.module.css"

const Spinner = () => {
    return (
      <section id={styles.spinnerBlock}>
        <div className="spinner">
          <div className="bounce1" />
          <div className="bounce2" />
          <div className="bounce3" />
        </div>
      </section>
    );
}

export default Spinner