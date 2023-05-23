import 'bootstrap-icons/font/bootstrap-icons.css';
import Footer from './commonComponent/Footer/Footer';
import AppNavbar from './commonComponent/Navbar/Navbar';
import Products from './commonComponent/products/Products';
import Blogs from './components/blogs/Blogs';
import Discounts from './components/discount/Discounts';
import HeroSection from './components/heroSection/HeroSection';
import Partner from './components/partner/Partner';

function App() {
  return (
    <>
      <AppNavbar />
      <HeroSection/>
      <Discounts/>
      <Products/>
      <Blogs/>
      <Partner/>
      <Footer/>
    </>
  );
}

export default App;
