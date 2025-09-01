import { createStore } from 'redux';
import emploueeReducer from './myreducer';
export  const store = createStore(emploueeReducer);