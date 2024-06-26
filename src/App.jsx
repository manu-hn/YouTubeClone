import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import { Provider } from 'react-redux';
import appStore from './redux/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/pages/WatchPage';


const App = () => {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />
        },
        {
          path : "/watch",
          element : <WatchPage />
        }
      ]
    }
  ])

  return (
    <Provider store={appStore}>
      <div className=''>
        <Header />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  )
}

export default App