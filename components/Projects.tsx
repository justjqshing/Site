import React from 'react'
import { TypewriterEffectSmooth } from './ui/typeWritter'

const Projects = () => {
    const words = [
        {
            text: "Word 1",
            className: "dark:text-blue-500  heading",
            cursor: {
                className: "bg-blue-500"
            }
        },
        {
            text: "Word 2",
            className: "dark:text-purple heading",
            cursor: {
                className: "bg-purple"
            }
        },
        {
            text: "Word 3",
            className: "dark:text-green-500 heading",
            cursor: {
                className: "bg-green-500"
            }
            
        }

    ]
    return (
        <div className='py-20 '>
            <div>

            <h1 className='heading '>
                        A Small Selection of Words:
                        <span className='text-purple text-center items-center flex justify-center w-full '><TypewriterEffectSmooth className='text-purple header ' words={words} /></span>

                </h1>

            </div>
                
        </div>
    )
}

export default Projects