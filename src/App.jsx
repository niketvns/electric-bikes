import React from "react";
import Card from "./Card";
import Details from "./Details";
import Contact from "./Contact";

const App = () => {

    let year = new Date().getFullYear();
    console.log(year);

    return (
        <>
            <div className="main">
                <h1 className="heading">Electric Bike Collection</h1>
                <div className="cards">
                    {
                        Details.map((curElem, ind) => {
                            return (
                                <>
                                    <Card
                                        key={ind}
                                        title={curElem.title}
                                        img={curElem.img}
                                        price={curElem.price}
                                        detail={curElem.details}
                                    />
                                </>
                            )
                        })
                    }
                </div>
                <div className="contact_heading">
                    <h1 className="hcontact">Enquiry Form</h1>
                </div>
                <div className="contact">
                    <Contact />
                </div>
                <hr />
                <footer>
                    copyright ©️ {year}
                </footer>
            </div>
        </>
    )
}

export default App;