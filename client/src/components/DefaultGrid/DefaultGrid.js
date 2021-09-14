import React from 'core-js/library/fn/reflect/es7/metadata'

import Row from '../../components/Row/Row'
import DefaultGridCol from './DefaultGridCol'

function DefaultGrid(){

    return(
    <>
        <div class="container">
            {/* <div class="row row-cols-2 row-cols-md-4 g-4 mb-5"> */}
            <Row rowclass = "row-cols-2 row-cols-md-4 g-4 mb-5">
                <DefaultGridCol />

                
            </Row>
        </div>
        {/* </div> */}
    </>

    )




}

export default DefaultGrid