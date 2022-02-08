import React from "react";
import { withTranslation } from "react-i18next";

import "./main.styles.scss";
import profileImage from "../../assets/profile.jpeg";

const Main = ({ t, i18n }) => {
  return (
    <div>
      <div className="main">
        <div className="main_image">
          <img src={profileImage} className="profile_image" />
        </div>
        <div className="main_content">
          <span>{t("main.name")}</span>
          <br />
          <span>{t("main.jobtitle")}</span>
          <br />
          <span>{t("main.city")}</span>
          <br />
          <span className="gray1">{t("main.gray1")}</span>
          <br />
          <span className="gray2">{t("main.gray2")}</span>
          <br />
          <span className="gray3">{t("main.gray3")}</span>

          <div className="lang_btns">
            <button
              className="lang_btn"
              onMouseEnter={() => {
                i18n.changeLanguage("en-US");
              }}
            >
              EN
            </button>
            <button
              className="lang_btn"
              onMouseEnter={() => {
                i18n.changeLanguage("fr-FR");
              }}
            >
              FR
            </button>
            <button
              className="lang_btn"
              onMouseEnter={() => {
                i18n.changeLanguage("ko-KR");
              }}
            >
              KR
            </button>
            {/* <button
              className="lang_btn"
              onMouseEnter={() => {
                i18n.changeLanguage("jp-JP");
              }}
            >
              JP
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(Main);
