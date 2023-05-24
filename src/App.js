import 'bootstrap-icons/font/bootstrap-icons.css';
import AppNavbar from './commonComponent/Navbar/Navbar';
import HomePage from './Pages/landing page/HomePage';
import AllProducts from "./Pages/products/AllProducts";
import BlogsPage from "./Pages/blogs/BlogsPage";
import AboutPage from  "./Pages/about/AboutPage"
import ContactPage from "./Pages/contact/ContactPage";
import LoginPage from "./Pages/auth/LoginPage";
import AddToCartPage from "./Pages/addToCart/AddToCartPage";
import Footer from './commonComponent/Footer/Footer';

function App() {
  return (
    <>
      <AppNavbar />
       <HomePage/>
       <AllProducts/>
       <BlogsPage/>
       <AboutPage/>
       <ContactPage/>
       <LoginPage/>
       <AddToCartPage/>
      <Footer/>
    </>
  );
}

export default App;
