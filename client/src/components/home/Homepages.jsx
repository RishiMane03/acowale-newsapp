import React,  { useState, useEffect } from "react"
import Homes from "./mainContent/homes/Home"
import Hero from './hero/Hero'
import axios from 'axios';

const Homepages = () => {

  const [allNews, setAllNews] = useState([]);

  const handleData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/news/getAllNews');
      setAllNews((prevNews) => [...prevNews, ...response.data.data.articles]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    handleData() 
  }, []);

  return (
    <>
      <Hero allNews={allNews}/>
      <Homes allNews={allNews}/>
    </>
  )
}

export default Homepages
