import {useState} from 'react';

function AboutUs(props){
    const displayAboutUs = props.aboutUsPara.map((eachAboutUs)=> <p>{eachAboutUs}</p>)

    return(
        <div>
            <h1>Exceptional Learning Moments</h1>
            {displayAboutUs}
        </div>
    )
}

export default AboutUs