import './Contact.css'
import React from "react";
import msg_icon from '../../edusity_assets/msg-icon.png'
import mail_icon from '../../edusity_assets/mail-icon.png'
import phone_icon from '../../edusity_assets/phone-icon.png'
import location_icon from '../../edusity_assets/location-icon.png'
import white_icon from '../../edusity_assets/white-arrow.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "c563bc98-c9c8-4fa2-a6ce-31b13aeb2c15");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };
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
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label>Your Name</label>
                    <input type="text" name='name' placeholder='Enter Your Name' required />
                    {/* <input type="text" value="" placeholder='Enter Your Name' required /> */}
                    <label>Phone Number</label>
                    <input type="number" name='phone' placeholder='Enter Your Mobile Number' required />
                    {/* <input type="number" name="phone" id="" placeholder='Enter Your Mobile Number' required /> */}
                    <label>Write Your Messages Here</label>
                    {/* <textarea name="message" id=""  rows="6" placeholder='Enter Your Message' required></textarea> */}
                    <textarea name="text" id="" cols="30" rows="10" placeholder='Enter Your message Here' required> </textarea>
                    <button type="submit" className='btn dark-btn'>Submit Now <img src={white_icon} alt="" /> </button>
                </form>
                <span>{result}</span>
            </div>


        </div>
    );
};

export default Contact;