import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import {
    faLinkedin,
    faGithub,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I'm interested in entry level or internship for software developer position, where I can learn and contribute to be an asset to the team.
                        <br />
                        Please don't hesitate to contact me if you need further information.
                    </p>
                    <p>
                        Windy Wang
                        <br />
                        Melbourne, Victoria
                        <br />
                        Phone : +61 421 936 558
                        <br />
                        Email : windyakira@gmail.com
                    </p>
                    <div className='link'>
                        <a href='https://www.linkedin.com/in/windy-akira-61211a1a4/'>
                            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                        </a>
                        <a href='https://github.com/malkosgod'>
                            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                        </a>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )

}

export default Contact