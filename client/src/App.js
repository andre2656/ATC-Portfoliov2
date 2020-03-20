import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css'
import Index from "./components/Index/Index"
import SignUp from './components/SignUp/SignUp';
import StyleApp from './components/StyleApp/StyleApp';
import loginController from "./controllers/LoginController";
import Contact from './components/Contact/Contact'
// import Styles from './components/StyleApp/StyleRecognition/StyleRecognition'


class App extends Component {

  state = { user: null }

  componentDidMount() {
    // console.log("componentDidMount");
    loginController.addUserChangedListener(this.setUser);

    loginController.recheckLogin();
  }

  componentWillUnmount() {
    // console.log("WillUnmount");
    loginController.removeUserChangedListener(this.setUser);
  }

  setUser = (user) => {
    // console.log("setUser", user);
    this.setState({ user: user });
  }



  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Index} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/contact" component={Contact} />
          {/* <Route exact path="/payment" component={Payment} /> */}
          {/* <Route exact path="/settings" component={SettingsForm} /> */}
          <Route exact path="/app" component={StyleApp} />
          {/* <Route exact path="/iconq" component={IconQuiz} />
          <Route exact path="/fsq" component={FashionStyleQuiz} />
          <Route exact path= "/chat" component={Chat}/>
          <Route exact path="/stylistChat" component={stylistChat} />
          <Route exact path="/stq" component={SkinToneQuiz} /> */}
          {/* <Route exact path= '/styles' component={Styles}/> */}

        </div>
      </Router>
    );
  }
}

export default App;