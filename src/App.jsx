import Body from "./Component/Body/Body";
import ComplaintFillingServices from "./Component/Complaint/ComplaintFillingServices";
import Contactus from "./Component/Contacts/Contactus";
import Footer from "./Component/Footer/Footer";
import Legal from "./Component/LegalService/Legal";
import Navbar from "./Component/Navbar/Navbar";
import TradeMark from "./Component/TradeMark/TradeMark";

// Main App Component for structure and component mounting
const App = () => {
  return (
    <div>
      <Navbar />
      <Body />
      <Legal />
      <ComplaintFillingServices />
      <TradeMark />
      <Contactus />
      <Footer />
    </div>
  );
};

export default App;
