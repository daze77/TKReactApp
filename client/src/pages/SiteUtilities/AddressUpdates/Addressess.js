import React from 'react'
import {useStoreContext} from '../../../utils/GlobalStore'

function CorpAddress(props){
    const [{ addresses} ]= useStoreContext()
  
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

      
    return(
        <>
 
            <h2 class="mb-3">Address List</h2>
            <p>List of corporate addressess saved to database</p>
            
            {addresses.map(addr =>  
                <div key={addr._id} className=" addressListGroup list-group p-1 mb-3"> 
                    <div  className="list-group-item list-group-item-action addressList" aria-current="false">
                        <div  className="d-flex w-100 justify-content-between">
                            <h5 className="mb-">
                                <input className="form-check-input me-2" type="radio" name="flexRadioDefault" id={addr._id} checked={addr.addressflag} onChange={props.defaultAddressChange} />{addr.addressName}
                            </h5>
                            <small>{calcTime(addr.updatedAt)}</small>
                        </div>
                        <div>
                            <p className="m-1">
                                {addr.address} <br/>
                                {(addr.address2) && <> {addr.address2} <br/> </>}
                                <small>{addr.city} {addr.province}, {addr.postalCode} - {addr.country}</small> 
                            </p>
                            <div className="d-flex w-100 justify-content-end">
                                <small onClick={() => props.grabAddressDetails(addr._id)} className="me-2"><i className="fa fa-i-cursor" data-bs-toggle="modal" data-bs-target="#exampleModal"></i></small>                        
                                <small onClick={() => props.handleDelete(addr._id)} className="ms-2"><i className="far fa-trash-alt"></i></small>
                            </div>

                        </div>
                    </div>
                </div>
            )} 


    </>
)}

export default CorpAddress