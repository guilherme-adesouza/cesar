import './App.css';
import React from 'react';

import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";

import pageRoutes from './pages/PagesRoutes';

export default function App(){
  return (
    <div id="caesar-app" className="App Dark">
      <Router>
        <Switch>
          {pageRoutes.map((pageRouter) => {
            const Component = pageRouter.component;
            return (
              pageRouter.routes.map((route, idx) =>
                <Component key={idx} {...route}/>
              )
            )
          })}
        </Switch>
      </Router>
    </div>
  );
}
