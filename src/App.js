import { BrowserRouter } from 'react-router-dom';

// components
import AppRoutes from './Routes/Routes';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (
   <>
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
    </>
  
  );
}

export default App;
