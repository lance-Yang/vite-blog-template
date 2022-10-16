import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter as Router } from 'react-router-dom'
import App from './App'
import store from './store/store'
import {Provider} from "react-redux";
import './index.css'
import './assets/fontAwesome/css/font-awesome.min.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.Fragment>
     <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.Fragment>
)
