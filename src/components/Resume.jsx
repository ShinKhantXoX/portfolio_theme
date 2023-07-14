import React, { useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Resume = () => {

  const [ref, inView] = useInView();
  const widthAni = useAnimation();

  useEffect(() => {
    if(inView){
      widthAni.start({
        width: '100%',
        transition: {
          type: 'keyframes', duration: 0.4, bounce: 0.3
        }
      })
    }
    if(!inView){
      widthAni.start({
        width: 0,
        transition: {
          type: 'keyframes', duration: 0.4, bounce: 0.3
        }
      })
    }
  }, [inView])

  return (
    <div ref={ref} className=' min-h-screen' id='resume'>
      <div className="progress-bar-container w-full">
          <div className="w-full h-[3px]">
            <motion.div
              animate={widthAni}
              className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% h-[3px]"
            ></motion.div>
          </div>
        </div>
    </div>
  )
}

export default Resume