import seriesData from '../api/seriesData.json'
import './NetflixCard.css';

const NetfilxCards2 = () => {
    const age = 44;
    return (
        <>
            {/* <input type="number" placeholder='enter your age' value={age} onChange={(e) => setAge(Number(e.target.value))} /> */}
            <ul>
                {
                    seriesData.map((e) => {
                        return (<li key={e.id}>
                            <div>
                                <img src={e.img_url} alt="card image" width='40%' height='40%' />
                            </div>
                            <h2>Name: {e.name}</h2>
                            <h2>Rating: {e.rating} </h2>
                            <p>Summary: {e.description} </p>
                            <p>Genre: {e.genre} </p>
                            {age >= 16 ? <button><a href={e.watch_url} target="_blank" rel="noopener noreferrer">Watch Now</a></button> : <button disabled>Age Restricton</button>}
                        </li>)
                    })

                }

            </ul>
        </>
    )
}
export default NetfilxCards2;


