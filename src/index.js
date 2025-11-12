import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';
import Navbar from './Navbar';
import Footer from './Footer';
import NotFound from './NotFound';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Login from './Login';
import Signup from './Signup';
import AboutUs from './AboutUs';
import FullBlog from './FullBlog';
import BlogsPage from './BlogsPage';
import CoursesPage from './CoursesPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Home />
            <Footer />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/courses">
            <Navbar />
            <CoursesPage />
            <Footer />
          </Route>
          <Route path="/aboutus">
            <AboutUs />
            <Footer />
          </Route>
          <Route path="/blog/:index">
            <Navbar />
            <FullBlog />
          </Route>
          <Route path="/blogs">
            <Navbar />
            <BlogsPage />
            <Footer />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
