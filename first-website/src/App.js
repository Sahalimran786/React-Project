import './App.css';
import React, { createContext} from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Head from "./components/Head";
import Staff from "./components/Staff";
import Footer from "./components/Footer";
import Contact from "./components/ContactUS";
import Facality from "./components/Facality";
import Result from "./components/Result";
import Login from "./components/Login";
import Logout from "./components/logout";
import Update from "./components/Update";
import ErrorPage from "./components/ErrorPage";
import Search from "./components/Search";
import { reducer, initialState } from "./reducer/useReducer";
import { useReducer } from "react";

// context-api
export const UserContext = createContext();
const Routing = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/facality" component={Facality} />
      <Route exact path="/result/:classname" component={Result} />
      <Route exact path="/faculty/:staff" component={Staff} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/logout" component={Logout} />
      <Route exact path="/update" component={Update} />
      <Route exact path="/search" component={Search} />
      <Route>
        <ErrorPage />
      </Route>
    </Switch>
  );
}

function App() {
const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <UserContext.Provider value={{ state, dispatch }}>
        <Head />
        <Navbar />
        < Routing />
        <Footer />
      </UserContext.Provider>
    </div>
  );
};

export default App;
