
import './App.css';
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero"
import Service from './components/service/service';
import Shopnow from './components/shop now/shopnow';
import New from './components/new arrivals/new';
import Quality from "./components/quality/quality"
import Story from "./components/our story/story"
import Discount from "./components/discount/discount"
import Post from "./components/posts/post"
import Footer from "./components/footer/footer"


function App() {
  return (
    <div className="">
    
        <Navbar />
        <Hero />
        <Service/>
        <Shopnow/>
        <New />
        <Quality/>
        <Story />
        <Discount />
        <Post />
        <Footer />
      
    </div>
  );
}

export default App;
