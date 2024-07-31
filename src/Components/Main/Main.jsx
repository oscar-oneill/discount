import main from './Main.module.css'
import { pac12 } from '../../utils/photos'

const Button = () => {
    return ( 
        <a className={main.button} href='https://thecleaningcompany-nyc.setmore.com/services' target="_blank" rel="noopener noreferrer nofollow">
            <h4 className={main.appText}>Schedule</h4>
            <i className="fa-regular fa-clock"></i>
        </a>
    )
}

const Main = () => {
    return (
        <div className={main.main_container}>
            <h1>Discounts For You!</h1>

            <div className={main.asu_container}>
                <img className={main.logo} src={pac12.asu} alt='school logo'/>
                <h3>Arizona State University alums can enjoy a $30 discount on eligible services all year round, no matter what. <br/> <br/> How do you like that for innovation? Forks up, Sun Devils!</h3>
            </div>

            <div className={main.pac12_container}>
                <img className={main.logo} src={pac12.pac12} alt='school logo'/>
                <h3>{`The Pac-12 may be over as we know it. How about a $15 discount for those people who have gone to these schools:`}</h3>
                <h4>University of Arizona, University of California-Berkeley, UCLA, University of Colorado, University of Oregon, Oregon State University, USC, Stanford University, University of Utah, University of Washigton & Washington State University</h4>
            </div>


            <div className={main.secondary}>
                <h2>{`Check back soon for more discounts!`}</h2>
            </div>


            <div className={main.disclaimer}>
                <h4>{`*Discounts cannot be used for Studio Cleaning, Individual Residential Cleaning, or any additional cleaning add-ons.`}</h4>
                <h4>{`*Attendees of the colleges and universities listed above will have to show proof of attendance by emailing a photo of your school id indicating student status, or a copy of your transcript. Names on transcripts must match the client name when booking cleaning services to be eligible. Please email credentials to `}<a id={main.business} href='mailTo:business@thecleaningcompany.xyz'>business@thecleaningcompany.xyz</a></h4>
            </div>

            <Button/>
        </div>
  )
}

export default Main