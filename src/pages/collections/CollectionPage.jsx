import React from "react";
import { connect } from "react-redux";

import "./CollectionPage.styles.scss";

import CollectionItem from "../../components/collection-item/collection-item.component";

const CollectionPage = ({ collections, match }) => {

  if(collections){
    return <h1>Loading....</h1>
  }
  
  const filteredCollections = collections.filter(
    (coll) => coll.routeName === match.params.collectionId
  );

  const { title, items } = filteredCollections[0];
  
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items &&
          items.map((item) => <CollectionItem key={item.id} item={item} />)}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  collections: state.shop.collections
});

export default connect(mapStateToProps)(CollectionPage);
