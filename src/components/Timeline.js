import React from 'react'
import "./Timeline.css"
import {Chrono} from "react-chrono";
import Footer from "./Footer"

//Stores all of the Chrono Timeline data here
const timeline_data = [
    {
        title: "1.",
        cardTitle: "Select cars",
        cardSubtitle: `Select cars from the car selection page on EVrabbit.`,
        // url: {Maybe we can set an URL to the cars selection page, after it is implemented?}
        cardDetailedText: `Select from a wide variety of brands, models, and trims at EVrabbit. Our platform allows for buyers to
        easily purchase cars in bulk, making it cost-effective for their needs.`
    },
    {
        title: "2.",
        cardTitle: "Estimate cost",
        cardSubtitle: `Estimate the total cost of your order.`,
        cardDetailedText: `After selecting the cars and putting in a shipping location, the FOB (free on board), shipping, and
        insurance costs will be estimated using our calculation tools. This way, you have a good idea of the total cost for your order.`
    },
    {
        title: "3.",
        cardTitle: "Registration",
        cardSubtitle: `Ensure that your registration and customs clearance is complete.`,
        cardDetailedText: `To make sure that the shipping process goes smoothly, the vehicles registration and customs clearance
        must be completed in your country. EVrabbit will provide all appropriate documents to help ensure that registration can be completed.`
    },
    {
        title: "4.",
        cardTitle: "Down payment",
        cardSubtitle: `Pay around 30% of the total cost as a down payment.`,
        cardDetailedText: `When your total cost is calculated, EVrabbit will require about 30% of it as a down payment before we can order
        the cars.`,
    },
    {
        title: "5.",
        cardTitle: "Sign contract",
        cardSubtitle: `Sign a contract after the terms have been agreed to.`,
        cardDetailedText: `After the payment has been agreed upon, a contract will be sent out. This contract contains important
        information, such as payment details and the destination port.`,
    },
    {
        title: "6.",
        cardTitle: "Manufacturing starts",
        cardSubtitle: `EVrabbit buys from the factories, and manufacturing begins.`,
        cardDetailedText: `After the contract has been signed and down payment is received, EVrabbit will order the cars from the
        Chinese manufacturers. The manufacturers will then begin building the cars.`,
    },
    {
        title: "7.",
        cardTitle: "Manufacturing finishes",
        cardSubtitle: `The cars finish being manufactured and leave the factory.`,
        cardDetailedText: `When the cars are finished being built, EVrabbit will notify you that the manufacturing is complete. The vehicles
        will then start to be delivered to us.`,
    },
    {
        title: "8.",
        cardTitle: "Final payment",
        cardSubtitle: `100% of the final payment is required before the cars reach EVrabbit.`,
        cardDetailedText: `Before the cars reach us, 100% of the total payment specified in the contract is required. This is done so we can 
        pay for the rest of the order to the manufacturers.`,
    },
    {
        title: "9.",
        cardTitle: "Deliver cars to EVrabbit",
        cardSubtitle: `The cars leave the factory and are delivered to EVrabbit.`,
        cardDetailedText: `In about 1-8 weeks from the start of manufacturing, the cars will arrive to us. Then, we can start getting them
        ready to ship.`,
    },
    {
        title: "10.",
        cardTitle: "License cars",
        cardSubtitle: `The cars are licensed shortly before becoming legally secondhand in order to comply with Chinese shipping laws.`,
        cardDetailedText: `The cars are licensed, insured, and registered in China. Shortly after, they are deregistered so that they become
        legally used. This is done to comply with Chinese shipping laws. Although they will 
        legally be secondhand, EVrabbit promises that your vehicles will still be in pristine condition.`,
    },
    {
        title: "11.",
        cardTitle: "Ship cars",
        cardSubtitle: `The cars are shipped to the nearest port to your location.`,
        cardDetailedText: `The cars are then ready to ship. They will be transported to the nearest port in your country. If your
        country does not have a port; it will ship to the nearest port to your specified location. All details will be covered in the
        contract.`,
    },
    {
        title: "12.",
        cardTitle: "Offer parts",
        cardSubtitle: `After shipping, support to obtain spare parts will be offered.`,
        cardDetailedText: `After the cars have been shipped, it is our promise that we will support you if you need spare parts for your
        vehicles. Our support will last as long as needed.`
    },
]


function Timeline() {
  return (
    <div className="timeline">
        <div className="timeline-header">
            <h1>Shipping</h1>
            <h2>At <span className="important">EVrabbit</span>, we want to make your purchase of Chinese electric cars quick and easy.
            Here is an interactive shipping timeline of what you can expect when buying cars.</h2>
            <br></br>
            <h2>Use the buttons below to navigate and change settings in the timeline.</h2>
        </div>
        <div className="timeline-body">

            {/* NOTE: If you change anything here, you will have to refresh the page to see it on the timeline */}
            <Chrono 
                className="timeline-functional"
                items={timeline_data} //Set items to the array above
                hideControls={true} //Hide the controls
                timelinePointShape="square" //Sets the timeline point to a square
                readMore={true} //Smaller textboxes will have "read more" button (needs to be refreshed first to work)
                cardHeight={80} //Max height is 80. 
                mode="VERTICAL" //Set mode to vertical
                enableLayoutSwitch={false} //Gets rid of layout switch (not needed)
                enableQuickJump={false} //Gets rid of quick jump button (does not work properly)
                highlightCardsOnHover={true} //Highlights the cards on hover
                disableNavOnKey //Disables keyboard movement of timeline

                //Color scheme
                theme={{
                    primary: "#f57b18",
                    secondary: "#17292e",
                    titleColor: "black",
                    titleColorActive: "white",
                    cardTitleColor: "black",
                }}

                //Font sizing scheme
                fontSizes={{
                    cardSubtitle: '0.95rem',
                    cardText: '0.8rem',
                    cardTitle: '1.5rem',
                    title: '1.5rem',
                }}

                //Button Alt Text
                buttonTexts={{
                    first: 'Jump to First Step',
                    last: 'Jump to Last Step',
                    next: 'Next Step',
                    previous: 'Previous Step',
                }}

            > 
            </Chrono>
        </div>
        <Footer />
    </div>
  )
}

export default Timeline;