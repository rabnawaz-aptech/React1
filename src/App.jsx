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
      <Home title="Full Stack Developer - Rabnawaz" mode={mode} toggleMode={toggleMode} />
      </>),
    },
    {
      path: "/Projects",
      element: (<>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Projects title="Projects - Rabnawaz" mode={mode} toggleMode={toggleMode} />
      </>),
    },
    {
      path: "About",
      element: (<>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <About title="About - Rabnawaz" mode={mode} toggleMode={toggleMode} />
      </>),
    },
    {
      path: "Contact",
      element: (<>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Contact title="Contact - Rabnawaz" mode={mode} toggleMode={toggleMode} />
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
