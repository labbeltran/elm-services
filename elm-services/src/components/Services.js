import {useState} from 'react'
import Ils from './components/Ils.js';
import Sls from './components/Sls.js';
import Social from './components/Social.js';

function Services(){

    return(
        <div>
            <Ils/>
            <Sls/>
            <Social/>
        </div>
    )
}

export default Services