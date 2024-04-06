
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
 import {Outlet} from "react-router-dom"
// import Contact from './components/contact';
// const appRout=createBrowserRouter([
// {
//   path:'/contact',
//   element:<Contact/>
// }
// ])
function App() {
  return (
    <div className="App">
    <Header/>
    <Outlet/>
    {/* <Body/> */}
    {/* <RouterProvider router={appRout}/> */}
    </div>
  );
}

export default App;
