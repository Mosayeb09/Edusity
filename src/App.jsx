
import About from './assets/Component/About/About';
import Campus from './assets/Component/Campus/Campus';
import Contact from './assets/Component/Contact/Contact';
import Footer from './assets/Component/Footer/Footer';
import Hero from './assets/Component/Hero/Hero';
import Navbar from './assets/Component/Navbar/Navbar';
import Program from './assets/Component/Programs/Program';
import Testimonials from './assets/Component/Testimonials/Testimonials';
import Title from './assets/Component/Title/Title';

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <div className="container">
        <Title subTitle='Our PROGRAM' title= 'What We Offer'></Title>
        <Program></Program>
        <About></About>
        <Title subTitle='Gallery' title= 'Campus Photos'></Title>
        <Campus></Campus>
        <Title subTitle='TESTIMONIALS' title= 'What Student Says'></Title>
        <Testimonials></Testimonials>
        <Title subTitle='CONTACT US' title= 'Get in Touch'></Title>
        <Contact></Contact>
        <Footer></Footer>

      </div>
      
    </div>
  );
};

export default App;