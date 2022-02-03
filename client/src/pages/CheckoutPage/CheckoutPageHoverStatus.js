import React, {useState} from 'react'

function CheckoutHoverStatus(props){
    const [showDelBttn, setDelBttn] = useState('hidden')


    function handleMouseEnter(){
        setDelBttn("visible")
    }

    function handleMouseLeave(){
        setDelBttn("hidden")
    }

    return(
        <>
            <tr onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>    
                <th scope="row"  >{props.index+1}</th>
                <td>{props.title}</td>
                <td>{props.quantity}</td>
                <td>$ {props.price / 100}</td>
                <td>$ {props.total / 100} <i className="fas fa-minus" style={{ visibility: showDelBttn }} onClick={() => props.handleDel(props.index)}  ></i></td>
            </tr>
        </>
    )
}

export default CheckoutHoverStatus