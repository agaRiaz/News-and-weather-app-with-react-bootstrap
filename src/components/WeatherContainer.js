import React,{useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Container, Col, Row, Form } from 'react-bootstrap';
import './Weather.css';
import NewsCard from './NewsCard';
import Wicons from './Wicons';





const WeatherContainer = () => {

  const [data, setData] = useState(null);
  const [weather, setWeather] = useState(null);
  const [search, setSearch] = useState('hyderabad');
  const [country, setCountry] = useState('in');
  console.log(search);

  useEffect(() => {
      const fetchData = async() => {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
        const response = await fetch(url);
        // console.log(response);
        const resJson = await response.json();
        console.log(resJson);
        setData(resJson.main);
        setWeather(resJson.weather[0].main);
        setCountry(resJson.sys.country);

        
      }
      fetchData();
  }, [search])
  
 

  return (
    <>
 <Container className="mt-5 rounded" style={{ width: '400px', height: '405px', backgroundColor: '#00ffcc' }}>
      <Row>
        <Col><Form.Group className="mb-3 mt-3">

          <Form.Control placeholder="Enter City Name" value={search} onChange={(e) => { setSearch(e.target.value)}} />

        </Form.Group></Col>
      </Row>

      <Row>
        <Col className="mt-3 d-flex align-items-center justify-content-center" ><Wicons weather={weather} />
        </Col>
      </Row>
{!data ? 

(<p> No Data Found</p>) : (
  
  <>
  <Row>
        <Col className="mt-4 d-flex align-items-center justify-content-center fs-3" > {data.temp}&#8451; </Col>
      </Row>

      <Row>
        <Col className="mt-3 d-flex align-items-center justify-content-center fs-5 " >{weather}</Col>
      </Row>

      <Row>
        <Col className="mt-3 d-flex align-items-center justify-content-center fs-3 text-uppercase" ><FontAwesomeIcon icon={faLocationDot} /> &nbsp;<span>{search},{country}</span>
        </Col>

      </Row>

      <Row>
        <Col className="mt-4 d-flex align-items-center justify-content-center border border-secondary rounded-bottom border-3 fs-4" style={{ height: '45px' }} >Max : {data.temp_max}&#8451;
        </Col>
        <Col className="mt-4 d-flex align-items-center justify-content-center border border-secondary rounded-bottom border-3 fs-4" >Min : {data.temp_min}&#8451;
        </Col>
      </Row>
  </> )
}


    </Container>
<NewsCard country={country}/>

    </>
   
    
  )
}

export default WeatherContainer;