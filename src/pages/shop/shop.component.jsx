import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CollectionOverview from "../../components/collection-overview/collection-overview";
import CollectionPage from "../collections/CollectionPage";
import { firestore, convertCollectionSnapShotToMap } from "../../firebase/firebase.util";
import {updateCollection} from "../../redux/shop/shop.action";
import WithSpinner from "../../components/withSpinner/with-spinner.component";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({match, updateCollection}) => {
  const [fetched, setFetched] = useState(true);

  useEffect(() => {

    let unsubscribeFromSnapShot = null;

    const collectionRef = firestore.collection('collections');

    unsubscribeFromSnapShot = collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionSnapShotToMap(snapshot);
      //dispatch the collectionsmap
      updateCollection(collectionsMap);
      setFetched(false);
    });

    return () => {
      unsubscribeFromSnapShot();
    }

  },[]);


  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        render={(props) => 
          (<CollectionsOverviewWithSpinner isLoading={fetched} {...props} />)
        }
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) =>
          (<CollectionPageWithSpinner isLoading={fetched} {...props} />)
        }
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateCollection: collectionsMap => dispatch(updateCollection(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);
