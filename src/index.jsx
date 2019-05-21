import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { AppContainer } from 'react-hot-loader';
import { createStore, applyMiddleware } from 'redux';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import thunkMiddleware from 'redux-thunk';


const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

const render = (Component) => {
  ReactDOM.render(
      <HashRouter>
        <Provider store={store}>
          <Component/>
        </Provider>
      </HashRouter>,
    document.getElementById('react-app-root')
  );
};

render(App);

/*eslint-disable */
if (module.hot) {
    module.hot.accept('./components/App', () => {
        render(App);
    });
}
/*eslint-enable */