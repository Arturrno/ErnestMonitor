// app/about/page.tsx

import About from '../pages/About';
import Navbar from '../components/Navbar';
import './about.css';

const AboutPage = () => {
  return (
    <div>
      <Navbar/>
      <About />
    </div>
  );
};

export default AboutPage;
