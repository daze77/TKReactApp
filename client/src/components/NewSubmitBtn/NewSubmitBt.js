import React from 'react'
import './NewSubmitBt.css'


function newSubmitBtn(props){


    return(
        <>
        
            <section >
                <div className=" link--arrowed" >{props.text}
                    <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" width={props.size} height={props.size} viewBox="0 0 32 32">
                        <g fill="none"  strokeWidth="3" strokeLinejoin="round" strokeMiterlimit="10">
                            <circle className="arrow-icon--circle" cx="16" cy="16" r="15.12"></circle>
                            <path className="arrow-icon--arrow" d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"></path>
                        </g>
                    </svg>
                </div>
            </section>
        
        
        
        </>
    )
}

export default newSubmitBtn