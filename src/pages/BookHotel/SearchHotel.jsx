import React from "react";
import Styles from "./_search.module.css";

const SearchHotel = () => {
  return (
    <section id={Styles.searchHotel}>
      <article>
        <form>
          <div className="form-group">
            <input type="text" placeholder="Where are you going?" />
          </div>

          <div className="form-group">
           
          </div>

          <div className="form-group">
           
          </div>

          <div className="form-group">
            <button>Search</button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default SearchHotel;
