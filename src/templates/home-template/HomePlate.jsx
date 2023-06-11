//react
import React, { Fragment, Suspense} from 'react'
import { Outlet } from 'react-router-dom'
//component
import Header from '/src/components/Header/Header'
import Footer from '/src/components/Footer/Footer'
import Loading from '/src/components/Loading/Loading'

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