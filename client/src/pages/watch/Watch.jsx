import './watch.scss'
import {ArrowBack, MovieCreation} from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

export default function Watch() {
    //Link to movie location
    const location = useLocation()
    const movie = location.movie
    return (
        //Link back to the home page
        <div className='watch'>
            <Link to='/'>
            <div className="back">
                <ArrowBack/>
                Home
            </div>
            </Link>
            <video className='video' autoPlay onProgress controls src={movie.video}/>
        </div>
    )
}
