import React, { useEffect, useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
const Calendars = () => {
  const [value, setValue] = useState(new Date());
  console.log(value)
  useEffect(() => {
    const elements = document.querySelectorAll('.react-calendar');
    elements.forEach(element => {
      element.className = '';
    });
  }, []);

  return (
    <div className='md:block hidden'>
      <Calendar onChange={setValue} value={value} />
    </div>
  )
}

export default Calendars