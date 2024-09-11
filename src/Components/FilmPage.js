import { useNavigate, useParams } from "react-router-dom"
import Rating from '@mui/material/Rating';

const FilmPage=({movies})=>{
    const {id} = useParams()
    const found = movies.find((el,i,t)=> el.id ==id)
    const navigate = useNavigate()
    return(
        <div>
             <h1 className="title">{found.title}</h1>
            <div className="filmPage">
            <img style={{width : "30%"}} src={found.posterURL} alt="Not Found"/> 
                <div className="trailer">
                     {found.trailer}
                    <div className="btnPostion">
                    <Rating name="read-only" value={found.rating} readOnly />
                    <button className="btnTrailer" onClick={()=>navigate('/Movies')}>Back To Movies</button>
                    </div>
                </div> 
            </div>
           

            
        </div>
    )
}

export default FilmPage