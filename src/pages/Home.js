import React from 'react'
import Jumiapay from '../components/Jumiapay'
import Newarrival from '../components/Newarrival'
import ImposeSlide from '../components/ImposeSlide'
import Navbar from "./../components/Navbar"
import Ads from './Ads'
import Sidebar from './Sidebar'
import "./Home.css"

function Home() {
    return (
        <div className=''>
            <Newarrival />
            <Navbar />
            <div className="container-fluid sidebar_container">
                <div className="row">
                    <div className="col-md-2">
                        <Sidebar />
                    </div>

                    <div className="col-md-8">
                        <ImposeSlide />
                    </div>

                    <div className="col-md-2">
                        <Ads/>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Home