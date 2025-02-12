import { Router, Route, Routes } from "react-router-dom";
import CardList from "./Components/CardList";
import CardDetail from "./Components/CardDetail";

function App() {
  return (
      <Routes>
        <Route path="/" element={<CardList />} />
        <Route path="/card/:id" element={<CardDetail />} />   
      </Routes>
  );
}

export default App;
