import React from 'react'
import { Outlet } from 'react-router-dom'

//Components
import Navbar from 'components/Navbar'
import Container from 'components/Container'
import Footer from 'components/Footer'
import FavoritosProvider from 'contextos/Favoritos'

const DefaultPage = () => {
  return (
    <main>
      <Navbar />
      <FavoritosProvider>
        <Outlet />
      </FavoritosProvider>
      <Footer />

    </main>
  )
}

export default DefaultPage