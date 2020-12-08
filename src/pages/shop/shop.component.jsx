import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CollectionOverview from "../../components/collection-overview/collection-overview";
import CollectionPage from "../collections/CollectionPage";
import { firestore, convertCollectionSnapShotToMap } from "../../firebase/firebase.util";
import {updateCollection} from "../../redux/shop/shop.action";

const ShopPage = ({match, updateCollection}) => {

  useEffect(() => {

    let unsubscribeFromSnapShot = null;

    const collectionRef = firestore.collection('collections');

    unsubscribeFromSnapShot = collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionSnapShotToMap(snapshot);
      //dispatch the collectionsmap
      updateCollection(collectionsMap);
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
        component={CollectionOverview}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPage}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateCollection: collectionsMap => dispatch(updateCollection(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);
