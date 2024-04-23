
import About from './assets/Component/About/About';
import Campus from './assets/Component/Campus/Campus';
import Hero from './assets/Component/Hero/Hero';
import Navbar from './assets/Component/Navbar/Navbar';
import Program from './assets/Component/Programs/Program';
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

      </div>
      
    </div>
  );
};

export default App;