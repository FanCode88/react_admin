import { Sidebar } from "./components/sidebar/Sidebar";
import { Topbar } from "./components/topbar/Topbar";
import "./app.css";
import { Home } from "./pages/home/Home";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Route path="/" element={Home}>
          <Home />
        </Route>
      </div>
    </Routes>
  );
}

export default App;
