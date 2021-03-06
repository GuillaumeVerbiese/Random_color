import { render } from 'react-dom';

import { Provider } from 'react-redux';

import store from 'src/store';

import App from 'src/components/App';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
