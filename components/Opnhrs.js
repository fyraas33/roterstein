'use client'

import "../assest/css/hero.css"
import React, { Component } from 'react';
class Opnhrs extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        today: '',
        hour: 0,
        minutes: 0,
        suffix: 'Uhr',
        status: 'geschlossen',
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
  
      const suffix = hour >= 24 ? 'Uhr' : 'Uhr';
  
      let status = 'Geschlossen';
  
   
  
     
      const openingHours = this.props.openingHours;
      const todayOpeningHours = openingHours[this.getWeekday(dayOfWeek)];

   
  
      if (todayOpeningHours && todayOpeningHours !== 'geschlossen') {
        const [openHour, closeHour] = todayOpeningHours
          .split('-')
          .map((time) => parseInt(time));
    
       
        if (hour >= openHour && hour < closeHour) {
          status = 'offen';
        }
      }
  
  
      this.setState({
        today: this.getWeekday(dayOfWeek),
        hour: hour % 24 || 24,
        minutes: minutes < 10 ? '0' + minutes : minutes,
        suffix: suffix,
        status: status,
      });
    };
  
    getWeekday = (dayOfWeek) => {
      const weekdays = [
        'Sonntag',
        'Montag',
        'Dienstag',
        'Mittwoch',
        'Donnerstag',
        'Freitag',
        'Samstag',
      ];
      return weekdays[dayOfWeek];
    };
  
    render() {
      const { today, hour, minutes, suffix, status } = this.state;
  
      return (
        <div>
        <p className="tmpar">{`Es ist ${today} ${hour}:${minutes} ${suffix} - Wir haben ${status}!`}</p>  
        </div>
      );
    }
  }
  
  export default Opnhrs;