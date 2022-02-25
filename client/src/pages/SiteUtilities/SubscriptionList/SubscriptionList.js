import React, { useEffect, useState } from 'react'
import fetchJSON from '../../../utils/API'
import './SubscriptionList.css'






function SubscriptionList(){
    const [subList, setSubList] = useState([])

    function dateTime(date){
        const d = new Date(date);
        let text = d.toDateString();
        let time = d.toLocaleTimeString()
        return ({text, time})
    }

    function calcTime(date){
        let dateInMil = new Date(date)
        let today = new Date()
        let diff = (today - dateInMil)/1000
        switch(true){
            case (diff < 60):
                return `${Math.round(diff)} seconds ago`;
            case (diff < 3600):
                return `${Math.round(diff/60)} mininutes ago`;
            case (diff < 86400):
                return `${Math.round(diff/3600)} hours ago`;
            case (diff < 604800):
                return `${Math.round(diff/86400)} days ago`;
            case (diff < 31449600):
                return `${Math.round(diff/604800)} weeks ago`;
            default:
                return `a while ago`;
        }
    }


    async function handleDelete(id){
        console.log("hello", id)
        const results = await fetchJSON('/api/subscriptList', "post", {id})
        
        console.log(results)
        setSubList(results.results)
    }


    async function getSubscriptLink(){
        const results = await fetchJSON('/api/subscriptList')
        console.log(results)
        setSubList(results)
    }



    useEffect(() => {
        getSubscriptLink()
    },[])


    return(
        <>
            <div className="container">
                <h1 class="mb-5"> Please find below the list of emails subscribed</h1>
                {subList.map(item => 
                    < div className = "list-group p-1" >
                        <div className="list-group-item list-group-item-action addressList" aria-current="false">

                            <div className="d-flex w-100 justify-content-between">
                                <h4 className="mb-">
                                    {item.email}
                                </h4>
                                <small>{calcTime(item.createdAt)}</small>
                            </div>
                            <div>
                                <p className="m-1">
                                    <span className="dateTime">Added:</span> {(dateTime(item.createdAt).text)} at {(dateTime(item.createdAt).time)}
                                </p>
                                <div className="d-flex w-100 justify-content-end">
                                    <small  className="ms-2"><i className="far fa-trash-alt" onClick={(e) => handleDelete(item._id)}></i></small>
                                </div>

                            </div>
                        </div>  
                    </div>
                )}


            

            </div>
        </>
    )




}


export default SubscriptionList