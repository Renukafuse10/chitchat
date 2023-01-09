import React from 'react'
import "./Message.css"

function Message(props) {

    const current = new Date();
    // By default US English uses 12hr time with AM/PM
const time = current.toLocaleTimeString("en-US");
  
    return (
        <div className={`messageContainer-${props.type}  `} >
            <div className={`messageContent ${props.type} `}>

                {
                    props.type === 'incoming' ?
                        <p className='email m-0 p-0'>{props.from}</p>
                        :
                        <p className='email m-0 p-0'>{props.to}</p>
                }
                <div className='d-flex align-items-center mt-0 pt-0'>
                <p className='text m-0 p-0'>{props.text}</p>  <span className='time mx-2 mt-2 '> {time}</span>

                </div>


            </div>
        
             
         
        </div>
      

    )
}

export default Message