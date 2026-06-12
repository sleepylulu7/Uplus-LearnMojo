import { useEffect, useState } from "react"
import { DEFAULT_ROUTE, getRouteByPath, isKnownRoute } from "./routes"

const getCurrentRoute = () => getRouteByPath(window.location.pathname)

function AppRouter({ copy, onRouteChange }) {
  const [currentRoute, setCurrentRoute] = useState(getCurrentRoute)
  const CurrentPage = currentRoute.Component
  useEffect(() => {
    onRouteChange?.(currentRoute.path)
  }, [currentRoute.path, onRouteChange])

  useEffect(() => {
    if (window.location.pathname === "/") {
      window.history.replaceState(null, "", DEFAULT_ROUTE.path)
    }

    const updateRoute = () => {
      const route = getCurrentRoute()
      setCurrentRoute(route)
    }

    const handleRouteClick = (event) => {
      const target = event.target instanceof Element ? event.target : null
      const link = target?.closest("a[href]")

      if (!link) {
        return
      }

      const url = new URL(link.href)

      if (url.origin !== window.location.origin || !isKnownRoute(url.pathname)) {
        return
      }

      event.preventDefault()
      window.history.pushState(null, "", url.pathname)
      setCurrentRoute(getRouteByPath(url.pathname))
    }

    window.addEventListener("popstate", updateRoute)
    document.addEventListener("click", handleRouteClick)

    return () => {
      window.removeEventListener("popstate", updateRoute)
      document.removeEventListener("click", handleRouteClick)
    }
  }, [])

  useEffect(() => {
    window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0 })
    })
  }, [currentRoute])

  return <CurrentPage copy={copy} />
}

export default AppRouter
