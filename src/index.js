import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Toast from './components/Toast';

ReactDOM.render(<App />, document.getElementById('root'));

function onClickNotification() {
  window.location.reload();
}

function onUpdate(registration) {
  const notificationDiv = document.getElementById('sw-notification');
  ReactDOM.render(
    <Toast handleClick={onClickNotification}>
      Update to app available, please press here to load changes.
    </Toast>,
    notificationDiv
  );
  notificationDiv.style.display = 'block';
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register({ onUpdate });
