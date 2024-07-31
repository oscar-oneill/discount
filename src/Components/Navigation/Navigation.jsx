import { blob } from '../../utils/photos';
import nav from './Navigation.module.css';


const Title = () => {
    return (
        <div className={nav.title}>
            <img className={nav.nav_logo} src={blob.purple} alt='main-logo'/>
            <h3>The Cleaning Company</h3>
        </div>
    )
}

const Schedule = () => {
    return ( 
        <a className={nav.schedule} href='https://thecleaningcompany-nyc.setmore.com/services' target="_blank" rel="noopener noreferrer nofollow">
            <h4 className={nav.appText}>Schedule</h4>
            <i className="fa-regular fa-clock"></i>
        </a>
    )
}

const Navigation = () => {
  return (
    <div className={nav.container}>
        <Title/>
        <Schedule/>
    </div>
  )
}

export default Navigation