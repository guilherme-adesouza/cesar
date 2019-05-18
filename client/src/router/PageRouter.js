/**
* @guilherme-adesouza
* This file is not more used because <Switch /> component
* of react-router doesn't support this type of declaration.
* The new declaration is the same, but is directly map over map of the import 'pageRoutes'
*/

import React from 'react';
import pageRoutes from '../pages/PagesRoutes';

function PageRouter({routes, component: Component}) {
  return (
    <React.Fragment>
      {routes.map((route, idx) =>
        <Component key={idx} {...route}/>
      )}
    </React.Fragment>
  )
};

export default function Routes() {
  return (
    <React.Fragment>
      {pageRoutes.map((pageRouter , idx)=>
        <PageRouter key={idx} {...pageRouter}/>
      )}
    </React.Fragment>
  )
}
