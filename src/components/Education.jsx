// A section to add your educational experience (school name, title of study and date of study)
import "../styles/education.css";
// import { useState } from "react";

export default function Education() {
    return (
        <div className="education-details">
            <h3 className="title">Education</h3>
            <label htmlFor="">
                Education
                <input type="text" />
            </label>
            <br />
            <label htmlFor="">
                School
                <input type="text" />
            </label>
            <br />
            <label htmlFor="">
                City
                <input type="text" />
            </label>
            <br />
            <label htmlFor="">
                Start date
                <input type="text" />
            </label>
            <br />
            <label htmlFor="">
                End date
                <input type="text" />
            </label>
            <br />
            <label htmlFor="">
                Description
                <input type="text" />
            </label>
            <br />
        </div>
    )
}