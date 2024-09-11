import Rating from '@mui/material/Rating';
import Button from 'react-bootstrap/Button';

const SearchFilm=({searchT, setSearchT, rateT, setRateT })=>{
   const handleReset=()=>{
        setSearchT ('')
        setRateT(0)
    }
    return(
        <div className='search'>
            <input value={searchT} type="text" onChange={(e)=>setSearchT(e.target.value)}/>
            <Rating value={rateT} onChange={(e)=>setRateT(e.target.value)}/>
            <Button variant="warning" onClick={handleReset}>Reset</Button>
        </div>
    )
}
export default SearchFilm