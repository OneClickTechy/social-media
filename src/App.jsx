import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { DataProvider } from "./context/dataContext";

const App = () => {
  return (
    // main container
    <DataProvider>
      <div
        id="root-container"
        className="flex flex-col min-h-screen w-full bg-space_cadet-500 text-misty_rose-500"
      >
        <Header />
        <Main />
        <Footer />
      </div>
    </DataProvider>
  );
};

export default App;
