// import { useState } from "react";
import "../styles/person.css";
import '../styles/App.css'


export default function Person() {
    return (
        <div className="personal-details">
            <h3 className="title">Personal details</h3>
            <label htmlFor="">
                First name
                <input type="text" />
            </label>
            <br />
            <label htmlFor="">
                Last name
                <input type="text" />
            </label>
            <br />
            <label htmlFor="">
                Headline
                <input type="text" />
            </label>
            <br />
            <label htmlFor="">
                E-mail
                <input type="text" />
            </label>
            <br />
            <label htmlFor="">
                Phone number
                <input type="text" />
            </label>
            <br />
            <label htmlFor="">
                Address
                <input type="text" />
            </label>
            <br />
            <label htmlFor="">
                Postal code
                <input type="text" />
                <br />
                </label>
            <label htmlFor="">
                City
                <input type="text" />
            </label>
        </div>
    )
}