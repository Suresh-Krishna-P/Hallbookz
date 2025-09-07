import { useState } from "react";
import NavBar from './NavBar';
import '/src/Css/Book.css';
import { Link } from 'react-router-dom';

const Book = () => {
  const venues = [
    { city: "Chennai", name: "Hotel Phoenix", price: 50000, image: "src/images/book1.jpeg", availability: "Available", datesUnavailable: [] },
    { city: "Ooty", name: "Chill Station Resort", price: 70000, image: "src/images/book2.jpeg", availability: "Available", datesUnavailable: ["2025-07-15", "2025-07-16"] },
    { city: "Madurai", name: "Classic Halls", price: 60000, image: "src/images/book3.jpeg", availability: "Available", datesUnavailable: [] },
    { city: "Dindugal", name: "Raj Party Halls", price: 75000, image: "src/images/book4.jpeg", availability: "Available", datesUnavailable: ["2025-07-14", "2025-07-17"] },
    { city: "Salem", name: "Desotta Hotel", price: 90000, image: "src/images/book5.jpeg", availability: "Available", datesUnavailable: [] },
    { city: "Tuticorin", name: "Hotel Meridian", price: 100000, image: "src/images/book6.jpeg", availability: "Available", datesUnavailable: ["2025-07-15"] },
  ];

  const [locationFilter, setLocationFilter] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  const filteredVenues = venues.filter(venue => {
    const matchesCity = venue.city.toLowerCase().includes(locationFilter.toLowerCase());
    const isAvailableOnDate = selectedDate
      ? !venue.datesUnavailable.includes(selectedDate)
      : true;
    return matchesCity && isAvailableOnDate;
  });

  return (
    <>
      <NavBar />
      <div>
        <section id="Book">
          <div className="filter-bar">
            <input
              type="text"
              placeholder="Search by city..."
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
            />
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
          </div>

          {filteredVenues.length > 0 ? (
            filteredVenues.map((venue, index) => (
              <div className="card-wrapper" key={index}>
                <div className="content">
                  <img src={venue.image} alt={`${venue.name} image`} />
                  <div className="description">
                    <h1><i className="fas fa-map-marker-alt"></i> {venue.city}</h1>
                    <h2>{venue.name}</h2>
                    <h4>₹{venue.price}/day</h4>
                    <h4>{venue.availability}</h4>
                  </div>
                </div>
                <div className="services">
                  <center><p>Available Services</p></center>
                  <ul className="services-list">
                    <li>Decoration</li>
                    <li>Catering</li>
                    <li>Parking</li>
                  </ul>
                </div>
                <center><Link 
    to="/Payment" 
    state={{ 
      hallName: venue.name, 
      location: venue.city, 
      fullDayAmount: venue.price,
      selectedDate
    }}
  >
    <button className="now">Book Now</button></Link>
                <a href="https://www.google.co.in/maps/place/Liam+Banquet+Halls+-+Singanallur/@11.003987,76.9688966,12z/data=!4m10!1m2!2m1!1shalls!3m6!1s0x3ba8575b6a1d3343:0x39f964d146d25579!8m2!3d11.0031219!4d77.0282439!15sCgVoYWxsc1oHIgVoYWxsc5IBDGJhbnF1ZXRfaGFsbKoBQwoJL20vMDhzYjl3EAEqCSIFaGFsbHMoADIeEAEiGme4U0iq7J8p4T4K7yqsai00W-UTjcVusD8IMgkQAiIFaGFsbHPgAQA!16s%2Fg%2F11sgv5kvw0?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D"><button className="map">View Map</button></a></center>
              </div>
            ))
          ) : (
            <p style={{ color: 'white', fontSize: '20px' }}>No venues available for the selected location and date.</p>
          )}
        </section>
      </div>
    </>
  );
};

export default Book;
