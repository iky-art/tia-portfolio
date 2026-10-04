import { useState, useEffect } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Activities from './components/Activities.jsx'
import Writing from './components/Writing.jsx'
import Journey from './components/Journey.jsx'
import Profile from './components/Profile.jsx'
import Footer from './components/Footer.jsx'
import NotFound from './pages/NotFound.jsx'

function useHashRoute() {
  const readRoute = () => {
    if (typeof window === 'undefined') return '#/'
    const raw = window.location.hash || '#/'
    // Anchor dalam halaman (#about) bukan route — hanya "#/..." yang dianggap route.
    return raw.startsWith('#/') ? raw : '#/'
  }

  const [route, setRoute] = useState(readRoute)

  useEffect(() => {
    const onHashChange = () => {
      const next = readRoute()
      setRoute(prev => {
        if (prev !== next) window.scrollTo(0, 0)
        return next
      })
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return route
}

export default function App() {
  const route = useHashRoute()
  const isHome = route === '#/' || route === '' || route === '#'

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-accent focus:px-4 focus:py-2 focus:text-[13px] focus:font-medium focus:tracking-wide"
        style={{ color: 'var(--color-paper)' }}
      >
        Lompat ke konten utama
      </a>

      <Header />

      {isHome ? (
        <main id="main" key={route} className="page-enter">
          <Hero />
          <About />
          <Activities />
          <Writing />
          <Journey />
          <Profile />
        </main>
      ) : (
        <div key={route} className="page-enter">
          <NotFound onHome={() => { window.location.hash = '#/' }} />
        </div>
      )}

      <Footer />
    </>
  )
}
