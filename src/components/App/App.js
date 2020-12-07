import logo from "./logo.svg";
import "./App.css";
import { SearchBar } from "../SearchBar/SearchBar";
import { BusinessList } from "../BusinessList/BusinessList";

function App() {
  return (
    <div className="App">
      <h1>ravenous</h1>
      <SearchBar></SearchBar>
      <BusinessList></BusinessList>
    </div>
  );
}

export default App;
