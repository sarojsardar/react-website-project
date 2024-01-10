import React from "react";
import NavBar from "./components/NavBar/NavBar";
import TopBanner from "./components/TopBanner/TopBanner";
import Services from "./components/Services/Services";

function App() {
  return (
    <div className="App">
         <NavBar />
        <TopBanner />
        <Services />
    </div>
  );
}

export default App;
