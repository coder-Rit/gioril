import React, { useEffect } from 'react';

const GoogleTagManager = () => {
  useEffect(() => {
    const initializeGoogleTagManager = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag(){window.dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-11345970855');
    };

    if (!window.dataLayer) {
      initializeGoogleTagManager();
    } else {
      // If dataLayer is already defined, just configure Google Tag Manager
      window.dataLayer.push({ event: 'gtm.js', 'gtm.start': new Date().getTime() });
    }

    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=AW-11345970855';
    script.async = true;

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export default GoogleTagManager;
