import React, { forwardRef } from "react";


        
        
const ArrowIcon =forwardRef<HTMLDivElement>((props, ref)=>{
            return(
        <div ref={ref}>
       <svg width="60" height="80" xmlns="http://www.w3.org/2000/svg" version="1.1">
          <polyline points="30 10 10 30  30 10 30 60 30 10 50 30" stroke="rgba(255,158,44)" strokeWidth="5" strokeLinecap="round" fill="none" strokeLinejoin="round"/>
          <polyline points="30 10 10 30  30 10 30 60 30 10 50 30" stroke="rgba(255,158,44,0.5)" strokeWidth="13" strokeLinecap="round" fill="none" strokeLinejoin="round"/>
        </svg>
        </div>
      )
    })    
        
  export default ArrowIcon      
        
        