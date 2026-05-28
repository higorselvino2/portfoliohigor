import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    // Instead of synchronous setState, we can use a tiny timeout
    const timer = setTimeout(() => setIsMobile(mql.matches), 0)

    const onChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches)
    }
    mql.addEventListener("change", onChange)
    
    return () => {
      clearTimeout(timer)
      mql.removeEventListener("change", onChange)
    }
  }, [])

  return !!isMobile
}
