import React, { useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

// TODO rm unused imports here
// import './css/style.scss';

// import { focusHandling } from 'cruip-js-toolkit';
// import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';

function App() {
  const pathName = useLocation().pathname;

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto';
    window.scroll({ top: 0 });
    document.querySelector('html').style.scrollBehavior = '';
  }, [pathName]); // triggered on route change

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
      </Switch>
    </>
  );
}

export default App;
