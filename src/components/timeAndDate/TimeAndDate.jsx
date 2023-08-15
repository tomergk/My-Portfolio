import React, { useState, useEffect } from 'react'
import { format } from 'date-fns';
import './TimeAndDate.css'

const TimeAndDate = () => {
    
    const [dateTime, setDateTime] = useState('');

    useEffect(() => {

      const timer = setInterval(() => {
        const now = new Date();
        const formattedDate = format(now, 'HH:mm:ss, dd/MM/yy');
        setDateTime(formattedDate);
      }, 1000); //1k ms = 1 sec
  
      return () => clearInterval(timer);
    }, []);
  
    return (
        <div className='TimeAndDate__container'>
            <h3>{dateTime}</h3>
        </div>
    );
  }

export default TimeAndDate