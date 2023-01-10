import React from "react";
import Navbar from "./components/navBar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "./apis/AuthContextApi";
import ProtectedRoute from "./routes/ProtoctedRoutes";
import PublicRoute from "./routes/PublicRoute";
import Profile from "./components/Profile/Profile";
import UploadPhoto from "./components/Profile/UploadPhoto";
import ProfileDefault from "./components/Profile/ProfileDefault";
import ResetPasssword from "./components/auth/ResetPassword";
import PhoneAuth from "./components/auth/PhoneAuth";
import AddProfile from "./components/Profile/AddProfile";
import Admin from './components/admin/Admin';
import AddHotels from "./pages/HotelsAndCity/AddHotel";
import AdminRoutes from './routes/AdminRoutes';
import ListOfUsers from './components/admin/ListOfUsers';
import AdminPanelContainer from './components/admin/AdminPanelContainer';
import User from "./components/admin/User";
import Users from './components/admin/Users';
import UserDetails from './components/admin/UserDetails';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <ToastContainer theme="dark" />
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          {/* <Route path="/admin" element={<Admin/>}></Route>
          <Route
            path="add-hotel"
            element={
              <ProtectedRoute>
                <AddHotels/>
              </ProtectedRoute>
            }
          ></Route> */}
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />

          <Route
            path="/admin"
            element={
              <AdminRoutes>
                <Admin />
              </AdminRoutes>
            }
          >
             <Route
            path="add-hotel"
            element={
              <AdminRoutes>
              <AddHotels/>
              </AdminRoutes>
            }
          ></Route>
            <Route
              index
              element={
                <AdminRoutes>
                  <AdminPanelContainer />
                </AdminRoutes>
              }
            />
            <Route
              path="users"
              element={
                <AdminRoutes>
                  <Users />
                </AdminRoutes>
              }
            />
            <Route
              path=":id"
              element={
                <AdminRoutes>
                  <UserDetails/>
                </AdminRoutes>
              }
            />
          </Route>

          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="/reset-password"
            element={
              <PublicRoute>
                <ResetPasssword />
              </PublicRoute>
            }
          />
          <Route
            path="/phone-auth"
            element={
              <PublicRoute>
                <PhoneAuth />
              </PublicRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          >
            <Route
              path="add-profile"
              element={
                <ProtectedRoute>
                  <AddProfile />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              index
              element={
                <ProtectedRoute>
                  <ProfileDefault />
                </ProtectedRoute>
              }
            />
            <Route
              path="upload-profile-photo"
              element={
                <ProtectedRoute>
                  <UploadPhoto />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
