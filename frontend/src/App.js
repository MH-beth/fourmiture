import React from 'react'
import {BrowserRouter as Router , Redirect , Route, Switch} from "react-router-dom";
import Err from './components/errors/Err';
import NotFound from './components/errors/NotFound';
import Login from './pages/Login';
import Post from './pages/Post';
import Register from './pages/Register';
import {CONNECTED} from "./constants";
import AddPost from './pages/AddPost';
import User from './pages/User';
import ConnNavbar from "./components/Navbar/ConnNavbar";
import Navbar from "./components/Navbar/Navbar"
import Dashboard from "./pages/Dashboard";
import Allposts from "./components/Allposts";
import SchoolSearch from "./pages/SchoolSearch";
import ClasseSearch from './pages/ClasseSearch';
import ClasseSchool from "./pages/ClasseSchool";
import PostHistory from './pages/PostsHistory';
import Update from './pages/Update';
import Reports from './services/Reports';
import AddReport from './pages/AddReport';

const App = () => {
  return (
    <div>
      {(CONNECTED === "Connected") ? <ConnNavbar/> : <Navbar/> }
      <Router>
        <Switch>
          <Route exact path = "/err" component = {Err}/>
          <Route exact path = "/register">
            {(CONNECTED === "Connected") ? <Redirect to = "/"/> : <Register/>}
          </Route>
          <Route exact path = "/" component = {Dashboard}/>
          <Route exact path = "/login">
            {(CONNECTED  === "Connected") ? <Redirect to = "/"/> : <Login/>}
          </Route>
          <Route exact path = "/addPost">
            {(CONNECTED === "Connected") ? <AddPost/> : <Login/>}
          </Route>
          <Route exact path = "/text" component = {Allposts}/>
          <Route exact path = "/username/:link" component = {User}/>
          <Route exact path ="/post/:link" component = {Post}/>
          <Route exact path = "/search/school/:school" component = {SchoolSearch}/>
          <Route exact path = "/search/classe/:classe" component = {ClasseSearch}/>
          <Route exact path = "/search/all/:school/:classe" component = {ClasseSchool}/>
          <Route exact path = "/postsHistory">
            {(CONNECTED === "Connected") ? <PostHistory/> : <Login/>}
          </Route>
          <Route exact path = "/report/:link" component = {AddReport}/>
          <Route exact path = "/params/:link" component = {Update}/>
          <Route path ="*" component = {NotFound}/>
        </Switch>
      </Router>
    </div>
  )
}

export default App
