import "./headr.css";

// Hooks
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
// Icons
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseIcon from "@mui/icons-material/Close";
export default function Headr() {
  const [pobabeVisible, setPobabeVisible] = useState(false);
  const [arrow, setArrow] = useState(false);
const [langue , setLangue ] = useState("en")
  const { t, i18n } = useTranslation("");

  const changeArrow = () => {
    setArrow((e) => !e);
  };
  const changeLanguage = (code) => {
   
    if(code==="ar")
    {
       setLangue("ar")
        document.documentElement.dir = "rtl";
    }else{
       setLangue("en")
       document.documentElement.dir = "ltr";
    }
    i18n.changeLanguage(code);

    setArrow(false);
  };
useEffect(()=>{
   i18n.changeLanguage("en");
},[])
  return (
    <header className="flex justify-between items-center withcss">
      <div />

      <nav className="nav fixe">
        <ul className="flex items-center bg-gray-800 gap-2 ulheadr">
          <li><a href="#">{t("Home")}</a></li>
          <li><a href="#About">{t("About")}</a></li>
          <li><a href="#Skils">{t("Skills")}</a></li>
          <li><a href="#Project">{t("Projects")}</a></li>
          <li><a href="#Contact">{t("Contact")}</a></li>
        </ul>
      </nav>

      <div />

      <div
       className={` ${langue==="ar"?"left-ar":"div-icon-headr"}`}
        onClick={() => setPobabeVisible(true)}
      >
        <MenuOutlinedIcon sx={{ fontSize: 40 }}  />
      </div>

      {pobabeVisible && (
        <div className="pobabe">
          <ul className="flex items-center bg-gray-800 gap-2 ulheadr">
            <li>
              <button onClick={() => setPobabeVisible(false)}>
                <CloseIcon className="icon-close" />
              </button>
            </li>

            <li onClick={() => setPobabeVisible(false)}>
              <a href="#">{t("Home")}</a>
            </li>

            <li onClick={() => setPobabeVisible(false)}>
              <a href="#About">{t("About")}</a>
            </li>

            <li onClick={() => setPobabeVisible(false)}>
              <a href="#Skils">{t("Skills")}</a>
            </li>

            <li onClick={() => setPobabeVisible(false)}>
              <a href="#Project">{t("Projects")}</a>
            </li>

            <li onClick={() => setPobabeVisible(false)}>
              <a href="#Contact">{t("Contact")}</a>
            </li>
          </ul>
        </div>
      )}

      <div className={`bg-[#123] p-2  flex items-center justify-center flex-col gap-2  ${langue==="en"?"test-langue":"right-en"}`}>
        <div>
          {t("langue")}
          {" "}
          {arrow ? (
            <ArrowUpwardIcon onClick={changeArrow} />
          ) : (
            <ArrowDownwardIcon onClick={changeArrow} />
          )}
        </div>

        <div className={`flex flex-col gap-1 language-class  ${arrow ? "" : "hidden"}`}>
          <button onClick={() => changeLanguage("ar")}>
            {t("Arabic")}
          </button>
          <button onClick={() => changeLanguage("en")}>
            {t("English")}
          </button>
        </div>
      </div>
    </header>
  );
}