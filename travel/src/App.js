import Navbar from "./compunet/header/indix";
import Desitnations from "./compunet/hero/indix";
import  CATEGORY from "./compunet/hero-2/indix";
import  TopSelling from "./compunet/topselling/indix";
import EasyFast from './compunet/Easy and Fast/indix';
import TestImonials from './compunet/Testimonials/indix'
import Contact from './compunet/contact/indix'
import Footer  from './compunet/footer/indix'
function App() {
  return (
    <div className="App">
     <Navbar/> 
      <Desitnations/> 
      <CATEGORY />
      <TopSelling/>
      <EasyFast/>
      <TestImonials/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
