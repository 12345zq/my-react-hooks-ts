import React from 'react';
import '@/App.css';
import AppRoutes from '@/routes'
import { Link, Outlet } from 'react-router-dom';

function App() {
  
  return (
    <>
      <div className="App">
        <header className="App-header">
          你好，张琼！
          <AppRoutes/>
          <Outlet></Outlet>
          <Link 
            to="/recomend"
            state={{id:"9999",type:"book",price:2000}}>
            Link to Ad
          </Link>
        </header>
      </div>
    </>
  );
}

export default App;
