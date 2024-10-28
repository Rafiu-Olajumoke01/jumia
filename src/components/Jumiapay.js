import React from 'react'
import { Link } from 'react-router-dom'
import "./Jumiapay.css"

function Jumiapay() {
    return (
        <div className="container parent">
            <div className="sell_on_jumia">
                <img src={require("./../images/jumialogome.png")} alt="" />

                <Link>Sell on Jumia</Link>
            </div>

            <div className="pay_jumia_logo">
                <img src={require("./../images/jumiapay-removebg-preview.png")} alt="" />
            </div>
        </div>

    )
}

export default Jumiapay