import React, { useEffect } from 'react';

const GoogleTagManagerScript = () => {
  useEffect(() => {
    // Initialize Google Tag Manager
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'AW-11345970855');
  }, []);

  return (
    <>
      <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11345970855"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag() { dataLayer.push(arguments); }
          gtag('js', new Date());
          gtag('config', 'AW-11345970855');
        `}
      </script>
    </>
  );
};

export default GoogleTagManagerScript;
