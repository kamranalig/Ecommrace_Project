import './App.css';
import Footer from './commonComponent/Footer/Footer';
import Navbar from './commonComponent/Navbar/Navbar';
import Products from './commonComponent/products/Products';
import Blogs from './components/blogs/Blogs';
import Discounts from './components/discount/Discounts';
import HeroSection from './components/heroSection/HeroSection';
import Partner from './components/partner/Partner';
import Slider from './components/slider/Slider';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <Discounts/>
      <Slider/>
      <Products/>
      <Blogs/>
      <Partner/>
      <Footer/>
    </div>
  );
}

export default App;
