import Flag from "../images/Flag.png";
import Firefighters from "../images/Firefighters.jpeg";
import Military from "../images/Military.jpeg";
import Police from "../images/Police.jpeg";

const Community = () => {
  return (
    <div className="component_container">
        <h2>We honor or military and first responders.</h2>
      <div id="community_page_img_div">
        <img className="community_img" src={Firefighters} alt=""></img>
        <img className="community_img"src={Military} alt=""></img>
        <img className="community_img"src={Police} alt=""></img>
      </div>
    </div>
  );
};

export default Community;
