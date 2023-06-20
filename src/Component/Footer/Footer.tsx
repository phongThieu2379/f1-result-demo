import React from "react";
import googlePlay from "../../Resource/picture/google-play-badge.png";
import appstore from "../../Resource/picture/download-on-the-app-store-apple.png";

export default function Footer() {
  return (
    <div>
      <div className="social bg-gray-600 ">
        <div className="container mx-auto text-white">
          <div className="flex justify-between items-center py-10">
            <div className="flex items-center">
              <p className="f1-app-download__heading flex-wrap w-32">
                Download the Official F1 App
              </p>
              <ul className="flex items-center">
                <li>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.softpauer.f1timingapp2014.basic&hl=en_GB"
                    target="_blank"
                    data-analytics-event="click"
                    data-tracking='{"navigationElement":"Footer"}'
                  >
                    <img
                      style={{ width: 135 }}
                      className="lazy loaded"
                      alt="Google Play"
                      src={googlePlay}
                      data-was-processed="true"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://itunes.apple.com/gb/app/official-f1-app/id835022598?mt=8"
                    target="_blank"
                    data-analytics-event="click"
                    data-tracking='{"navigationElement":"Footer"}'
                  >
                    <img
                      style={{ width: 135 }}
                      data-src="/etc/designs/fom-website/images/svg/download-on-the-app-store-apple.svg"
                      className="lazy loaded"
                      alt="App Store"
                      src={appstore}
                      data-was-processed="true"
                    />
                  </a>
                </li>
              </ul>
            </div>
            <hr className="f1-divider d-md-none" />
            <div className="col-md-5">
              <ul className="flex flex-row">
                <li >
                  <a className="mx-1 w-9 h-9 flex justify-center items-center rounded hover:bg-black ease-linear transition-all border-black border" href="https://www.facebook.com/Formula1" target="_blank">
                    <i className="  fab fa-facebook-f " />
                  </a>
                </li>
                <li >
                  <a className="mx-1 w-9 h-9 flex justify-center items-center rounded hover:bg-black ease-linear transition-all border-black border" href="https://twitter.com/f1" target="_blank">
                    <i className="  fab fa-twitter" />
                  </a>
                </li>
                <li >
                  <a className="mx-1 w-9 h-9 flex justify-center items-center rounded hover:bg-black ease-linear transition-all border-black border" href="https://www.instagram.com/f1/" target="_blank">
                    <i className="  fab fa-instagram"  />
                  </a>
                </li>
                <li >
                  <a className="mx-1 w-9 h-9 flex justify-center items-center rounded hover:bg-black ease-linear transition-all border-black border" href="https://www.youtube.com/F1" target="_blank">
                    <i className="  fab fa-youtube" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
