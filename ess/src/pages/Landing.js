import React from "react";
import Teaser2 from '../components/Teaser2';
import SexyButton from "../components/SexyButton";
import Sign from '../components/Sign';

const styles = {
    width: 100,
    height: `auto`,
    position: `absolute`,
    top: `50%`,
    left: `50%`
}

//still need to add a tag line section
const Landing = () => (
    <div>
        <Sign text={`Sign In`} link={`signin`} />
        <Sign text={`Sign Up`} link={`choice`}/>
        <Teaser2 top={`100px`} left={`75px`} height={`200px`} />
        <Teaser2 top={`500px`} left={`75px`} height={`200px`} />
        <Teaser2 top={`100px`} left={`1150px`} height={`200px`} />
        <Teaser2 top={`500px`} left={`1150px`} height={`200px`} />
        <img src={`https://www.kiplinger.com/kipimages/pages/18048.jpg`} alt={`logo`} style={styles}/>
        <SexyButton top={`400px`} left={`600px`} text={`Get Started`} link={`/choice`}/>
    </div>
)

export default Landing;
