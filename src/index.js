import React from 'react';
import ReactDOM from 'react-dom';
import Home from './views/Home';
import Game from './views/Game';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import * as serviceWorker from './serviceWorker';
import { store, persistor } from './store';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <div>
          <Route path="/game" component={Game} />
          <Route exact path="/" component={Home} />
        </div>
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();
