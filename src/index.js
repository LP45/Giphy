import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//Browser Router has HTML 5 HISTORY API with mehods to keep our app in sync with THE URL
import { BrowserRouter as Router } from 'react-router-dom';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  // Strictmode looks for potential errors
  <React.StrictMode>
    {/* Router we want to wrap around app so it could render componenet based on URL */}
    <Router>
      <App />
      </Router>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
