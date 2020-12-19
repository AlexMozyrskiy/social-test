import React from "react";
import './App.css';
import { Route } from "react-router-dom";
import HeaderContainer from './Components/Header/HeaderContainer';
import SideBar from './Components/SideBar/SideBar';
// import ProfilePage from './Components/Content/ProfilePage/ProfilePage';
import DialogsPage from './Components/Content/DialogsPage/DialogsPage';
import MusicPage from './Components/Content/MusicPage/MusicPage';
import NewsPage from './Components/Content/NewsPage/NewsPage';
import SettingsPage from './Components/Content/SettingsPage/SettingsPage';
import UsersPageContainer from './Components/Content/UsersPage/UsersPageContainer';
import LoginPageFormContainer from "./Components/Content/LoginPage/LoginPageForm/LoginPageFormContainer";
import { connect } from 'react-redux';
import { initializedAppThunkCreator } from "./Redux/ThunkCreators/initializedAppThunkCreator";
import Preloader from "./Components/common/Preloader/Preloader";
import { withLazySuspense } from "./hoc/withLazySuspense";
const ProfilePage = React.lazy( () => import('./Components/Content/ProfilePage/ProfilePage') );

class App extends React.Component {

  componentDidMount() {
    this.props.initializedAppThunkCreator();
  }

  render() {
    if(!this.props.isAppInitialized) {
      return <Preloader />
    }
    return (
      <div className="App">
        <HeaderContainer />
        <SideBar />

        <Route path='/profile/:userId?' render={ withLazySuspense(ProfilePage) } />
           {/* return <React.Suspense fallback={ <Preloader /> }>
             <ProfilePage />
           </React.Suspense> */}
          
        <Route path='/dialogs' render={() => <DialogsPage />} />
        <Route path='/music' render={() => <MusicPage />} />
        <Route path='/news' render={() => <NewsPage />} />
        <Route path='/users' render={() => <UsersPageContainer />} />
        <Route path='/settings' render={() => <SettingsPage />} />
        <Route path='/login' render={() => <LoginPageFormContainer />} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return (
    {
      isAppInitialized: state.initializedApp.isInizializeApp
    }
  );
}

export default connect(mapStateToProps, { initializedAppThunkCreator })(App);