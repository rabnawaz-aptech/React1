import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Projects from "./components/Projects"
import About from "./components/About"
import Contact from "./pages/Contact"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/Login'
import PageNotFound from './components/PageNotFound'
import Footer from './components/Footer'
import Services from './pages/Services'
import Blogs from './pages/Blogs'

function App() {

  const [mode, setMode] = useState({
    color: 'white',
    textColor: 'black',
    bgColor: 'white',
    elementColor: 'white',
    nav: 'light',
    hash: 'light',
    card: 'light'
  });

  const toggleMode = () => {
    if (mode.color == 'white') {
      setMode({
        color: 'dark',
        textColor: 'white',
        bgColor: 'black',
        elementColor: 'black',
        nav: 'dark',
        hash: 'dark',
        card: 'dark'
      })
    } else {
      setMode({
        color: 'white',
        textColor: 'black',
        bgColor: 'white',
        elementColor: 'white',
        nav: 'light',
        hash: 'light',
        card: 'light'
      })
    }
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: (<>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Home title="Backend MERN Stack Developer" subtitle="Building Seamless Experiences with React and Crafting Dynamic Solutions with Express." mode={mode} toggleMode={toggleMode} btnContent="Home" />
        <Footer mode={mode} toggleMode={toggleMode} />
      </>),
    },
    {
      path: "/projects/",
      element: (<>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Projects title="Projects" mode={mode} toggleMode={toggleMode} btnContent="Projects" />
        <Footer mode={mode} toggleMode={toggleMode} />
      </>),
    },
    {
      path: "/services/",
      element: (<>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Services title="Projects" mode={mode} toggleMode={toggleMode} btnContent="Projects" />
        <Footer mode={mode} toggleMode={toggleMode} />
      </>),
    },
    {
      path: "/about/",
      element: (<>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <About title="About" mode={mode} toggleMode={toggleMode} btnContent="About" />
        <Footer mode={mode} toggleMode={toggleMode} />
      </>),
    },
    {
      path: "/contact/",
      element: (<>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Contact title="Contact" mode={mode} toggleMode={toggleMode} btnContent="Contact" />
        <Footer mode={mode} toggleMode={toggleMode} />
      </>),
    },
    {
      path: "/blog/",
      element: (<>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Blogs title="Learn to code online" mode={mode} toggleMode={toggleMode} btnContent="Contact" />
        <Footer mode={mode} toggleMode={toggleMode} />
      </>),
    },
    // {
    //   path: "/login",
    //   element: (<>
    //   <Login/>
    //   </>),
    // },
    {
      path: "*",
      element: (<>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <PageNotFound mode={mode} toggleMode={toggleMode} />
        <Footer mode={mode} toggleMode={toggleMode} />
      </>),
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
