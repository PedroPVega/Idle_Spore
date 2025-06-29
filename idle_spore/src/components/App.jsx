import {useState, useEffect} from 'react';
import MainScreen from '../pages/MainScreen';
import SettingsScreen from '../pages/SettingsScreen';
import GameScreen from '../pages/GameScreen';
import DiscoverPage from '../pages/DiscoverPage';
import NewsScreen from '../pages/NewsScreen';
import ContactScreen from '../pages/ContactScreen';
import SupportScreen from '../pages/SupportScreen';
import LegalMentionsScreen from '../pages/LegalMentionsScreen';
import SitePlanPage from '../pages/SitePlanPage';
import LowerNavBar from './LowerNavBar';
import UpperNavBar from './UpperNavBar';
import './App.css';
import React from 'react';


function App() {
  const [loggedIn, SetLoggedIn] = useState(false)
  const [page, SetPage] = useState("MainScreen");

  function Navigate(goalPage)
  {
    console.log("option chosen : ", goalPage);
    switch (goalPage) 
    {
      case 'Main Screen':
      console.log('open main screen');
      SetPage("MainScreen");
      break;

      case 'Profile':
      console.log('open profile page');
      SetPage("SettingsScreen");
      break;

      case 'Settings':
      console.log('open profile page');
      SetPage("SettingsScreen");
      break;

      case 'Report Bugs':
      console.log('open support page');
      SetPage("SupportScreen");
      break;

      case 'Contact':
      console.log('open contact page');
      SetPage("ContactScreen");
      break;

      case 'News':
      console.log('open news page');
      SetPage("NewsScreen");
      break;

      case 'Discover':
      console.log('discover page');
      SetPage("DiscoverPage");
      break;

      case 'LMScreen':
      console.log('legal mentions screen');
      SetPage("LMScreen");
      break;

      case 'Site Page':
      console.log('site page');
      SetPage("SitePage");
      break;

      case 'Logout':
      console.log('logout');
      SetLoggedIn(false);
      break;

      case 'Login':
      console.log('login page');
      SetLoggedIn(true);
      break;
            
      default:
      return () => {};
    }
  }
  return(
    <div className="App">
      <UpperNavBar Navigate = {Navigate} login = {loggedIn} setlogin = {SetLoggedIn}/>
      {page === "MainScreen" && <MainScreen/>}
      {page === "SettingsScreen" && <SettingsScreen/>}
      {page === "GameScreen" && <GameScreen/>}
      {page === "DiscoverPage" && <DiscoverPage/>}
      {page === "SupportScreen" && <SupportScreen/>}
      {page === "NewsScreen" && <NewsScreen/>}
      {page === "ContactScreen" && <ContactScreen/>}
      {page === "LMScreen" && <LegalMentionsScreen/>}
      {page === "SitePage" && <SitePlanPage/>}
      <LowerNavBar Navigate = {Navigate}/>
    </div>
  );
}

export default App;
