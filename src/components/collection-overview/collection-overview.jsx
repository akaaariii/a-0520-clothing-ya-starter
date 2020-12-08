import React from 'react';
import { connect } from 'react-redux';

// import './collection-overview.styles.scss';
import { CollectionsOverviewContainer } from "./collection-overview.styles";

import CollectionPreview from '../collection-preview/collection-preview';

const CollectionOverview = ({collections}) => (
    <CollectionsOverviewContainer>
        {
            collections && collections.map(({id, ...otherProps}) => (
                <CollectionPreview key={id} {...otherProps} />
            ))
        }
    </CollectionsOverviewContainer>
)

const mapStateToProps = (state) => ({
    collections: state.shop.collections
})

export default connect(mapStateToProps)(CollectionOverview);