import './Testimonials.css'
import  Next_icon from '../../edusity_assets/next-icon.png'
import  Back_icon from '../../edusity_assets/back-icon.png'
import  user_1 from '../../edusity_assets/user-1.png'
import  user_2 from '../../edusity_assets/user-2.png'
import  user_3 from '../../edusity_assets/user-3.png'
import  user_4 from '../../edusity_assets/user-4.png'


const Testimonials = () => {
    return (
        <div className='testimonials'>
            <img src={Next_icon} alt="" className='next-btn' />
            <img src={Back_icon} alt="" className='back-btn' />
            
        </div>
    );
};

export default Testimonials;