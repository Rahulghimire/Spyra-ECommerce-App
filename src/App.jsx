import React, { Suspense, lazy } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoadingScreen } from "./components/LoadingScreen";
import Login from "./components/Login";
import Home from "./pages/Home";

const AsyncHome = lazy(() => import("./pages/Home"));
const AsyncLogin = lazy(() => import("./components/Login"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<LoadingScreen />}>
        <Router>
          <Routes>
            {/* <Route path="/" element={<Login />} /> */}
            <Route path="/" element={<AsyncLogin />} />
            <Route path="/home" element={<AsyncHome />} />
            <Route
              path="*"
              element={
                <h1 className="text-center text-info">Page not Found!!</h1>
              }
            />
          </Routes>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
