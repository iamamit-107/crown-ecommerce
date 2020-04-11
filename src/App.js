import React from "react";
import HomePage from "./Pages/HomePage/HomePage.component";
import { Route, Switch } from "react-router-dom";
import Shop from "./Pages/Shop/Shop.component";
import Header from "./Component/Header/Header.component";
import SigninAndSignup from "./Pages/SignIn-and-SignUp/SigninAndSignup.component";
import { auth, createUserProfileDocument } from "./Firebase/Firebase.utils";

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            currentUser: null,
        };
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot((snapShot) => {
                    this.setState({
                        currentUser: {
                            id: snapShot.id,
                            ...snapShot.data(),
                        },
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
            <div>
                <Header currentUser={this.state.currentUser} />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/shop" component={Shop} />
                    <Route path="/signin" component={SigninAndSignup} />
                </Switch>
            </div>
        );
    }
}

export default App;
