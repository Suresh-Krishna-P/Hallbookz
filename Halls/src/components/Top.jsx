import { useState, useEffect, useRef } from 'react';
import '/src/Css/Top.css';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';

function TopVenues() {
  const [flipped, setFlipped] = useState('');
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  const venues = [
    { city: "Chennai", name: "Hotel Phoenix", price: 75000, image: "src/images/book1.jpeg", availability: "Available", datesUnavailable: [] },
    { city: "Ooty", name: "Chill Station Resort", price: 70000, image: "src/images/book2.jpeg", availability: "Available", datesUnavailable: ["2025-07-15", "2025-07-16"] },
    { city: "Madurai", name: "Classic Halls", price: 60000, image: "src/images/book3.jpeg", availability: "Available", datesUnavailable: [] },
    { city: "Dindugal", name: "Raj Party Halls", price: 50000, image: "src/images/book4.jpeg", availability: "Available", datesUnavailable: ["2025-07-14", "2025-07-17"] },
    { city: "Salem", name: "Desotta Hotel", price: 90000, image: "src/images/book5.jpeg", availability: "Available", datesUnavailable: [] },
    { city: "Tuticorin", name: "Hotel Meridian", price: 100000, image: "src/images/book6.jpeg", availability: "Available", datesUnavailable: ["2025-07-15"] },
  ];

  const startAutoPlay = () => {
    intervalRef.current = setInterval(() => {
      scrollRight(true); 
    }, 3000);
  };

  const pauseAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      startAutoPlay();
    }, 5000);
  };

  const scrollRight = (fromAuto = false) => {
    if (!fromAuto) pauseAutoPlay();

    const container = sliderRef.current;
    if (!container) return;

    const atEnd =
      Math.ceil(container.scrollLeft + container.offsetWidth) >= container.scrollWidth;

    if (atEnd) {
      container.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: 280, behavior: 'smooth' });
    }
  };

  const scrollLeft = () => {
    pauseAutoPlay();

    const container = sliderRef.current;
    if (!container) return;

    const atStart = container.scrollLeft === 0;
    if (atStart) {
      container.scrollTo({ left: container.scrollWidth, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: -280, behavior: 'smooth' });
    }
  };

  const handleFlip = (index) => {
    pauseAutoPlay();

    const updated = [...flipped];
    updated[index] = !updated[index];
    setFlipped(updated);
  };

  useEffect(() => {
    startAutoPlay();

    return () => {
      clearInterval(intervalRef.current);
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div>
      <NavBar />
      <section id="TopVenues">
        <button className="arrow left" onClick={scrollLeft}>←</button>

        <div className="slider-container" ref={sliderRef}>
          {venues.map((venue, index) => (
            <div className="card-wrapper" key={index}>
              <div className={`card-inner ${flipped[index] ? 'flipped' : ''}`}>
                <div className="card front">
                  <img src={venue.image} alt="" />
                  <h1><i className="fas fa-map-marker-alt"></i> {venue.city}</h1>
                  <h2>{venue.name}</h2>
                  <h4>₹{venue.price}/day</h4>
                  <h5>{venue.availability}</h5>
                  <div id="btn-container">
                    <button id="services" onClick={() => handleFlip(index)}>Services</button>
                    
                    {/* ✅ Book Now button passes hall info to Payment */}
                    <Link 
                      to="/Payment" 
                      state={{ 
                        hallName: venue.name, 
                        location: venue.city, 
                        fullDayAmount: venue.price,  // full-day price from venue
                      }}
                    >
                      <button id="add">Book Now</button>
                    </Link>
                  </div>
                </div>
                <div className="card back">
                  <center>
                    <h1>Available Services</h1>
                    <ul>
                      <h2>
                        <li>Decoration</li>
                        <li>Catering</li>
                        <li>Parking</li>
                      </h2>
                    </ul>
                    <button onClick={() => handleFlip(index)}>Back</button>
                  </center>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="arrow right" onClick={scrollRight}>→</button>
      </section>
    </div>
  );
}

export default TopVenues;
