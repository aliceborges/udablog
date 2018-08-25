import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import { BrowserRouter } from 'react-router-dom';

document.title = 'Udablog - Blog da Udacity';

const store = createStore(reducer);

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
      <App />
    </BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
