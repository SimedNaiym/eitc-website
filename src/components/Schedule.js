// Schedule.js
import React, { useState } from 'react';
import '../assets/styles/schedule.css'; // Import CSS styles

function Schedule() {
  // Define state to track which day is selected
  const [selectedDay, setSelectedDay] = useState(1); // Default to the first day

  // Define the list of days and their activities
  const days = [
    {
      day: 1,
      activities: [
        { time: '10:00 AM', activity: 'Morning Yoga' },
        { time: '12:00 PM', activity: 'Lunch Break' },
        { time: '2:00 PM', activity: 'Workshop: React Basics' }
      ]
    },
    {
      day: 2,
      activities: [
        { time: '9:00 AM', activity: 'Breakfast' },
        { time: '11:00 AM', activity: 'Panel Discussion' },
        { time: '1:00 PM', activity: 'Lunch Break' }
      ]
    },
    {
      day: 3,
      activities: [
        { time: '10:00 AM', activity: 'Keynote Speech' },
        { time: '1:00 PM', activity: 'Networking Session' }
      ]
    }
  ];

  // Function to handle day selection
  const handleDaySelect = (day) => {
    setSelectedDay(day);
  };

  return (
    <div className="schedule">
        <div>
            <h1 className='scheduleTitle'>SCHEDULE</h1>
        </div>
      {/* Buttons to select days */}
      <div className="day-selector">
        {days.map((dayObj) => (
          <button
            key={dayObj.day}
            className={selectedDay === dayObj.day ? 'active' : ''}
            onClick={() => handleDaySelect(dayObj.day)}
          >
            Day {dayObj.day}
          </button>
        ))}
      </div>
      {/* Display activities for the selected day */}
      <div className="activities">
        <h2>Day {selectedDay} Activities:</h2>
        <ul>
          {days[selectedDay - 1].activities.map((activity, index) => (
            <li key={index}>
              <span className="time">{activity.time}</span> - {activity.activity}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Schedule;