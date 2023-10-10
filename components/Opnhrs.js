'use client'

import Image from "next/image";
import React, { Component } from 'react';
class Opnhrs extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        today: '',
        hour: 0,
        minutes: 0,
        suffix: 'AM',
        status: 'closed',
      };
    }
  
    componentDidMount() {
      this.updateTime();
      setInterval(this.updateTime, 1000);
    }
  
    updateTime = () => {
      const now = new Date();
      const dayOfWeek = now.getDay();
      const hour = now.getHours();
      const minutes = now.getMinutes();
  
      const suffix = hour >= 12 ? 'PM' : 'AM';
  
      let status = 'closed';
  
   
  
     
      const openingHours = this.props.openingHours;
      const todayOpeningHours = openingHours[this.getWeekday(dayOfWeek)];

   
  
      if (todayOpeningHours && todayOpeningHours !== 'Closed') {
        const [openHour, closeHour] = todayOpeningHours
          .split('-')
          .map((time) => parseInt(time));
    
       
        if (hour >= openHour && hour < closeHour) {
          status = 'open';
        }
      }
  
  
      this.setState({
        today: this.getWeekday(dayOfWeek),
        hour: hour % 12 || 12,
        minutes: minutes < 10 ? '0' + minutes : minutes,
        suffix: suffix,
        status: status,
      });
    };
  
    getWeekday = (dayOfWeek) => {
      const weekdays = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ];
      return weekdays[dayOfWeek];
    };
  
    render() {
      const { today, hour, minutes, suffix, status } = this.state;
  
      return (
        <div>
        <p>{`It's ${today} ${hour}:${minutes} ${suffix} - we're ${status}!`}</p>  
        </div>
      );
    }
  }
  
  export default Opnhrs;