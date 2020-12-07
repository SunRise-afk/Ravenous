import "./App.css";
import { SearchBar } from "../SearchBar/SearchBar";
import { BusinessList } from "../BusinessList/BusinessList";
import { Yelp } from "../../util/Yelp";
import { useState } from "react";

function App() {
  const [businesses, setBusinesses] = useState([]);

  const searchYelp = (term, location, sortBy) => {
    console.log(`Searching Yelp with ${term}, ${location}, ${sortBy}`);
    Yelp.search(term, location, sortBy).then((businesses) => {
      console.log(businesses);
      setBusinesses(businesses);
    });
  };
  return (
    <div className="App">
      <h1>ravenous</h1>
      <SearchBar searchYelp={searchYelp}></SearchBar>
      <BusinessList businesses={businesses}></BusinessList>
    </div>
  );
}

export default App;
