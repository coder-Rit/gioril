import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import {  useNavigate } from "react-router-dom";

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
  const redirectTo =  useNavigate()

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
          <span
            class="w-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            <BootstrapTooltip placement="top" title="+918961979319">
              <WhatsAppIcon></WhatsAppIcon> Connect With WhatsApp
            </BootstrapTooltip>
          </span>
        </a>

        <a href="tel:+918961979319">
          <span  class=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ">
            <BootstrapTooltip placement="top" title="+918961979319">
              <PhoneIcon></PhoneIcon> Call Us
            </BootstrapTooltip>
          </span>
        </a>

<a >

          <span onClick={()=>redirectTo('/contactus')} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 cursor-pointer	">
            {" "}
            <BootstrapTooltip placement="top" title="Apply">
              <InsertDriveFileIcon></InsertDriveFileIcon> Apply Here
            </BootstrapTooltip>
          </span>
</a>
      </div>


      <div className="m-10">
  <strong>Privacy Policy</strong>
  <p>
    operates the website "Jioril" at <a href="https://jioril.online">https://jioril.online</a>.
    I take your privacy seriously. To better protect your privacy,
    I provide this privacy policy notice explaining the way your personal information
    is collected and used.
  </p>
  <br />
  <p><strong>Collection of Routine Information</strong></p>
  <p>
    This website track basic information about its visitors.
    This information includes, but is not limited to, IP addresses, browser details,
    timestamps and referring pages. None of this information can personally identify specific
    visitors to this website. The information is tracked for routine
    administration and maintenance purposes.
  </p>
  <br />

  <p><strong>Cookies</strong></p>
  <p>
    Where necessary, this website uses cookies to store information about a visitor’s
    preferences and history to better serve the visitor and/or present the
    visitor with customized content.
  </p>
  <br />

  <p><strong>Advertisement and Other Third Parties</strong></p>
  <p>
    Advertising partners and other third parties may use cookies, scripts and/or web beacons to track
    visitor activities on this website to display advertisements
    and other useful information. Such tracking is done directly by the third parties through their
    servers and is subject to their privacy policies. This website has no access or
    control over these cookies, scripts and/or web beacons that may be used by third parties.
  </p>
  <div>
    <p>
      I have included links on this website for your use and reference.
      I am not responsible for the privacy policies on these websites. You
      should be aware
      that the privacy policies of these websites may differ from my own.
    </p>
    <p>
      Link to the privacy policy of third-party service providers used
      by the website
    </p>
    <ul>
      <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Analytics</a></li>
    </ul>
  </div>
  <br />

  <p><strong>Security</strong></p>
  <p>
    The security of your personal information is important to me, but remember that no
    method of transmission over the Internet, or method of electronic storage, is 100% secure.
    While I strive to use commercially acceptable means to protect your personal information,
    I cannot guarantee its absolute security.
  </p>
  <br />

  <p><strong>Changes To This Privacy Policy</strong></p>
  <p>
    This Privacy Policy is effective as of 2024-02-25 and will remain in effect except concerning
    any
    changes in its provisions in the future, which will be in effect immediately after being posted on this
    page.
    I reserve the right to update or change my Privacy Policy at any time and
    you
    should check this Privacy Policy periodically. If I make any material changes to this Privacy
    Policy,
    I will notify you either through the email address you have provided me or by
    placing a prominent notice on my website.
  </p>
  <br />

  <p><strong>Contact Information</strong></p>
  <p>
    For any questions or concerns regarding the privacy policy,
    please send me an email at <a href="mailto:s4034486@gmail.com">s4034486@gmail.com</a>.
  </p>
  <p></p>
  <br />
  <p>This privacy policy page was created by <a href="https://github.com/ArthurGareginyan/privacy-policy-template/" target="_blank" rel="noopener noreferrer">Arthur Gareginyan </a>and modified/generated by <a href="https://free-privacy-policy-generator.digitalmalayali.in/" target="_blank" rel="noopener noreferrer">Free &amp; Open Source Privacy Policy Generator</a>.</p>
</div>




    
    </div>
  );
};

export default Footer;
