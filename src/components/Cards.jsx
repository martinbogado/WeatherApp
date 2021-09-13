import React from 'react';
import './Cards.css';
import Card from './Card.jsx';
import CartaP from './CartaP.jsx'
import './container.css'
import arrow from './images/icons/down-arrow.svg'
import { useRef } from 'react';
import "animate.css"

export default function Cards({cities, onClose}) {

  const flecha = useRef()

  if(cities.length){
    let ciudades = cities.slice(1, cities.length)

    if( flecha.current ){
      if(ciudades.length){
        flecha.current.style.display = 'flex'

      } else { 
        flecha.current.style.display = 'none'
        
      }
    } 

    return (
    <div className='container'>

        <div><img src={`${arrow}`} className='flecha' ref={flecha} style={{ width: '45px' }} alt='arrow' /></div>
        <div className='cartamobile'>
          <CartaP 
            name={cities[0].name}
            img={cities[0].img}
            onClose={() => onClose(cities[0].id)}
            id={cities[0].id}
            wind={cities[0].wind} 
            temp={cities[0].temp} 
            dt={cities[0].dt}
            timezone={cities[0].timezone}
            humidity={cities[0].humidity}
            pressure={cities[0].pressure}
          />
      </div>
      <div className='cards'>
        {ciudades.map(c => <Card
            key={c.id + c.name}
            name={c.name}
            img={c.img}
            onClose={() => onClose(c.id)}
            id={c.id}
            temp={c.temp}
            wind={c.wind}
            humidity={c.humidity}
            pressure={c.pressure}
          /> )}
      </div>
    </div>
    );
  } else {
    return(
      <div> </div>
    )
  }
}

