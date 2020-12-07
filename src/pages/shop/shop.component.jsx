import React from 'react';
import { Route } from 'react-router-dom';

import CollectionOverview from '../../components/collection-overview/collection-overview';
import CollectionPage from '../collections/CollectionPage';

class ShopPage extends React.Component {
  render() {
    return (
      <div className='shop-page'>
        <Route exact path={`${this.props.match.path}`} component={CollectionOverview} />
        <Route path={`${this.props.match.path}/:collectionId`} component={CollectionPage} />
      </div>
    );
  }
}

export default ShopPage;
