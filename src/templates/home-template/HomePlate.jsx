import React, { Fragment, Suspense} from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import Header from '../../components/header/Header'
import CarouselOponent from '/src/components/carousel/Carousel'
import ListItem from '../../components/listItem/ListItem'
import Footer from '/src/components/footer/Footer'

function HomePlate() {
    return (
        <Fragment>
            <Header/>
            <CarouselOponent/>
            <ListItem/>
            <Footer/>
            <Suspense fallback={<><h1>Loading...</h1></>}>
                <Outlet />
            </Suspense>
        </Fragment>
    )
}

export default HomePlate