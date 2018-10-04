import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Redux 관련 불러오기
import { createStore, compose } from 'redux'
import reducers from './reducers';
import { Provider } from 'react-redux';

let composeMiddleware = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

// 스토어 생성
const store = createStore(reducers, composeMiddleware);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

