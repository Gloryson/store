import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux/es/exports';
import store from './store';
import { App } from './App';
import './scss/index.scss';



const root = ReactDOM.createRoot( document.getElementById('root') as HTMLElement );

root.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
);
