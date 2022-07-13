import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import '../src/common/redux/reducer/reducer'
import {applyMiddleware, createStore} from "redux";
import reducer from "./common/redux/reducer/reducer";
import {Provider} from "react-redux";
import rootReducer from "./common/redux/reducer/reducer";
// import { Provider } from 'react-redux';
// import { createStore } from "redux";
// import rootReducer from "./module/index";

const store = createStore(rootReducer);
// const store = createStore(rootReducer, composeWithDevTools());
// const store = createStore(rootReducer, applyMiddleware(reducer));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      useErrorBoundary: false,
    },
    mutations: {
      useErrorBoundary: false,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      {/* devtools */}
      <ReactQueryDevtools initialIsOpen={true} />
      <App />
    </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
