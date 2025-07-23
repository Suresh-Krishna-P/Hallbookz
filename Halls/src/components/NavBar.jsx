import { Link } from 'react-router-dom';
import '/src/Css/NavBar.css';
const NavBar = () => {
  return (
    <div className="navbar">
      <img src="src/images/Navbar_img.jpeg" alt="Navbar" /><h2>HallBookz</h2>
      <center><ul className="nav-links">
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/TopVenues">Top Venues</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
      </ul></center>
      <Link to="/SignUp"><button className='sign'>Sign Up</button></Link>
    </div>    
  );
};

export default NavBar;