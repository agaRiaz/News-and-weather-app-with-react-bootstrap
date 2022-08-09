import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faCloudShowersWater,faCloudRain,faSnowflake,faSun,faSmog } from '@fortawesome/free-solid-svg-icons';
import { Thunderstorm, } from '@mui/icons-material';

const Wicons = (props) => {

    const allIcons = () => { 
        
        if(props.weather === 'Thunderstorm'){
               return <FontAwesomeIcon icon={Thunderstorm} className="clouds" />;
        }else if(props.weather === 'Drizzle'){
            return <FontAwesomeIcon icon={faCloudShowersWater} className="clouds" />;
        }else if(props.weather === 'Rain'){
            return <FontAwesomeIcon icon={faCloudRain} className="clouds" />;
        }else if(props.weather === 'snow'){
            return <FontAwesomeIcon icon={faSnowflake} className="clouds" />;
        }else if(props.weather === 'Clouds'){
            return <FontAwesomeIcon icon={faCloud} className="clouds" />;
        }else if(props.weather === 'Mist' || props.weather === 'Smoke' || props.weather === 'Haze' || props.weather === 'Dust' || props.weather === 'Fog' || props.weather ==='Sand' || props.weather ==='Dust' || props.weather === '	Ash' || props.weather === 'Squall' || props.weather === 'Tornado') {
          return <FontAwesomeIcon icon={faSmog} className="clouds" />;
        }else {
            return <FontAwesomeIcon icon={faSun} className="clouds" />;
        }
        }
    
  return (
    <>{allIcons()}</>
  )
}

export default Wicons;