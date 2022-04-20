import React from 'react'
import Payments from '../Payments/Payments'


function CheckoutButtonModal(){
    return(
        <>

     {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                                <Payments />
                        </div>
                        {/* <div className="modal-footer">
                        </div> */}
                    </div>
                </div>
            </div>

        </>
    )
}
export default CheckoutButtonModal