import React from 'react';
import { connect } from 'react-redux';

import './collection-overview.styles.scss';

import CollectionPreview from '../collection-preview/collection-preview';

const CollectionOverview = ({collections}) => (
    <div className="collection-overview">
        {
            collections && collections.map(({id, ...otherProps}) => (
                <CollectionPreview key={id} {...otherProps} />
            ))
        }
    </div>
)

const mapStateToProps = (state) => ({
    collections: state.shop.collections
})

export default connect(mapStateToProps)(CollectionOverview);