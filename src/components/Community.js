import Flag from "../images/Flag.png"

const Community = () =>{

    return(
<div className="component_container">
    <h1>
        Community
    </h1>
     <div>
    <img id="flag_img" src={Flag} alt=""></img>
    <h2 id="first_responders">We honor our military and first responders.
    <br></br>Contact us about our special offers.</h2>
    </div>
</div>
    )
}

export default Community