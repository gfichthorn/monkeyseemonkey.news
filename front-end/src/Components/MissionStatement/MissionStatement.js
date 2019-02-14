import React from 'react';
import Logo from '../Logo/Logo.png'
console.log(Logo);
const MissionStatement = () => {
    return (
        
        <div class = "container mx-auto">
            <center><img src={Logo} alt="Temp Logo"></img></center>
           <h1><center>Our Mission Statement</center></h1>
            <p>Here at Monkeyseemonkey.news, we believe that everybody should have consistent access to reliable
                and trustworthy news sources. As part of our software model, we deploy Artificial Intelligence to crawl 
                the web and filter out any bias that we so commonly see in our modern news sources. We have no prejudice,
                and our goal is to provide our users with 100% accuracy in regards to their news searches.
            </p>
        </div>
    );
}

export default MissionStatement;