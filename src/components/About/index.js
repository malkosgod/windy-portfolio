import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faHtml5, faCss3, faReact, faJsSquare } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <>
            <div className="container about-page">
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>I'm passionate about web and mobile application development and I would love to
                        learn, deepen my knowledge, and start my career in software development.
                        I want to develop my problem-solving skill as well as interpersonal skills. </p>
                    <p>
                        I'm a team player, a fast learner, naturally curious,
                        and able to work in a number of environments.
                    </p>
                    <p>
                        I am willing to learn and work hard if given the opportunity. Most importantly
                        I come with enthusiasm, initiative, positive attitude, and the ability to work hard.
                        I pride myself on being the three p’s. Punctual, Polite, Professional.
                    </p>
                </div>

                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                    </div>
                </div>

            </div>

            <Loader type="pacman" />
        </>
    )

}

export default About