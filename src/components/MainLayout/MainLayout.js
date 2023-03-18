import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import { Suspense } from 'react';


function MainLayout() {

  return(
    <div>
      <Header/>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      <h2>footer</h2>
    </div>
  )
}

export default MainLayout;
