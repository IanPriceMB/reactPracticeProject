import React from "react";
import Teaser2 from '../components/Teaser2';

const styles = {
    width: 100,
    height: `auto`,
    position: `absolute`,
    top: `50%`,
    left: `50%`
}

const Landing = () => (
    <div>
        <Teaser2 top={`100px`} left={`75px`} height={`200px`} />
        <Teaser2 top={`500px`} left={`75px`} height={`200px`} />
        <Teaser2 top={`100px`} left={`1150px`} height={`200px`} />
        <Teaser2 top={`500px`} left={`1150px`} height={`200px`} />
        <img src={`https://www.kiplinger.com/kipimages/pages/18048.jpg`} alt={`logo`} style={styles}/>
    </div>
)

export default Landing;
