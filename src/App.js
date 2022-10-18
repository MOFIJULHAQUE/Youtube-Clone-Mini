import "./App.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


//header
import Header from "./component/Header";
import "./component/Header.css";
//Home
import Explore from "./component/Aside_sections/Explore";
import Music from "./component/Aside_sections/Music";
import Video from "./component/Aside_sections/Video";
import { Routes, Route } from "react-router-dom";

//sidebar
import SideBarHome from "./component/SideBar";

//slider
import Slider from "./component/./MainContent/Sliderr";

function App() {
  return (
    <div className="App">
      <Header />
         <Slider/> 

      <Routes>

        {/* <div> */}
        <Route path="/" element={<SideBarHome />} />
        
        <Route path="/Explore" element={<Explore />} />
        <Route path="/Music" element={<Music />} />
        <Route path="/Video" element={<Video />} />
      </Routes>
    </div>
  );
}

export default App;
