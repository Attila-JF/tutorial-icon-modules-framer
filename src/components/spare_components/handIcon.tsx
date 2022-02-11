import React, { FC, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion"
import { useAppSelector, useAppDispatch } from './redux/hooks'
import ArrowIcon from './icons/arrowIcon'
import './App.css'

const HandIcon: FC = () => {
 
  const playing = useAppSelector(state => state.audioControlDispatcher.play)
  const divAnimationControls = useAnimation()
  const arrow=useRef<HTMLDivElement>(null)
  useEffect(()=>{
   playing?divAnimationControls.start(divAnimationVariants.morph):divAnimationControls.stop()

  },[playing])

const divAnimationVariants={ 
  morph:{
    scale: [1, 2, 2, 1, 1],
    rotate: [0, 0, 270, 270, 0],
    borderRadius: ["20%", "20%", "50%", "50%", "20%"]
  }       
}

  return (
    <>
    
    <div className="example-container">
      <motion.div
      animate={divAnimationControls}
       
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1
        }}
        onHoverStart={() => {
          divAnimationControls.start(divAnimationVariants.morph)
        }}
      />
       
    </div>
    <ArrowIcon ref={arrow}/>
  </>

  )
}

export default HandIcon