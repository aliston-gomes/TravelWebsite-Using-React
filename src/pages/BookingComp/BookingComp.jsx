import React from "react";
import {FaSearchLocation} from "react-icons/fa"

const BookingComp = () => {
  return (
    <section className="bookingComponent">
      <article>
        <aside id="whereAreYouGoing">
          <span>
            <FaSearchLocation />
          </span>
          <input type="search" placeholder="Where are you going?" />
        </aside>
        <aside id="checkInOut">
          <input type="text" className="form-control" placeholder="check in" />
          <input type="text" className="form-control" placeholder="check out" />
        </aside>
        <aside id="AdultChildrenRoom">
          <select>
            <option value="adults">Adults</option>
            <option value="children">Children</option>
            <option value="room">Rooms</option>
          </select>
        </aside>
        <aside id="search">
          <button>Search</button>
        </aside>
      </article>
    </section>
  );
};

export default BookingComp;
