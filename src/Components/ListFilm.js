import CardFilm from "./CardFilm"

const ListFilm =({movies, searchT, rateT})=>{
    return(
        <div id="listFilm">
            {
                movies.filter((el,i,t)=>el.title.toUpperCase().includes(searchT.toUpperCase()) && el.rating >= rateT)
                .map((el,i,t)=><CardFilm el={el}/>)
            }
        </div>
    )
}

export default ListFilm