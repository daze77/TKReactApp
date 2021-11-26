import React from 'react'
import Payments from '../Payments/Payments'


function CheckoutButtonModal(){
    return(
        <>

     {/* <!-- Modal --> */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                                <Payments />
                        </div>
                        {/* <div class="modal-footer">
                        </div> */}
                    </div>
                </div>
            </div>

        </>
    )
}
export default CheckoutButtonModal