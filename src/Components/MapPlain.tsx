import React from 'react'

const MapPlain = () => {
    const getMouseCords = (e : any) =>{
        let cords = {
            x: e.clientX - e.currentTarget.offsetLeft,
            y:e.clientY - e.currentTarget.offsetTop
        }
        console.log(`x:${cords.x} y:${cords.y}`)
    }
  return (
    <div onMouseMove={(e)=>getMouseCords(e)} className='map-plain'>

    </div>
  )
}

export default MapPlain