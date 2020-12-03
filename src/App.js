// git clone <url> -b <branch name>
// git clone https://github.com/andasan/a-0520-clothing-ya-starter.git -b develop


import React, {useState, useEffect} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.util';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  //subscription stage
  useEffect(() => {
    let unsubscribeFromAuth = null;

    //user authenticated session persistance
    unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      // setCurrentUser(user);
      if(user){
        const userRef = await createUserProfileDocument(user);

        userRef.onSnapshot(snapShot => {
          console.log(snapShot.data());
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        });
      }else{
        setCurrentUser(user);
      }
    });
    
    return () => {
      unsubscribeFromAuth();
    }
  }, []);

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' render={() => currentUser ? 
            (<Redirect to="/" />) 
            : 
            (<SignInAndSignUpPage />)
          } />
      </Switch>
    </div>
  );
}

export default App;
