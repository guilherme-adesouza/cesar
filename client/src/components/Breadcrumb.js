import './Breadcrumb.css';

import React, {Component} from 'react';
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

class BreadcrumbsItem extends Component {
    render(){
      const {match, location} = this.props;
      const breadcrumbTitle = match.url.split("/");
      console.log(this.props)
      return (
        <React.Fragment>
          <li className={match.isExact ? 'breadcrumb-active' : undefined}>
              <Link to={match.url || ''}>
                    {breadcrumbTitle[breadcrumbTitle.length - 1]}
              </Link>
              <span className="Separator">{location.pathname === match.url ? "" : ">" }</span>
          </li>
          <Route path={`${match.url}/:path`} component={BreadcrumbsItem}/>
        </React.Fragment>
      )
    }
}

export default Breadcrumbs;
