import React from 'react';
import Home from './views/Home';
import Game from './views/Game';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  shallow(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <div>
            <Route path="/game" component={Game} />
            <Route exact path="/" component={Home} />
          </div>
        </Router>
      </PersistGate>
    </Provider>
  );
});