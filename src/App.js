import React from 'react';
import {Switch, Route} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component'
import HomePage from './pages/homepage/homepage.js'
import Header from './components/header/header.component';
import SignInAndUpPage from './pages/sign-in-and-up/sign-in-and-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import './App.css';

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			currentUser: null
		}
	}

	unsubscribeFromAuth = null;


	componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          console.log(this.state);
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

	render() {
		return (
	    <div className="App">
	      	<Header currentUser={this.state.currentUser} />
	      	<Switch>
	      		<Route exact path='/' component={HomePage} />
	        	<Route path='/shop' component={ShopPage} />
	        	<Route path='/signin' component={SignInAndUpPage} />
	      	</Switch>
		</div>
	    )
	}
    
}
export default App;
