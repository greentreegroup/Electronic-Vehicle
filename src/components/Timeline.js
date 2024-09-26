import React from 'react'
import "./Timeline.css"
import {Chrono} from "react-chrono";
import Footer from "./Footer"

//Stores all of the Chrono Timeline data here
const data = [
    {
        title: "Select cars",
        cardTitle: "Select cars",
        cardSubtitle: `Select cars from the 'cars' page on EVrabbit`,
        // url: {Maybe we can set an URL to the Cars selection page?}
        cardDetailedText: `Select from a wide variety of brands, models, and trims at EVrabbit. Our platform allows for buyers to
        easily buy cars in bulk.`
    },
    {
        title: "Estimate cost",
        cardTitle: "Estimate cost",
        cardSubtitle: `Estimate the total cost of your order`,
        cardDetailedText: `After selecting the cars and putting in a shipping location, the FOB (free on board), shipping, and
        insurance costs will be estimated. This way, you have a good idea of the total cost for your order.`
    },
    {
        title: "Registration",
        cardTitle: "Registration",
        cardSubtitle: `Ensure that your registration and customer clearance is complete`,
        cardDetailedText: `To make sure that the shipping process goes smoothly, the vehicles registration and customer clearance
        must be completed in your country. EVrabbit will provide all appropiate documents to help ensure that registration can be 
        completed.`
    },
    {
        title: "Down payment",
        cardTitle: "Down payment",
        cardSubtitle: `Pay 30% of the total cost as a down payment`,
        cardDetailedText: `When your total cost is calculated, EVrabbit will require about 30% of it as a down payment before we can order
        the cars. This payment will be used to order the cars from the manufacturers.`,
    },
    {
        title: "Sign contract",
        cardTitle: "Sign contract",
        cardSubtitle: `Sign a contract after the terms have been agreed to`,
        cardDetailedText: `After the payment has been agreed upon, a contract will be sent out. This contract contains important
        information, such as payment information andthe port the vehicles will be shipped to. After the contract is signed, EVrabbit 
        can begin ordering the cars from the manufacturers.`,
    },
    {
        title: "Manufacturing starts",
        cardTitle: "Manufacturing starts",
        cardSubtitle: `EVrabbit buys from the factories, and manufacturing begins`,
        cardDetailedText: `After the contract has been signed and down payment is received, EVrabbit will order the cars from the
        Chinese manufacturers. The manufacturers will then begin building the cars.`,
    },
    {
        title: "Manufacturing finishes",
        cardTitle: "Manufacturing finishes",
        cardSubtitle: `The cars finish being manufactured, and get prepared to leave the factory`,
        cardDetailedText: `When the cars are finished being built, EVrabbit will notify you that the manufacturing is complete. The vehicles
        will get ready to be delived to us.`,
    },
    {
        title: "Final payment",
        cardTitle: "Final payment",
        cardSubtitle: `100% of the final payment is required before the cars reach EVrabbit`,
        cardDetailedText: `Before the cars reach EVrabbit, 100% of the payment is required. This is done so we can pay for the rest of the
        order to the manufacturers.`,
    },
    {
        title: "Deliver cars to EVrabbit",
        cardTitle: "Deliver cars to EVrabbit",
        cardSubtitle: `The cars leave the factory and are delivered to EVrabbit`,
        cardDetailedText: `In about 1-8 weeks from the start of manufacturing, the cars will be delivered to us. Then, we can start getting them
        ready to ship to your nearest port.`,
    },
    {
        title: "License cars",
        cardTitle: "License cars",
        cardSubtitle: `The cars are licensed shortly before becomming legally used, to comply with Chinese shipping laws`,
        cardDetailedText: `The cars are licensed, insured, and registered in China. Shortly after, they are deregistered so that they become
        legally used. This is done to comply with Chinese shipping laws, as it is legal to ship secondhand vehicles. Although they will be 
        secondhand legally, EVrabbit promises that your vehicles will still be in pristine condition.`,
    },
    {
        title: "Ship cars",
        cardTitle: "Ship cars",
        cardSubtitle: `The cars are shipped to the nearest port to your location`,
        cardDetailedText: `The cars are then ready to ship. They will be transported to the nearest port in your country. If your
        country does not have a port, it will ship to the nearest port to your specified location. All details will be covered in the
        contract.`,
    },
    {
        title: "Offer parts",
        cardTitle: "Offer parts",
        cardSubtitle: `After shipping, support to obtain spare parts will be offered`,
        cardDetailedText: `After the cars have been shipped, it is our promise that we will support you if you need spare parts for your
        vehicles. Our support will last as long as needed.`
    },
]


function Timeline() {
  return (
    <div>
        <div className="timeline-header">
            <h1>Shipping Timeline</h1>
            <h2><span className="important">EVrabbit</span> wants to make your purchase of Chinese electric cars quick and easy. 
            Here is a timeline of what you can expect when buying cars.</h2>
        </div>
        <div className="timeline-body">
            <Chrono items={data} 
                    mode="VERTICAL"
                    theme={{
                        primary: "orange",
                        secondary: "orange"
                    }}>
            <div className="chrono-icons">
                <img src="https://img.icons8.com/ios-filled/100/000000/about.png" alt="icon"/>
                <img src="https://img.icons8.com/ios-filled/100/000000/about.png" alt="icon"/>
                <img src="https://img.icons8.com/ios-filled/100/000000/about.png" alt="icon"/>
                <img src="https://img.icons8.com/ios-filled/100/000000/about.png" alt="icon"/>
                <img src="https://img.icons8.com/ios-filled/100/000000/about.png" alt="icon"/>
                <img src="https://img.icons8.com/ios-filled/100/000000/about.png" alt="icon"/>
                <img src="https://img.icons8.com/ios-filled/100/000000/about.png" alt="icon"/>
                <img src="https://img.icons8.com/ios-filled/100/000000/about.png" alt="icon"/>
                <img src="https://img.icons8.com/ios-filled/100/000000/about.png" alt="icon"/>
                <img src="https://img.icons8.com/ios-filled/100/000000/about.png" alt="icon"/>
                <img src="https://img.icons8.com/ios-filled/100/000000/about.png" alt="icon"/>
                <img src="https://img.icons8.com/ios-filled/100/000000/about.png" alt="icon"/>
            </div>
            </Chrono>
        </div>
        <Footer />
    </div>
  )
}

export default Timeline;