import React, { useEffect, useRef } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/Cards_data'
import { useState } from 'react'
import { Link } from 'react-router-dom'
 const TitleCards=({title,category,query})=> {
  const [isHovered, setIsHovered] = useState(false);
 
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    // Define the asynchronous function to fetch data
    const fetchMovies = async () => {
      try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=3e59bcb5&s=${query?query:"punjabi"}`);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setMovies(data.Search || []); // Update state with fetched data
      } catch (error) {
        setError(error.message); // Update state with error message
      } finally {
        setLoading(false); // Set loading to false after fetching data
      }
    };
  
    // Use useEffect to call fetchMovies on component mount
    useEffect(() => {
      fetchMovies();
    }, []);


  
  const cardsRef = useRef();
const handleWheel = (event) => {
  event.preventDefault();
  cardsRef.current.scrollLeft += event.deltaY;
}
useEffect(()=>{
 cardsRef.current.addEventListener('wheel', handleWheel);
},[])


  return (
    <>
   
        
        <div className='titlecards'>
      
     
        <h2>{title?title:""}</h2>

        <div className="card-list" ref={cardsRef}>
          
            {movies.map((card,index)=>{
return <Link to={`player/0`} className='card'key={index}> <img src={card.Poster} alt="" /> 
<p>{card.Title}</p></Link>
            
            })}
        </div>
    </div>
        </>
    
  )
}

export default TitleCards
