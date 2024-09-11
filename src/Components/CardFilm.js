import Card from 'react-bootstrap/Card';
import Rating from '@mui/material/Rating';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const CardFilm =({el})=>{
    const [readMore, setReadMore] = useState(false);
    return(
        <Card style={{ width: '18rem' }}>
     <Link to={`/FilmPage/${el.id}`}><Card.Img variant="top" src={el.posterURL} style={{width : "286px" , height : "391px"}} /></Link> 
      <Card.Body>
        <Card.Title>{el.title}</Card.Title>
        <Card.Text>
        {readMore ? el.description : `${el.description.substring(0, 40)}...`}
        <button className={readMore ? "less" : "more"} onClick={() => setReadMore(!readMore)}>
          {readMore ? "show less" : " read more"}
        </button>
          
          <br/>
          <br/>
          <Rating name="read-only" value={el.rating} readOnly />
        </Card.Text>
      </Card.Body>
    </Card>

    )
}

export default CardFilm