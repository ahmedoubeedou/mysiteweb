import "./language.css"
import js from "../language/js.svg";
import css3 from "../language/css3.svg";
import html from "../language/html.svg";
import reactjs from "../language/react.svg";
import tilwand from "../language/tailwindcss.svg";
import { useTranslation } from "react-i18next";

export default function Language()
{
  const { t, i18n } = useTranslation();
    return(
       <div id="Skils" className=" language flex flex-col gap-6">
        <h2 className="text-3xl skils">{t("My Skils")}</h2>
        <div className=" flex justify-around">
          <div><img src={html} alt="not found"/></div>
          <div ><img src={css3} alt="not found"/></div>
                    <div > <img src={js} alt="not found"/></div>
        </div>
        <div className=" flex justify-around">
          <div ><img src={tilwand} alt="not found"/></div>
          <div > <img src={reactjs} alt="not found"/></div>
          <div ><img src={html} alt="not found"/></div>
        </div>
        <div className="flex justify-around">
          <div><img src={css3} alt="not found"/></div>
          <div > <img src={tilwand} alt="not found"/></div>
          <div ><img src={reactjs} alt="not found"/></div>
        </div>
        
       </div>
    );
}