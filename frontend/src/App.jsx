import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
import Home from "./pages/Home";
import { Toaster } from "sonner";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Toaster position="top-right" />
        <Routes>
          <Route path="/" element={<UserLayout />}>
            {/*<Home />*/}
            <Route index element={<Home />}></Route>
            {/* Login  */}
            <Route path="login" element={<Login />}></Route>
            {/* Register */}
            <Route path="register" element={<Register />}></Route>
            {/* Profile Page */}
            <Route path="profile" element={<Profile />}></Route>
            {/* Cart Page */}
            {/* Product Details */}
          </Route>
          <Route>{/*AdminLayout*/}</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
