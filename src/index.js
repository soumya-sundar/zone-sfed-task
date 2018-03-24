import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './components/App';

ReactDOM.render(
  <Provider>
    <App initialData={window.initialData} />
  </Provider>,
  document.getElementById('root')
)