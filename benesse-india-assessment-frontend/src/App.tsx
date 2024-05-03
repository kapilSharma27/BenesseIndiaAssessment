import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/navbar";
import Alerts from "./components/layout/alert";
import Quiz from "./components/pages/quiz";
import About from "./components/pages/about";
import Register from "./components/auth/register";
import Login from "./components/auth/login";
import PrivateRoute from "./components/routing/privateRoute";
import QuizState from "./context/quiz/QuizState";
import Score from "./components/pages/score";

function App() {
  return (
    <AuthState>
        <AlertState>
          <QuizState>
          <Router>
            <Fragment>
              <Navbar />
              <div className="container">
                <Alerts />
                <Switch>
                  <PrivateRoute exact path="/" component={Quiz} />
                  <PrivateRoute exact path="/score" component={Score} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                </Switch>
              </div>
            </Fragment>
          </Router>
          </QuizState>
        </AlertState>
    </AuthState>
  );
}

export default App;
