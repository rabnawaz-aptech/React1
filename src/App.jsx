import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Projects from "./components/Projects"
import About from "./components/About"
import Contact from "./components/Contact"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/Login'
import PageNotFound from './components/PageNotFound'

function App() {

  const [mode, setMode] = useState({
    color: 'white',
    textColor: 'black',
    bgColor: 'body-tertiary',
    elementColor: 'white',
  });

  const toggleMode = () => {
    if (mode.color == 'white') {
        setMode({
            color: 'dark',
            textColor: 'white',
            bgColor: 'dark',
            elementColor: 'black',
        })
    }else{
        setMode({
            color: 'white',
            textColor: 'black',
            bgColor: 'body-tertiary',
            elementColor: 'white',
        })
    }
}

  const router = createBrowserRouter([
    {
      path: "/",
      element: (<>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Home title="Full Stack Developer" mode={mode} toggleMode={toggleMode} btnContent="Home" />
      </>),
    },
    {
      path: "/Projects",
      element: (<>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Projects title="Projects" mode={mode} toggleMode={toggleMode} btnContent="Projects" />
      </>),
    },
    {
      path: "/About",
      element: (<>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <About title="About" mode={mode} toggleMode={toggleMode} btnContent="About" />
      </>),
    },
    {
      path: "/Contact",
      element: (<>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Contact title="Contact" mode={mode} toggleMode={toggleMode} btnContent="Contact" />
      </>),
    },
    {
      path: "/Login",
      element: (<>
      <Login/>
      </>),
    },
    {
      path: "*",
      element: (<>
      <PageNotFound/>
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
