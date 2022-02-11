import React,{FC,useRef,useEffect,useState} from 'react'
import { useAppSelector, useAppDispatch } from '../redux/hooks'
//import store from '../redux/store/store';
import { useSelector, useDispatch } from 'react-redux'
import { audioCommand} from '../redux/features/audioControlDispatchSlice'

const AudioPLayer: FC = () => {
    const playing = useAppSelector(state => state.audioControlDispatcher.play)
    const dispatch = useAppDispatch()    
 return(
     <div>
         <button style={{background:"aqua", width:"100px",height:"100px", fontFamily:"Arial",fontSize:"12px"}}
         onClick={()=>dispatch(audioCommand(true))}>dispatch play</button>
          <button style={{background:"aqua", width:"100px",height:"100px", marginTop:"30px",fontFamily:"Arial",fontSize:"12px"}}
         onClick={()=>dispatch(audioCommand(false))}>dispatch pause</button>
     </div>
 ) 
}

export default AudioPLayer