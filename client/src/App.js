import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { routes } from './routes';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      {routes.map(({path, Component}) => <Route key={path} path={path} element={<Component />} exact/> )}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
