import './watch.scss'
import {ArrowBack} from '@material-ui/icons';

export default function Watch() {
    return (
        <div className='watch'>
            <div className="back">
                <ArrowBack/>
                Home
            </div>
            <video className='video' autoPlay onProgress controls src='https://www.youtube.com/watch?v=_b0OtCchjTw'/>
        </div>
    )
}
