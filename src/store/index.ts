import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';

const saga = createSagaMiddleware();
const logger = createLogger();

const store = createStore(
	rootReducer,
	undefined,
	applyMiddleware(
		saga,
		logger
	)
);

saga.run(rootSaga);

export default store;