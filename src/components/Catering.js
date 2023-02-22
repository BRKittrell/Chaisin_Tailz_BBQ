import { Link } from "react-router-dom";

const Catering = () => {
  return (
    <div className="component_container">
      <h2>Big or small, we do them all!</h2>
      <ul>
        <li>Baby Q's</li>
        <li>Weddings</li>
        <li>Benefits / Fund Raisers / 501(c)</li>
        <li>Corporate Events</li>
        <li>Birthdays</li>
        <li>Celebrations of Life</li>
        <li>School Functions</li>
        <li>What the heck! Let's have a party!</li>
      </ul>
      <p>Drop off, pick up, or full service available for 20 - 200 people.</p>
      <p>Plates, plastic ware, napkins and sauce provided.</p>
      <button><Link to="/booking" className="nav">Book Us Now!</Link></button>

    </div>
  );
};

export default Catering;
