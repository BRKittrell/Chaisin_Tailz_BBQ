const Catering = () => {
  return (
    <div className="component_container">
      <h1>Catering Request</h1>
      <div id="form_div">
      <form>
        <div>
          <div id="details_div">
          <label>Date</label>
          <input type="date" required></input>
          <label>Start Time</label>
          <input
            className="booking_input"
            type="time"
            min="10:00"
            max="22:00"
            required
          ></input>
          <label>Venue</label>
          <input className="booking_input" type="text" required></input>
          <label>Address</label>
          <input className="booking_input" type="text" required></input>
          <label>City</label>
          <input className="booking_input" type="text" required></input>
          <label>Name</label>       
          <input className="booking_input" type="text" required></input>
          <label>Email</label>
          <input className="booking_input" type="email" required></input>
          <label>Phone</label>
          <input className="booking_input" type="tel" required></input>
          <label>Occasion</label>
          <input className="booking_input" type="text" required></input>
          </div>
          </div>
          <br></br>
          <button type="submit">Request Catering</button>
      </form>
      </div>
    </div>
  );
};

export default Catering;
