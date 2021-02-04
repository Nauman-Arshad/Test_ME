import React from "react"
import App from "./App"
import store from '../features/store';
import { Provider } from 'react-redux';

export default function HomePage() {
  return (
    <div>
      <Provider store={store}>
        <App />
    </Provider>
    </div>
  )
}
