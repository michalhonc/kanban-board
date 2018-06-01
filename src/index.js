import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import './App.css';
import App from './components/app';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';




const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
   <Provider store={createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
      <div>
         <BrowserRouter>
            <Switch>
               <Route to="/" component={App}/>
            </Switch>
         </BrowserRouter>
      </div>
   </Provider>
   , document.getElementById('root'));
registerServiceWorker();


