"use client"

import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

export default function Cookiesbn () {

  const [cookies, setCookie] = useCookies(['localConsent']);
  const [showConsent, setShowConsent] = useState(true);

  useEffect(() => {
    setShowConsent(cookies.localConsent);
  }, []);

  const acceptCookie = () => {
    let date = new Date();
    date.setDate(date.getDate() + 14); 
    setCookie('localConsent', "true", { expires: date }); 
    setShowConsent(true);
  }

  if(showConsent) {
    return null;
  }

  return(
    <div id="cookie-bar">
      <div id="contentcookie">
        <p>
          We use cookies to ensure you get the best experience on our website. By
          using our site, you agree to our cookie policy.
        </p>
        <button  className="btn btn-secondary" onClick={acceptCookie} >
          <span className="text text-1">Accept</span>
          <span className="text text-2" aria-hidden="true">
          Accept
          </span>
        </button>
        <div className="clear" />
      </div>
    </div>
  )
}