// git clone <url> -b <branch name>
// git clone https://github.com/andasan/a-0520-clothing-ya-starter.git -b develop

import React, {useEffect} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from "react-redux";

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/CheckoutPage.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument, addCollectionAndDocuments } from './firebase/firebase.util';
import { setCurrentUser } from './redux/user/user.action';

function App({ setCurrentUser, currentUser, collectionArray }) {
  // const [currentUser, setCurrentUser] = useState(null);

  //subscription stage
  useEffect(() => {
    let unsubscribeFromAuth = null;

    //user authenticated session persistance
    unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      // setCurrentUser(user);
      if(user){
        const userRef = await createUserProfileDocument(user);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        });
      }else{
        setCurrentUser(user);

        //temp method to inject shop data to firestore
        // addCollectionAndDocuments('collections', collectionArray.map(({ title, items}) => ({
        //   title,
        //   items
        // })));
      }
    });
    
    return () => {
      unsubscribeFromAuth();
    }
  }, [setCurrentUser]);

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/checkout' component={CheckoutPage} />
        <Route path='/signin' render={() => currentUser ? 
            (<Redirect to="/" />) 
            : 
            (<SignInAndSignUpPage />)
          } />
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  collectionArray: state.shop.collections
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
