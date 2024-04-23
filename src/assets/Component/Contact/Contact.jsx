import './Contact.css'
import msg_icon from '../../edusity_assets/msg-icon.png'

const Contact = () => {
    return (
        <div className='contact'>
            <div className="contact-col">
                <h3>Send us a message <img src={msg_icon} alt="" /> </h3>
                <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
                <ul>
                    <li>Contact@GreatStack.dev</li>
                    <li>+1 123-456-7890</li>
                    <li>77 Massachusetts Ave, Cambridge
                        MA 02139, United States</li>

                </ul>
            </div>
            <div className="contant-cl"></div>

        </div>
    );
};

export default Contact;