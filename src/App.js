import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import IndexPage from "./pages/Index.js";
import ServicesPage from "./pages/Services.js";
import LoginPage from "./pages/Login.js";
import RegisterPage from "./pages/Register.js";
import NotfoundPage from "./pages/Notfound.js";
import CookiesPage from "./pages/Cookies.js";
import ContactPage from "./pages/Contact.js";
import BlogPage from "./pages/Blog";

import { auth } from "./firebase/firebase.config.js";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./actions/user.js";

const App = () => {
  const dispatch = useDispatch();
  const { currentUser, loading } = useSelector((state) => state.user);

  useEffect(() => {
    const authSub = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(setUser(user));
      }
    });
    return () => {
      authSub.unsubscribe();
    };
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <IndexPage />
        </Route>
        <Route exact path="/services">
          <ServicesPage />
        </Route>
        <Route exact path="/blog">
          <BlogPage />
        </Route>
        <Route exact path="/contact">
          <ContactPage />
        </Route>
        <Route
          exact
          path="/login"
          render={() => (currentUser ? <Redirect to="/" /> : <LoginPage />)}
        ></Route>
        <Route
          exact
          path="/register"
          render={() => (currentUser ? <Redirect to="/" /> : <RegisterPage />)}
        ></Route>

        <Route exact path="/notfound">
          <NotfoundPage />
        </Route>
        <Route exact path="/cookies">
          <CookiesPage />
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
