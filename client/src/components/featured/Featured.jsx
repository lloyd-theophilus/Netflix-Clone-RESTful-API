import './featured.scss'
import {PlayArrow, InfoOutlined} from '@material-ui/icons';

export default function Featured({ type }) {
    return (
        <div className='featured'>
            
            {type && (
                <div className="category">
                    <span>{type ==='movies' ? 'Movies' : 'Series'}</span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value='adventure'>Adventure</option>
                        <option value='comedy'>Comedy</option>
                        <option value='crime'>Crime</option>
                        <option value='fantasy'>Fantasy</option>
                        <option value='historical'>Historical</option>
                        <option value='horror'>Horror</option>
                        <option  value='romance'>Romance</option>
                        <option value='sci-fi'>Sci-fi</option>
                        <option value='thriller'>Thriller</option>
                        <option value='western'>Western</option>
                        <option value='animation'>Animation</option>
                        <option value='drama'>Drama</option>
                        <option value='documentary'>Documentary</option>
                    </select>
                </div>
            )}
           <img width= '100%' className='background' src="/bcg.jpg" alt="" />
          <div className="info">
          <img src="/spat.png" alt="" />
          <span className='desc'>
          Spartacus is an American television series
          produced in New Zealand that premiered on
          Starz on January 22, 2010, and concluded 
          on April 12, 2013.
          First episode date: January 22, 2010
          Genre: Historical drama; Sword-and-sandal
          Producers: Chloe Smith; Charles Knight; Aaron Lam
          Composer: Joseph LoDuca
          Created by: Sam Raimi; Steven S. DeKnight
          </span>
          <div className="buttons">
              <button className='play'>
                  <PlayArrow/>
                  <span>Play</span>
              </button>
              <button className='more'>
                  <InfoOutlined/>
                  <span>Info</span>
              </button>
          </div>
         </div> 
        </div>
    )
}
