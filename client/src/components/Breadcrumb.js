import './Breadcrumb.css';

import React from 'react';
import {
  Route,
  Link,
} from "react-router-dom";


const Breadcrumbs = (props) => (
    <div className="BreadcumbTitle">
        <ul>
            <Route path='/:path' component={BreadcrumbsItem} />
        </ul>
    </div>
)

const BreadcrumbsItem = ({ match, ...rest }) => {
  const breadcrumbTitle = match.url.split("/");
  return (
    <React.Fragment>
      <li className={match.isExact ? 'breadcrumb-active' : undefined}>
          <Link to={match.url || ''}>
                {breadcrumbTitle[breadcrumbTitle.length - 1]}
          </Link>
          <span className="Separator">{rest.location.pathname === match.url ? "" : ">" }</span>
      </li>
      <Route path={`${match.url}/:path`} component={BreadcrumbsItem}/>
    </React.Fragment>
  )
}

export default Breadcrumbs;
