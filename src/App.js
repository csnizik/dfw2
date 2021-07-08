import React, { useEffect } from 'react';
import Home from './patterns/05-pages/Home';
import { Switch, Route, useLocation } from 'react-router-dom';

function App() {
  const pathName = useLocation().pathname;

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto';
    window.scroll({ top: 0 });
    document.querySelector('html').style.scrollBehavior = '';
  }, [pathName]);

  return (
    <>
      <Switch>
        <Route path={['/','/markets','/water','/value','/confidence','/sentiment']}>
          <Home pathName={pathName} />
        </Route>
        <Route path="*" component={Home} />
      </Switch>
    </>
  );
}

export default App;
