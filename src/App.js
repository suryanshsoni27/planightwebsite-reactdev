import "./App.css";
import React from "react";
import suryansh from "./Planightsources/suryansh.png";
import Nath from "./Planightsources/nath.png";
// import Planight from "./Planightsources/Planight.png";
import "bootstrap/dist/css/bootstrap.min.css";
// import Pavbar from "./Pavbar";
// import PlanightHeaderImage from "./PlanightHeaderImage";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import ImageCard from "./Components/ImageCard";
import Paragraph from "./Components/Paragraph";
// import Header from "./Header";
import Carmove from "./Components/Carmove";
import { auth, provider } from "./firebase";
import Bcutton from "./Components/Bcutton";
import form from "./Components/FormPlan";
import FormPlan from "./Components/FormPlan";

function App() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  return (
    <div className="main">
      {/*<Pavbar></Pavbar>*/}
      {/* <PlanightHeaderImage />*/}
      <div className="main__header">
        {/* <img width="500" height="200" src={Planight} alt="" />*/}
      </div>
      <div className="main__title">{/*<Header></Header>*/}</div>

      <div>
        <Carmove />
      </div>

      <div>
        <Paragraph
          text="Planight will consolidate all aspects of college nightlife into one interactive mobile app, conveniently allowing users to seamlessly plan the perfect night out."
          quote="Our Mission"
        />
        <Paragraph
          text="Share your location with friends when you are out if you are having a good time. Not having a good time? No worries, get notified when your friends are located at a bar or restaurant near you to change the vibes. Connect your uber or lyft
        account to Planight to order a ride to their location."
          quote="Squad Up"
        />
        <Paragraph
          text="Manage all the drinks you purchase from the palm of your hand. Automatically have a bar tab set up for you when you reach a bar and simply verify your identity when purchasing drinks through Planight. Set a spend limit for yourself and track
        the drinks you have purchased. Close your tab through Planight when you leave the bar."
          quote="Keep Tabs On Your Bar Tab"
        />
        <Paragraph
          text="Discover the most updated information about bars and restaurants around your college to help plan your night out. Use the explore page to find out cover charges, drink specials, events, menus, hours of operation, how busy locations are and
        more! Send this information to your friends through Planight group messages."
          quote="Know It All"
        />
        <Paragraph
          text="Create your own reviews for bars and restaurants in your college town to be liked or disliked by other college students. In your review, share photos or GIFs of your experience for friends and other college students to see. When visiting a
        new college town, explore these reviews to decide where to go out!"
          quote="Collegiate Critique"
        />
      </div>

      <div className="row">
        <ImageCard
          className="column"
          image={suryansh}
          title={"Developer"}
          content={"I am the main Developer at planight"}
        />
        <ImageCard
          className="column"
          image={Nath}
          title={"CEO"}
          content={"I am the CEO of Planight"}
        />
      </div>

      <div>
        <FormPlan />
      </div>

      <div className="buttons">
        <Bcutton color={"primary"} text={"Google Sign Up"} />
      </div>
    </div>
  );
}

export default App;
