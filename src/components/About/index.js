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
                    <p>
                        I'm passionate about software development and I would love to
                        learn, deepen my knowledge, and start my career in website development.
                    </p>
                    <p>
                        Currently pursuing a Master of Information Technology from Kaplan Business School Melbourne. I
                        have academic/professional experience in/using HTML & CSS, JavaScript, Reacts, THREEJS, SQL,
                        Python, and NodeJS. Additionally, I have exceptional communication, interpersonal and time
                        management skills. I also enjoy working in a team environment but can work autonomously.
                    </p>
                    <p>
                        I am currently seeking a role as a Website Developer where I can further develop my overall skill set
                        and build a career in the IT industry. I am open to any opportunities that will allow me to grow and learn from experienced professionals.
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