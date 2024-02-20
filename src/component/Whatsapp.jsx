import React from 'react';
import img from '../assets/whatsapp.png'
import PhoneIcon from "@mui/icons-material/Phone";

const WhatsAppIcon = () => {
  return (<>
  

    <a href="https://wa.me/8961979319" target="_blank" rel="noopener noreferrer" className="fixed bottom-5 right-5 z-50">
      <img src={img} alt="WhatsApp Icon" className="w-12 h-12" />
    </a>
    <a href="tel:+8961979319"  rel="noopener noreferrer" className="fixed bottom-5 left-5 z-50 rounded-full bg-white p-2">
    <PhoneIcon></PhoneIcon>

    </a>
  </>
  );
};

export default WhatsAppIcon;
