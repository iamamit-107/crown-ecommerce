import React from "react";
import HomePage from "./Pages/HomePage/HomePage.component";
import { Route, Switch } from "react-router-dom";
import Shop from "./Pages/Shop/Shop.component";
import Header from "./Component/Header/Header.component";
import SigninAndSignup from "./Pages/SignIn-and-SignUp/SigninAndSignup.component";
import { useState } from "react";
import { useEffect } from "react";
import { auth } from "./Firebase/Firebase.utils";

function App() {
    const [currentUser, setCurrentUser] = useState(null);
    console.log(currentUser);

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            user ? setCurrentUser(user) : setCurrentUser(null);
        });
    }, [currentUser]);

    return (
        <div>
            <Header currentUser={currentUser} />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/shop" component={Shop} />
                <Route path="/signin" component={SigninAndSignup} />
            </Switch>
        </div>
    );
}

export default App;
