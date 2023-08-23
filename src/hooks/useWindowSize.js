import { useEffect, useState } from 'react'

const useWindowSize = () => {
    const [windowSize, setWindowsSize] = useState({
        width: undefined
    });
    useEffect(()=>{
        const handleResize = ()=>{
            setWindowsSize({
                width: window.innerWidth
            })
        }
        handleResize()
        window.addEventListener("resize", handleResize())
        return ()=> window.removeEventListener("resize", handleResize())
    },[])


  return windowSize
}

export default useWindowSize