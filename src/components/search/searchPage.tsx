
import './searchPage.scss'
import location from '../../images/location.svg'


const SearchPage =  () => {
    return (
        <div className='searchPage-container'>
            <div className='searchPage-container-search'>
                <img src={location} alt='location'/>
                <input type="text" placeholder='Rustavi'/>
            </div>

            <div className='searchPage-container-info'>
                <div className='searchPage-container-info_content'>
                    <h4>Humidity</h4>
                    <p>38 %</p>
                </div>

                <div className='searchPage-container-info_content'>
                    <h4>Chance of Rain</h4>
                    <p>2 %</p>
                </div>

               <div className='searchPage-container-info_content'>
                    <h4>Air Quality</h4>
                    <p>3/10</p>
                </div>

                <div className='searchPage-container-info_content'>
                    <h4>Wind Speed</h4>
                    <p>3,8 Km/h</p>
                </div>
            </div>
        </div>
    )
}

export default SearchPage;