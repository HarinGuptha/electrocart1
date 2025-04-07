import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CreateContext from './component/contexts/CreateContext';
import Logincontext from './component/contexts/Logincontext';
import 'bootstrap/dist/css/bootstrap.css'; // Bootstrap first
import './index.css'; // Tailwind after
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CreateContext>
      <Logincontext>
      <App/>
      </Logincontext>
    </CreateContext>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
