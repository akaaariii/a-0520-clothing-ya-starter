import { createSelector } from 'reselect'

//get the big cake first
const selectShop = state => state.shop;

//to get a slice of the cake (slice === collection)
export const selectCollections = createSelector(
    [selectShop],
    (shop) => shop.collections
);

//to get a slice of the cake, but convert to array
export const selectCollectionForPreview = createSelector(
    [selectCollections],
    (collections) => collections ? Object.keys(collections).map(key => collections[key] ) : []
);

