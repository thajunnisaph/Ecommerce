import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import '../node_modules/react-bootstrap/dist/react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './store/AuthContext';
import CartProvider from './store/CartProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<AuthContextProvider><CartProvider><BrowserRouter><App /></BrowserRouter></CartProvider></AuthContextProvider>);
