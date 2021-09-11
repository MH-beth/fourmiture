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
import ReportHistory from './pages/ReportsHistory';
import UpdateUser from './pages/UpdateUser';
import Routes from './Routes';

const App = () => {
  return (
    <div>
      <Routes/>
    </div>
  )
}

export default App
