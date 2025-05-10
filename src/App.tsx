import "./App.css";

import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Layout } from "./components/layout";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { SignUp } from "./pages/signup";
import { CoachGuard } from "./utils/CoachGuard";
import { PlayerGuard } from "./utils/PlayerGuard";

import { Navigate } from "react-router-dom";

function AuthRedirect({ children }) {
  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;
  return user ? <Navigate to="/" replace /> : children;
}

function RequireAuth() {
  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;
  return user ? <Outlet /> : <Navigate to="/login" replace />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/login"
            element={
              <AuthRedirect>
                <Login />
              </AuthRedirect>
            }
          />
          <Route
            path="/signup"
            element={
              <AuthRedirect>
                <SignUp />
              </AuthRedirect>
            }
          />

          <Route element={<RequireAuth />}>
            <Route index element={<Home />} />

            <Route element={<CoachGuard />}>
              <Route path="/coach-dashboard" element={<div>Coach Page</div>} />
            </Route>

            <Route element={<PlayerGuard />}>
              <Route
                path="/player-dashboard"
                element={<div>Player Page</div>}
              />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
