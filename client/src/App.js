import './App.css';
import React from 'react';

import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";

import Utils from './utils/Utils';
import pageRoutes from './pages/PagesRoutes';
import BasicPage from './pages/helper/BasicPage';

export default function App(){
  Utils.setMobileView();
  return (
    <div id="caesar-app" className="App">
      <Router>
          <BasicPage>
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
          </BasicPage>
      </Router>
    </div>
  );
}
