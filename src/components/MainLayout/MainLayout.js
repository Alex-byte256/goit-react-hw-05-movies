import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';


function MainLayout() {

  return(
    <div>
      <Header/>
        <Outlet/>
      <h2>footer</h2>
    </div>
  )
}

export default MainLayout;
