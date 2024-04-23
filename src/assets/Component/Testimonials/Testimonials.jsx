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
            <div className="slider">
                <ul>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="" />
                                <div>
                                    <h3>Emily Williams</h3>
                                    <span>Edusity,USA</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt="" />
                                <div>
                                    <h3>William Jackson</h3>
                                    <span>Edusity,USA</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt="" />
                                <div>
                                    <h3>Emily Williams</h3>
                                    <span>Edusity,USA</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt="" />
                                <div>
                                    <h3>William Jackson</h3>
                                    <span>Edusity,USA</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                        </div>
                    </li>
                </ul>
            </div>
            
        </div>
    );
};

export default Testimonials;