import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from 'containers/App';

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
