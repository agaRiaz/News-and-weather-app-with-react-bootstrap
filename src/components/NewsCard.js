
import React,{useEffect, useState} from 'react';
import {Button, Card, Container} from 'react-bootstrap';
import newsImg from '../images/newsImg.jpg';
import './News.css';

const NewsCard = (props) => {

  const [news,setNews] = useState([]);
  
  useEffect(() => {
    const fetchNews = async() => {
      const apiKey = REACT_APP_NEWS_API_KEY;
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${apiKey}`;
      const newsResponse = await fetch(url);
     
      const jsonNewsResponse = await newsResponse.json();
      // console.log(jsonNewsResponse);
      // console.log(jsonNewsResponse.articles);
      setNews(jsonNewsResponse.articles);

    }
    fetchNews();
  }, [props.country])
  
  return (
    <>
    <Container className='d-flex align-items-center justify-content-center flex-wrap '   fluid>
    {!news ? ('No News Available') : (
<>
{news.map((element,index) => (
    <div className='d-flex m-4 newsCont' key={index} >
  <Card className='mt-5 mb-3  ' style={{ width: '18rem' }} >

  {!element.urlToImage ? (<Card.Img variant="top" src= {newsImg} />) : (
    <Card.Img variant="top" src= {element.urlToImage} />
    )}
    
    <Card.Body>
      <Card.Title>{element.title}</Card.Title>
      <Card.Text>
        {element.content}
      </Card.Text>
      <Button variant="primary" href={element.url}>Read More </Button>
    </Card.Body>
  </Card>
  </div>

  ))}
</>
)}
  
</Container>
    
   
    </>
  )
}

export default NewsCard;