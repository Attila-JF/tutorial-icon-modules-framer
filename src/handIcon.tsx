import React, { FC, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion"
import { useAppSelector} from './redux/hooks'
import ArrowIcon from './icons/arrowIcon'
import './App.css'

const HandIcon: FC = () => {

  const playing = useAppSelector(state => state.audioControlDispatcher.play)
  const divAnimationControls = useAnimation()
  const arrow = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (playing) { divAnimationControls.start(divAnimationVariants.morph[1]) }
    else if (!playing) { divAnimationControls.stop() }

  }, [playing])

  const divAnimationVariants = {
    morph: [{
      rotate: [0, 90,],
    },
    {
      rotate: [0, 180, 0],
    }
    ]
  }



  const timeLine = [
    {
      arrow: {
        x: [0, 20, 0],
        transition: { ease: "linear", duration: 2, repeat: Infinity }
      },
      hand: {
        y: 200,
        transition: { ease: "linear", duration: 6 }

      }
    }

  ]

  return (
    <>
      <motion.div
        animate={divAnimationControls}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          // repeat: 2,
          // repeatDelay: 1
        }}
      // onHoverStart={() => {
      //   divAnimationControls.start(divAnimationVariants.morph)
      // }}
      >
        <ArrowIcon ref={arrow} />
      </motion.div>
    </>
  )
}
export default HandIcon