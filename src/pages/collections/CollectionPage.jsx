import React from "react";
import { connect } from "react-redux";

// import "./CollectionPage.styles.scss";
import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer,
} from "./CollectionPage.styles";

import CollectionItem from "../../components/collection-item/collection-item.component";

const CollectionPage = ({ collections, match }) => {

  console.log(collections);
  const filteredCollections = collections.filter(
    (coll) => coll.routeName === match.params.collectionId
  );

  const { title, items } = filteredCollections[0];
  
  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {items &&
          items.map((item) => <CollectionItem key={item.id} item={item} />)}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state) => ({
  collections: state.shop.collections
});

export default connect(mapStateToProps)(CollectionPage);
