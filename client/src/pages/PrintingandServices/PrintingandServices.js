import React from 'react'

import Animation from '../../components/AnimeTest/AnimeTest'

import Logo from '../../components/Logo/Logo'

import NewSubmitBt from '../../components/NewSubmitBtn/NewSubmitBt'



function PrintingandServices(){

    return(
    <>
        <div className="container">
            <section className="print">
                <h1>Printing Services</h1>
                <hr />
                
                <p>Coming soon...</p>

                <Animation />

                

                <Logo />

            </section>
            <br />
            <br />
            <section>
                <NewSubmitBt 
                   text = "submit" 
                   size = "25"
                
                />


            </section>
        </div>
    </>
    )
}

export default PrintingandServices