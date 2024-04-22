
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
        <Title></Title>
          <Program></Program>
      </div>
      
    </div>
  );
};

export default App;