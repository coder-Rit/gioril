import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { useNavigate } from "react-router-dom";

const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));

const Footer = () => {
  const redirectTo = useNavigate();



  return (
    <div
      className=" items-center bg-slate-300 py-11 mt-5 "
      style={{ display: "flex", flexDirection: "column", gap: "30px" }}
    >
      <div>
        <img src="./images/jioril.png" style={{ width: "250px" }} alt="" />
      </div>

      <div className="footerItem mx-auto text-center text-sm p-1 ">
        <a href="https://wa.me/+918961979319" target="_blank">
          <span class="w-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            <BootstrapTooltip placement="top" title="+918961979319">
              <WhatsAppIcon></WhatsAppIcon> Connect With WhatsApp
            </BootstrapTooltip>
          </span>
        </a>

        <a href="tel:+918961979319">
          <span class=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ">
            <BootstrapTooltip placement="top" title="+918961979319">
              <PhoneIcon></PhoneIcon> Call Us
            </BootstrapTooltip>
          </span>
        </a>

        <a>
          <span
            onClick={() => redirectTo("/contactus")}
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 cursor-pointer	"
          >
            {" "}
            <BootstrapTooltip placement="top" title="Apply">
              <InsertDriveFileIcon></InsertDriveFileIcon> Apply Here
            </BootstrapTooltip>
          </span>
        </a>
      </div>

      <p >Read Our <a style={{color:"blue",cursor:"pointer"}} onClick={()=>redirectTo("/Policy")}>Privacy Policy</a></p>
    </div>
  );
};

export default Footer;
