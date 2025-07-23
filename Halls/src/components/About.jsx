import NavBar from './NavBar';
import '/src/Css/About.css';
const About = () => {
  return (
    <div>
      <NavBar/>
      <section id="AboutUs">
        <b><div><center><img src="src/images/count1.avif"/><br/>1,000<sup>+</sup><br/>
        Satisfied Happy Clients Around the World  </center></div>
        <div>  <center><img src="src/images/count2.avif"/><br/>500<sup>+</sup><br/>
        Successful Projects Completed Worldwide  </center></div>
        <div>  <center><img src="src/images/count3.avif"/><br/>10,000<sup>+</sup><br/>
        Handcrafted Experiences Designed for You  </center></div>
        <div>  <center><img src="src/images/count4.avif"/><br/>15,000<sup>+</sup><br/>
        Venues Around the World Ready For You  </center></div>
      </b>
      </section>
    </div>
  );
};

export default About;
