import React, {useState, useEffect} from 'react'

export const useMousePosition = () => {
  
    const [positions, setPositions] = useState({x: 0, y: 0})
    useEffect(() => {
        const updateMouse = (e: MouseEvent) => {
            setPositions({x: e.clientX, y: e.clientY})
        }
        document.addEventListener('mousemove', updateMouse)
        return () => {
            document.removeEventListener('mousemove', updateMouse)
        }
    }
    , [])
    return positions
}
