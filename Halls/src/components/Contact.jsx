import NavBar from './NavBar';
import '/src/Css/Contact.css';
const Contact = () => {
  return (
    <div>
      <NavBar/>
    <section id="Contact">
    <div className="container">
        <h2>Contact Us</h2>
        <div className="contact_wrapper">
                <div className="contact_form">
                    <h3>Send us a Message</h3>
                    <form>
                        <div className="form_group">
                            <input type="text" name="name" placeholder="Enter your Name"/>
                        </div>    
                        <div className="form_group">     
                            <input type="email" name="email" placeholder="Enter your E-mail"/>
                        </div>   
                        <div className="form_group">    
                            <textarea name="message" placeholder="Enter your Message"></textarea>
                        </div>
                        <center><button type="submit">Send Message</button></center>
                    </form>
                </div>
                <div className="contact_info">
                    <h3>Contact Information</h3>
                    <p><i className="fas fa-phone"></i> +91 6381854969</p>
                    <p><i className="fas fa-envelope"></i> skarunachalam31@gmail.com</p>
                    <p><i className="fas fa-map-marker-alt"></i> 123 abc Street,City</p><br/>                
                    <h3>Follow Us</h3>
                    <h4><i className="fab fa-instagram"></i> Instagram</h4>
                    <h4><i className="fab fa-x"></i> X</h4>
                    <h4><i className="fab fa-facebook"></i> facebook</h4>
                </div>
        </div>
    </div>
      </section>
    </div>
  );
};

export default Contact;
