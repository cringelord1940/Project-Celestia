import { useEffect, useRef } from 'react'

function usePrevious(value: any) {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  }, [value])
  return ref.current
}

export { usePrevious }
