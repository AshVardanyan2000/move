import {
  createBrowserRouter, createRoutesFromElements,  Route,
} from 'react-router-dom';
import App from './App';
import Home from "./components/pages/Home";



export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />}>
      <Route path="/" element={<Home />}/>
    </Route>,
  ),
);
