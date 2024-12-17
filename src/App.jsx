import React from "react";
import Sidebar from "./components/Sidebar";
import SearchBar from "./components/SearchBar";
import TrendingSection from "./components/TrendingSection";
import RecommendedSection from "./components/RecommendedSection";

import Popular from "./components/Popular";
import Toprate from "./components/Toprate";
import "./App.css";

function App() {
  return (
    
    <div className="app">
      <Sidebar />
      <main>
        <SearchBar />
        <TrendingSection />
        <RecommendedSection />
        <Popular/>
        <Toprate/>
      
      </main>
    </div>
 
    
  );
}

export default App;
