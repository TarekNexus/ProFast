import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import ClientLogoMarquee from '../ClientLogoMarquee/ClientLogoMarquee';
import Benefits from '../Benefits/Benefits';
import BeMerchant from '../BeMerchant/BeMerchant';
import HowItWorks from '../HowItWorks/HowItWorks';


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <HowItWorks></HowItWorks>
           <Services></Services>
           <ClientLogoMarquee></ClientLogoMarquee>
           <Benefits></Benefits>
           <BeMerchant></BeMerchant>
        </div>
    );
};

export default Home;