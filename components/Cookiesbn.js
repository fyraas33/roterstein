"use client"

import React from 'react'
import { hasCookie, setCookie } from 'cookies-next'
import Link from 'next/link'
export default function Cookiesbn (){

const [showConsent, setShowConsent] = React.useState(true);
React.useEffect(() =>
{
    setShowConsent( hasCookie("localConsent"));
},[]);

const acceptCookie = () =>
{
    setShowConsent(true);
    setCookie('localConsent', "true", {}) 
}
if(showConsent)
{
    return null;
}
return(



    <div className="cookie-consent-banner">
  <div className="cookie-consent-banner__inner">
    <div className="cookie-consent-banner__copy">
      <div className="cookie-consent-banner__header">
        THIS WEBSITE USES COOKIES
      </div>
      <div className="cookie-consent-banner__description">
      We use cookies to ensure you get the best experience on our website. By using our site, you agree to our cookie policy.
      </div>
    </div>
    <div className="cookie-consent-banner__actions">
    
    <button  className="btn btn-secondary" onClick={()=> acceptCookie()} >
        <span className="text text-1">Accept</span>
        <span className="text text-2" aria-hidden="true">
        Accept
        </span>
      </button>
     
  
    </div>
  </div>
</div>


)
}