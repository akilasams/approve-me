import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import "./App.scss";
import Login from "./pages/login-page/Login";
import SignUp from "./pages/signup-page/SignUp";
import NewRequests from "./pages/new-requests/NewRequests";
import Approved from "./pages/approved/Approved";
import InReview from "./pages/in-review/InReview";
import Home from "./pages/home/Home";
import RootLayout from "./layout/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Login />} />
      <Route path="home" element={<Home />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="new" element={<NewRequests />} />
      <Route path="review" element={<InReview />} />
      <Route path="approved" element={<Approved />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
