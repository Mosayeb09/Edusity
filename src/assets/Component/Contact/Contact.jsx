import './Contact.css'
import msg_icon from '../../edusity_assets/msg-icon.png'
import mail_icon from '../../edusity_assets/mail-icon.png'
import phone_icon from '../../edusity_assets/phone-icon.png'
import location_icon from '../../edusity_assets/location-icon.png'
import white_icon  from '../../edusity_assets/white-arrow.png'

const Contact = () => {
    return (
        <div className='contact'>
            <div className="contact-col">
                <h3>Send us a message <img src={msg_icon} alt="" /> </h3>
                <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
                <ul>
                    <li> <img src={mail_icon} alt="" /> Contact@GreatStack.dev</li>
                    <li> <img src={phone_icon} alt="" /> +1 123-456-7890</li>
                    <li> <img src={location_icon} alt="" /> 77 Massachusetts Ave, Cambridge
                        MA 02139, United States</li>

                </ul>
            </div>
            <div className="contant-col"></div>
            <form>
                <label>Your Name</label>
                <input type="text" value="" placeholder='Enter Your Name' required />
                <label>Phone Number</label>
                <input type="number" name="phone" id="" placeholder='Enter Your Mobile Number' required />
                <label>Write Your Messages Here</label>
                {/* <textarea name="message" id=""  rows="6" placeholder='Enter Your Message' required></textarea> */}
                <textarea name="" id=""  rows="6"></textarea>
                <button type="button" className='btn dark-btn'>Submit Now <img src={white_icon} alt="" /> </button>

            </form>

        </div>
    );
};

export default Contact;