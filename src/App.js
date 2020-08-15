import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import { Route, BrowserRouter } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Login from "./components/loginComponents/Login";
import HeaderContainer from "./components/Header/HeaderContainer";
import { connect, Provider } from "react-redux";
import { initializeApp } from "./redux/app-reducer";
// import PreLoader from "./components/common/PreLoader/PreLoader";
import store from "./redux/redux-store";
import { withSuspense } from "./HOC/WithSuspense";
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
const DialogsContainer = React.lazy(() =>import("./components/Dialogs/DialogsContainer"));
// import ProfileContainer from "./components/Content/ProfileContainer";
const ProfileContainer = React.lazy(() =>import("./components/Content/ProfileContainer"));
// import UsersContainer from "./components/Users/UsersContainer";
const UsersContainer = React.lazy(()=>import("./components/Users/UsersContainer"));
 


class App extends Component {
  // componentDidMount() {
  //   this.props.initializeApp();
  // }

  render() {
    // if (!this.props.initialized) {
    //   return <PreLoader />;
    // }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Nav />
        <div className="app-wrapper-content">
            <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)} />
            <Route path="/dialogs" render={withSuspense(DialogsContainer)} />
            <Route path="/users" render={withSuspense(UsersContainer)} />
            <Route path="/login" render={() => <Login />} /> 
            <Route path="/news" render={() => <News />} />
            <Route path="/music" render={() => <Music />} />
            <Route path="/settings" render={() => <Settings />} />
           
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

let AppContainter = connect(mapStateToProps, { initializeApp })(App);

const MainApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainter />
      </Provider>
    </BrowserRouter>
  );
};
export default MainApp;
