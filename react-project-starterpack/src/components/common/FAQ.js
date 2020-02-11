import React from 'react'
import Collapsible from 'react-collapsible'


class FAQ extends React.Component {

  render() {
    return (
      <>
      <section className="FAQPage">
        <div className="container">
          <br/>
          <h1 className=" title is-3">FREQUENTLY ASKED QUESTIONS</h1>
          <hr/>
          <hr/>
          <Collapsible trigger = 'The Game  +' className="dropDown">
            <p className="FAQtxt">Geocaching is a real-world, outdoor treasure hunting game using GPS-enabled devices. Participants navigate to a specific set of GPS coordinates and then attempt to find the geocache *container* hidden at that location.</p>
          </Collapsible>
          <hr/>
          <Collapsible trigger = 'How is the game played?  +' className="dropDown">
            <ul className="FAQtxt">
              <li>At its simplest level, geocaching requires these 9 steps:</li>
              <li>1.Register for a free Basic Membership.</li>
              <li>2. Visit the *Hide and Seek a Cache* page.</li>
              <li>3.Enter your postal code and click *search.*</li>
              <li>4.Choose any geocache from the list and click on its name.</li>
              <li>5.Enter the coordinates of the geocache into your GPS Device.</li>
              <li>6.Use your GPS device to assist you in finding the hidden geocache.</li>
              <li>7.Sign the logbook and return the geocache to its original location.</li>
              <li>8.Share your geocaching stories and photos online.</li>
              <li>9.There are many other levels to the game. Keep reading the guide to learn more!</li>
            </ul>
          </Collapsible>
          <hr/>
          <Collapsible trigger = 'What are the rules of geocaching?  +'className="dropDown">
            <ul className="FAQtxt"> 
              <li>1.If you take something from the geocache , leave something of equal or greater value.</li>
              <li>2.Write about your find in the cache logbook.</li>
            </ul>
          </Collapsible>
          <hr/>
          <Collapsible trigger = 'What do I need to go geocaching?  +'className="dropDown">
            <p className="FAQtxt">The only necessities are a GPS device or a GPS-enabled mobile phone so that you can navigate to the cache.</p>
          </Collapsible>
          <hr/>
          <Collapsible trigger = 'Where are geocaches located?  +'className="dropDown">
            <p className="FAQtxt">Geocaches can be found all over the world. It is common for geocachers to hide caches in locations that are important to them, reflecting a special interest or skill of the cache owner. These locations can be quite diverse. They may be at your local park, at the end of a long hike, underwater or on the side of a city street.</p>
          </Collapsible>
        </div>
      </section>
      </>
    )
  }

}

export default FAQ