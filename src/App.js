import React from "react";
import Header from "./Component/Header/Header";
import FirstSection from "./Component/FirstSection/FirstSection";
import SecondSection from "./Component/SecoundSection/SecondSection";
import ThirdSection from "./Component/ThirdSection/ThirdSection";
import Footer from "./Component/Footer/Footer";
// import SignUp from "./Component/SignUp/SignUp";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <FirstSection />
      <SecondSection />

      <ThirdSection />

      <Footer />
      {/* <SignUp /> */}
    </>
  );
}

export default App;
