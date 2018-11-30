import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

const saga = createSagaMiddleware();
const logger = createLogger();

// @ts-ignore // used for redux devtools extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	rootReducer,
	undefined,
	composeEnhancers(
		applyMiddleware(
			saga,
			logger
		)
	)
);

saga.run(rootSaga);

export default store;
