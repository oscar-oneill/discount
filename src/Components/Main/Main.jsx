/* eslint-disable react/prop-types */
import main from './Main.module.css'
import { pac12, hospitals, newyork } from '../../utils/photos'

const Affiliations = ({ institutions, memo }) => {
    return (
        <div className={main.container_one}>
            <h3>{memo}</h3>
            <div className={main.logo_container_one}>
                { institutions && institutions.map((institution, i) => {
                    return (
                        <img key={i} className={main.logo2} src={institution} alt='logo'/>  
                    )
                }) }
            </div>
        </div>
    )
}

const Button = () => {
    return ( 
        <a className={main.button} href='https://thecleaningcompany-nyc.setmore.com/services' target="_blank" rel="noopener noreferrer nofollow">
            <h4 className={main.appText}>Schedule</h4>
            <i className="fa-regular fa-clock"></i>
        </a>
    )
}

const ArizonaState = () => {
    return (
        <div className={main.asu_container}>
            <h3>{`Can't leave out that one school in Tempe. If you're an Arizona State University alum, you can also enjoy a $25 discount on eligible services. Now how do you like that for innovation? Forks Up, Sun Devils!`}</h3>
            <img className={main.logo} src={pac12.asu} alt='school logo'/>
        </div> 
    )
}

const health = `Healthcare professionals & hospital employees at any of the following networks can enjoy a $30 discount on eligible services.`
const school = `Students, alumni, faculty, and employees from any of the following colleges and universities can enjoy a $25 discount on eligible services.`

// Primary Component
const Main = () => {
    return (
        <div className={main.main_container}>
            <h1>Discounts For You!</h1>
            <Affiliations
                institutions={hospitals}
                memo={health}
            />

            <br/><br/>

            <Affiliations
                institutions={newyork}
                memo={school}
            />

            <br/><br/>

            <ArizonaState/>

            <div className={main.disclaimer}>
                <h4>{`Limit 2 discounts per calendar year, per address.`}</h4>
                <h4>{`Discounts cannot be used for Studio Cleaning, Individual Residential Cleaning options, or any additional cleaning add-ons. Cannot be combined with any other discounts.`}</h4>
                <h4>{`Employees of the hospital networks listed above must show proof of employment (an employee id will do just fine). Names on id's must match the client's name who is booking cleaning service to be eligible. Please email credentials to `}<a id={main.business} href='mailTo:business@thecleaningcompany.xyz'>business@thecleaningcompany.xyz</a></h4>
                <h4>{`Attendees of the colleges and universities listed above must show proof of attendance or employment by emailing a photo of your employment/student id, or a copy of your transcript with grades and personal information redacted. Names on transcripts, id cards and employee id's must match the client's name who is booking cleaning service to be eligible. Please email credentials to `}<a id={main.business} href='mailTo:business@thecleaningcompany.xyz'>business@thecleaningcompany.xyz</a></h4>
                <h4>{`All CUNY and SUNY campuses are eligible for discounts.`}</h4>
            </div>

            <Button/>
        </div>
  )
}

export default Main