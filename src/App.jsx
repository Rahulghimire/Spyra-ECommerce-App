import React, { Suspense, lazy } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoadingScreen } from "./components/LoadingScreen";

const AsyncAddProduct = lazy(() =>
  import("./pages/ProductManagement/AddProduct")
);

const AsyncDashboardHome = lazy(() => import("./Dashboard/DashboardHome"));
const AsyncHome = lazy(() => import("./pages/Home"));
const AsyncLogin = lazy(() => import("./components/Login"));
const AsyncDashboard = lazy(() => import("./pages/Dashboard"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<LoadingScreen />}>
        <Router>
          <Routes>
            <Route path="/" element={<AsyncLogin />} />
            <Route path="/home" element={<AsyncHome />} />
            <Route path="/dashboard" element={<AsyncDashboard />} />
            <Route path="/dashboard/addproduct" element={<AsyncAddProduct />} />
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
