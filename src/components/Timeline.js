import React from 'react'
import "./Timeline.css"
import {Chrono} from "react-chrono";
import Footer from "./Footer"

function Timeline() {
  return (
    <div>
        <div className="timeline-header">
            <h1>Shipping Timeline</h1>
            <h2>EVrabbit wants to make your purchase of Chinese electric cars quick and easy. Here is a timeline of what you can expect when buying cars:</h2>
        </div>
        <div className="timeline-body">
            <Chrono
                items={[
                    {
                        title: "Select cars",
                        cardTitle: "Select cars",
                        cardSubtitle: `Select cars from the 'cars' page on EVrabbit`,
                        // url: {Maybe we can set an URL to the Cars selection page?}
                        cardDetailedText: `Select from a wide variety of brands, models, and trims at EVrabbit. Our user friendly deisgn
                        allows for buyers to easily buy in bulk.`
                    },
                    {
                        title: "Estimate cost",
                        cardTitle: "Estimate cost",
                        cardSubtitle: `Estimate the total cost of your order`,
                        cardDetailedText: `After selecting the cars and putting in a shipping location, the FOB (free on board), shipping, and
                        insurance costs will be estimated. This way, you have a good idea of how much your order will come to.`
                    },
                    {
                        title: "Registration",
                        cardTitle: "Registration",
                        cardSubtitle: `Ensure that your registration and customer clearance is complete`,
                        cardDetailedText: `To make sure that the shipping process goes smoothly, the vehicles registration and customer clearance
                        must be completed in your country. EVrabbit will provide all appropiate documents to help ensure that registration is
                        complete.`
                    },
                    {
                        title: "Down payment",
                        cardTitle: "Down payment",
                        cardSubtitle: `Pay 30% of the total cost as a down payment`,
                        cardDetailedText: ``,
                    },
                    {
                        title: "Sign contract",
                        cardTitle: "Sign contract",
                        cardSubtitle: `Sign a contract after the terms have been agreed to`,
                        cardDetailedText: ``,
                    },
                    {
                        title: "Manufacturing starts",
                        cardTitle: "Manufacturing starts",
                        cardSubtitle: `EVrabbit contacts the factories, and manufacturing begins`,
                        cardDetailedText: ``,
                    },
                    {
                        title: "Manufacturing finishes",
                        cardTitle: "Manufacturing finishes",
                        cardSubtitle: `The cars have been built`,
                        cardDetailedText: ``,
                    },
                    {
                        title: "Final payment",
                        cardTitle: "Final payment",
                        cardSubtitle: `100% of the final payment is required before the cars reach EVrabbit`,
                        cardDetailedText: ``,
                    },
                    {
                        title: "Deliver cars to EVrabbit",
                        cardTitle: "Deliver cars to EVrabbit",
                        cardSubtitle: `The cars leave the factory and are delivered to EVrabbit`,
                        cardDetailedText: ``,
                    },
                    {
                        title: "License cars",
                        cardTitle: "License cars",
                        cardSubtitle: `The cars are licensed and are registered and deregistered, to comply with Chinese shipping laws`,
                        cardDetailedText: ``,
                    },
                    {
                        title: "Ship cars",
                        cardTitle: "Ship cars",
                        cardSubtitle: `The cars are shipped to the nearest port to the location`,
                        cardDetailedText: ``,
                    },
                    {
                        title: "Offer parts",
                        cardTitle: "Offer parts",
                        cardSubtitle: `After shipping, any spare parts for the cars will be provided`,
                        cardDetailedText: ``,
                    },
                ]}
                mode="VERTICAL"
            />
        </div>
        <Footer />
    </div>
  )
}

export default Timeline;