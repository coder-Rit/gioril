import React, { useEffect } from 'react';

const GoogleTagManagerScript = () => {
  useEffect(() => {
    // Load Google Tag Manager script
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=AW-11345970855';
    script.async = true;
    document.head.appendChild(script);

    // Initialize Google Tag Manager
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'AW-11345970855');

    // Clean up function
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null; // or return any component you want to render
};

export default GoogleTagManagerScript;
