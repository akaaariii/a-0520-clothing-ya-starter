import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

const item = firestore
    .collection('users')
    .doc('d8JKzFlK9DhxgEn5xHM7')
    .collection('cartItems')
    .doc('vswnCtTvX4y9DYE5lCmr');

//item === { name: "leather jacket" }

firestore.doc('/users/d8JKzFlK9DhxgEn5xHM7/cartItems/vswnCtTvX4y9DYE5lCmr') //{ name: "leather jacket" }
firestore.collection('/users/d8JKzFlK9DhxgEn5xHM7/cartItems'); // { [{name: "leather jacket"}], [{name: "blue hat"}] }