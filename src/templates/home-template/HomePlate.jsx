//react
import React, { Fragment, Suspense} from 'react'
import { Outlet } from 'react-router-dom'
//component
import Header from '/src/components/header/Header'
import Footer from '/src/components/footer/Footer'
import Loading from '/src/components/loading/Loading'

//---------------------------------------------------------------------------------

function HomePlate() {
    return (
        <Fragment>
            <Header/>
            <Suspense fallback={<><Loading/></>}>
                <Outlet />
            </Suspense>
            <Footer/>
        </Fragment>
    )
}

export default HomePlate