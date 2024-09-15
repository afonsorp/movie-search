import { Route, Routes } from "react-router-dom";
import { Movies } from "./components/movies/movies";
import { Details } from "./components/movies/details/details";
import { NotFound } from "./components/404/notFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="" element={<Movies />} />
        <Route path="/home" element={<Movies />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
