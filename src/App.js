import { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AddEpaperScreen from './screens/AddEpaperScreen.js';
import AddUserScreen from './screens/AddUserScreen.js';
import AdvertisementScreen from './screens/AdvertisementScreen.js';
import DashboardScreen from './screens/DashboardScreen.js';
import EpaperScreen from './screens/EpaperScreen.js';
import ListOfUsers from './screens/ListOfUsers.js';
import LoginScreen from './screens/LoginScreen';
import PageNotFoundScreen from './screens/PageNotFoundScreen';
import { PublicRoute, checkIsAuthenticate } from './utils/routeAuthenticate.js';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    JSON.parse(localStorage.getItem('isAuthenticated'))
  );
  const [isHaveBot, setIsHaveBot] = useState(
    JSON.parse(localStorage.getItem('isHaveBot'))
  );
  const [loggedInState, setLoggedInState] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  const toggleLoggedInState = () => {
    setLoggedInState(!loggedInState);
  };

  useEffect(() => {
    setIsHaveBot(JSON.parse(localStorage.getItem('isHaveBot')));
    setIsAuthenticated(
      checkIsAuthenticate(JSON.parse(localStorage.getItem('userInfo')))
    );
  }, [loggedInState, isHaveBot]);
  useEffect(() => {
    setUserInfo(JSON.parse(localStorage.getItem('userInfo')));
  }, [loggedInState]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <DashboardScreen toggleLoggedInState={toggleLoggedInState} />
          }
        />
        <Route
          path="/list-of-users"
          element={<ListOfUsers toggleLoggedInState={toggleLoggedInState} />}
        />
        <Route
          path="/add-user"
          element={<AddUserScreen toggleLoggedInState={toggleLoggedInState} />}
        />
        <Route
          path="/epaper"
          element={<EpaperScreen toggleLoggedInState={toggleLoggedInState} />}
        />
        <Route
          path="/add-epaper"
          element={<AddEpaperScreen toggleLoggedInState={toggleLoggedInState} />}
        />
        <Route
          path="/advertisement"
          element={<AdvertisementScreen toggleLoggedInState={toggleLoggedInState} />}
        />
        <Route
          path="/login"
          element={<LoginScreen toggleLoggedInState={toggleLoggedInState} />}
        />
        <Route
          path="*"
          element={
            <PublicRoute
              userInfo={userInfo}
              isAuthenticated={isAuthenticated}
              element={
                <PageNotFoundScreen toggleLoggedInState={toggleLoggedInState} />
              }
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
