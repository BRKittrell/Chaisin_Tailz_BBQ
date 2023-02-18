import { Routes, Route } from "react-router-dom";
//components
import Catering from "./components/Catering";
import Community from "./components/Community";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Menu from "./components/Menu";
import Merch from "./components/Merch";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/catering" element={<Catering />} />
          <Route path="/community" element={<Community />} />
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/merch" element={<Merch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
