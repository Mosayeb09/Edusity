import './Contact.css'
import msg_icon from '../../edusity_assets/msg-icon.png'
import mail_icon from '../../edusity_assets/mail-icon.png'
import phone_icon from '../../edusity_assets/phone-icon.png'
import location_icon from '../../edusity_assets/location-icon.png'

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
            <div className="contant-cl"></div>

        </div>
    );
};

export default Contact;