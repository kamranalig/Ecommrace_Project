import 'bootstrap-icons/font/bootstrap-icons.css';
import AppNavbar from './commonComponent/Navbar/Navbar';
import HeroSection from './components/heroSection/HeroSection';
import Discounts from './components/discount/Discounts';
import Products from './commonComponent/products/Products';
import Blogs from './components/blogs/BlogList';
import Partner from './components/partner/Partner';
import Footer from './commonComponent/Footer/Footer';

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
