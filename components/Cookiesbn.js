"use client"

import React from 'react'
import { hasCookie, setCookie } from 'cookies-next'

export default function Cookiesbn (){

const [showConsent, setShowConsent] = React.useState(true);
React.useEffect(() =>
{
    setShowConsent( hasCookie("localConsent"));
},[]);

const acceptCookie = () =>
{
    setShowConsent(true);
    setCookie('localConsent', "true",  365 ) 
}
if(showConsent)
{
    return null;
}
return(



<div id="cookie-bar">
  <div id="contentcookie">
    <p>
      We use cookies to ensure you get the best experience on our website. By
      using our site, you agree to our cookie policy.
    </p>
    <button  className="btn btn-secondary" onClick={()=> acceptCookie()} >
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