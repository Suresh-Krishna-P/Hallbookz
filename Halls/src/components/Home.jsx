import { Link } from 'react-router-dom';
import '/src/Css/Home.css';
import NavBar from './NavBar';
const Home = () => {
  return (
    <>
    <NavBar/>
    <div>
      <section id="Home">
        <center><h1>Welcome to the HallBookz</h1>
        <h3>Whether you're planning a wedding, birthday party, corporate meeting, or cultural gathering — we've got the ideal venue for every occasion.<br/>
<br/>✪ Easy Booking
✪ Verified Venues
✪ Affordable Prices<br/>

<br/>Start your search now and book hassle-free!<br/>
<br/>Search by location, date, capacity, and amenities.

Your event, your way — made simple.</h3>
        <Link to="/Book"><button>Book Now</button></Link>
        <Link to="/Explore"><button>Explore Venues</button></Link></center>
      </section>
    </div>
    </>
  );
};

export default Home;
