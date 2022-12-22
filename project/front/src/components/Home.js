import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SearchFlight from './SearchFlight';

import plane1 from '../assets/images/plane1.jpg';
import plane2 from '../assets/images/plane2.jpg';
import plane3 from '../assets/images/plane3.jpg';
import plane5 from '../assets/images/plane5.jpg';
import plane from '../assets/images/travel1.jpg';





const features = [
    {
        image : plane1,
        feature : "Memorable travel"
    },
    {
        image : plane2,
        feature : "Safe and reliable"
    },
    {
        image : plane3,
        feature : "Service at its best"
    },
    {
        image : plane5,
        feature : "Easy and Convinient"
    }
];

function Home(props) {
    const featureCard = features.map(f => {
        return (
            <div className="mb-3 mr-auto ml-auto col-lg-3 col-sm-5">
                <div className="card">
                    <img className="card-img-top" src={f.image} alt="feature1" />
                    <div className="card-body" style={styling.card}>
                        <h5 className="card-title">{f.feature}</h5>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div>
            <Header />

            <main className="mb-4 mt-5" style={styling.wrapper}>
                {/* <!-- Corousal section --> */}
                <SearchFlight />
                <section style={styling.section_bg}>
                   
                </section>
               

                
                

                <section className="container-fluid  pt-3 pb-5 section-bg">
                    
                    <div className="m-auto row">                       
                        {featureCard}
                    </div>
                </section>

            </main>

            <Footer />

        </div>
    );
}

let styling = {
    subheading : {
        textAlign: "center",
        color: "midnightblue",
        fontFamily: "fantasy",
        padding: 20
    },
    section_bg : {
        background : "linear-gradient(180deg, transparent, skyblue)"
    },
    card : {
        background : "midnightblue",
        color : "white"
    },
    wrapper : {
        
        background: `url(${plane})`
    }
}

export default Home;