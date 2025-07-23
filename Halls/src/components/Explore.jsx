import { useState } from "react";
import NavBar from './NavBar';
import '/src/Css/Explore.css';

const Explore = () => {
  const baseVenues = [
    { city: "Chennai", name: "Hotel Phoenix", price: "₹75,000/day", image: "src/images/book1.jpeg" },
    { city: "Ooty", name: "Chill Station Resort", price: "₹70,000/day", image: "src/images/book2.jpeg" },
    { city: "Madurai", name: "Classic Halls", price: "₹60,000/day", image: "src/images/book3.jpeg" },
    { city: "Dindugal", name: "Raj Party Halls", price: "₹50,000/day", image: "src/images/book4.jpeg" },
    { city: "Salem", name: "Desotta Hotel", price: "₹90,000/day", image: "src/images/book5.jpeg" },
    { city: "Tuticorin", name: "Hotel Meridian", price: "₹1,00,000/day", image: "src/images/book6.jpeg" },
  ];

  const venues = Array.from({ length: 20 }, (_, i) => ({
    ...baseVenues[i % baseVenues.length],
    id: i
  }));

  const [locationFilter, setLocationFilter] = useState('');

  const filteredVenues = venues.filter(venue =>
    venue.city.toLowerCase().includes(locationFilter.toLowerCase())
  );

  return (
    <>
      <NavBar />
      <section id="Explore">
        <div className="filter-bar">
          <input
            type="text"
            placeholder="Search by city..."
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
          />
        </div>

        <div className="card-grid">
          {filteredVenues.map((venue, index) => (
            <div className="explore-card" key={index}>
              <img src={venue.image} alt={`${venue.name} image`} />
              <div className="info">
                <h2>{venue.name}</h2>
                <p>{venue.city}</p>
                <span>{venue.price}</span>
              </div>
            </div>
          ))}
        </div>

        {filteredVenues.length === 0 && (
          <p className="no-results">No venues found for the selected city.</p>
        )}
      </section>
    </>
  );
};

export default Explore;
