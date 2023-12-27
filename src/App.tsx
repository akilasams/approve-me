import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import "./App.scss";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup-page/SignUp";
import NewRequests from "./pages/new-requests/NewRequests";
import Approved from "./pages/approved/Approved";
import Home from "./pages/home/Home";
import RootLayout from "./layout/RootLayout";
import Account from "./pages/account/Account";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Login />} />
      <Route path="home" element={<Home />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="new" element={<NewRequests />} />
      <Route path="approved" element={<Approved />} />
      <Route path="account" element={<Account />} />
      <Route path="signup" element={<SignUp />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
