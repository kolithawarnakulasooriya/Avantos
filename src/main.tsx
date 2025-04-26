import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router';
import { Provider } from 'react-redux';
import './index.css'
import routes from './routes';
import store from './store';

const container = document.querySelector('#app') as HTMLElement;
createRoot(container).render(<Provider store={store}><RouterProvider router={routes} /></Provider>)