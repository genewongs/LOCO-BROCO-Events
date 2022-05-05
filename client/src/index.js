import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import NotificationProivder from './components/NotificationProvider.jsx'

ReactDOM.render(
  <NotificationProivder>
    <App />
  </NotificationProivder>,
  document.getElementById('app')
  );