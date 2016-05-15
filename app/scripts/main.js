import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { AppContainer } from 'react-hot-loader';

import '../styles/main.scss';

function renderApp(RootComponent) {
  ReactDOM.render(
    <AppContainer>
      <RootComponent />
    </AppContainer>,
    document.getElementById('react')
  );
}

renderApp(App);

if (module.hot) {
  module.hot.accept(
    './containers/App',
    () => renderApp(require('./containers/App'))
  );
}
