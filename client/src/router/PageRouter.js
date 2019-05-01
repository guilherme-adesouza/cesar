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
