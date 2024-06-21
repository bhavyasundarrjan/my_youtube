import './App.css';
import Head from './components/Head';
import Body from './components/Body';
import {Provider} from 'react-redux';
import store from './utils/store';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
function App() {
  const appRouter = createBrowserRouter([
    {
      path:'/',
      element:<Body/>,
      children:[
        {
          path:'/',
          element:<MainContainer/>
        },
        {
          path:'watch',
          element:<WatchPage/>

        }
      ]
    }
  ])
  return (
    <Provider store={store}>
    <div>
      
      <Head></Head>
     <RouterProvider router={appRouter}></RouterProvider>
      
      {/* 
        Head
        Body
          SideBar
            Menu Items
          MainContainer
            Button List
            Video Container
      
      */}
    </div>
    </Provider>
  );
}

export default App;
