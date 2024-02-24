import { useState} from "react";

function Home(){
    const elmLogo = './public/elm-new-logo.jpg';

    return(
        <div>
            <div className="logo-img">
            <img style={{'width': '33vw'}} src={elmLogo} alt="ELM logo"/>
        </div>

        <div>
            <p>something goes here</p>
        </div>
        </div>
    
    )
}

export default Home