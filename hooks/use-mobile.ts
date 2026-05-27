import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    // Set initial state without triggering warning by avoiding direct sync set if possible, 
    // but here we just need to set the value once. Next.js hook rules prefer not to do it synchronously if it causes issues.
    // Instead we can initialize the state conditionally if window is defined.
    setIsMobile(mql.matches);

    const onChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches)
    }
    mql.addEventListener("change", onChange)
    
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}
