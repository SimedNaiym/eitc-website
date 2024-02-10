import React from 'react';
import '../assets/styles/AboutEvent.css'; // Import CSS styles
import CardNeon from './CardNeon';

function AboutEvent() {
  return (
    <div class="event">
        <h1 className='AboutEventTitle'>About the Event</h1>
        <div className='CardGroup'>
            <CardNeon title="5 Speakers"/>
            <CardNeon title="32 Hours"/>
            <CardNeon title="3< prix"/>
        </div>
    </div>

  );
}

export default AboutEvent;
