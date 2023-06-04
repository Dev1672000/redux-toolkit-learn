import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarHeader from './NavbarHeader'
import { Provider } from 'react-redux'
import Store from '../store/Store'

const RootLayout = () => {
  return (
    <div>
      <Provider store={Store}>
        <NavbarHeader />
        <Outlet />
      </Provider>
    </div>
  );
}

export default RootLayout