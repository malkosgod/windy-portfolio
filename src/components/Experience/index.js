import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Experience = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className="container portfolio-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']}
                            idx={15}
                        />
                    </h1>
                        <div className='exp'>
                            <h2>React Three Fiber</h2>
                                <p>
                                    This is a portfolio project that I have been working on to showcase my skills in React Three Fiber. 
                                    It is a 3D environment that I have created using React Three Fiber and it is a work in progress. 
                                    I will be adding more features to it in the future.
                                </p>
                            <a
                                href="https://windy-r3f-portfolio.vercel.app/"
                                className="flat-button"
                            >
                                React Three Fiber Portfolio
                            </a>
                        </div>
                        <div className='exp'>
                            <h2>Wix Cafe Website</h2>
                                <p>
                                    This is a Restaurant website that I have created using Wix. It is a website for a cafe and which include the menu, reservation, and contact information.  
                                    I will be adding more features to it in the future.
                                </p>
                            <a
                                href="https://www.thelittleox.com.au/"
                                className="flat-button"
                            >
                                The Little Ox Cafe Website
                            </a>
                        </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )

}

export default Experience