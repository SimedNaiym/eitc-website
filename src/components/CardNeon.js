import React from 'react';
import '../assets/styles/cardNeon.css'; // Import CSS styles

function CardNeon(props) {
  return (
    <div class="card">
    <div class="content">
        <div class="back">
        <div class="back-content">
            <strong className='cardTitle'>{props.title}</strong>
        </div>
        </div>
        </div>
    </div>
  );
}

export default CardNeon;
