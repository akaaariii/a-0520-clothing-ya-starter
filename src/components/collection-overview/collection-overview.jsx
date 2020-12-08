import React from 'react';
import { connect } from 'react-redux';

// import './collection-overview.styles.scss';
import { CollectionsOverviewContainer } from "./collection-overview.styles";

import CollectionPreview from '../collection-preview/collection-preview';

const CollectionOverview = ({collections}) => {

    console.log("collections: ", collections);

    return(
    <CollectionsOverviewContainer>
        {
            collections.map(({id, ...otherProps}) => (
                <CollectionPreview key={id} {...otherProps} />
            ))
        }
    </CollectionsOverviewContainer>
)}

// const mapStateToProps = (state) => ({
//     collections: state.shop.collections 
// })

const mapStateToProps = ({ shop: { collections }}) => ({
    collections: collections ? Object.keys(collections).map(key => collections[key] ) : []
})



export default connect(mapStateToProps)(CollectionOverview);