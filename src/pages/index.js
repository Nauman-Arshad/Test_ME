import React from 'react';
import { Counter } from '../features/counter/Counter';
import store from '../features/store';
import { Provider } from 'react-redux';
import './index.css';

function HomePage() {
  return (
    <div className="HomePage">
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
}

export default HomePage;
