import "./section.css";
import srcImg  from "../assets/ba.png";
//icons 
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useTranslation } from "react-i18next";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from "react";
export default function Section()
{
    // const srcImg = "./src/assets/ba.png";
      const container = useRef();
    const { t, i18n } = useTranslation();
      useGSAP(() => {
    gsap.from('.animate', { 
     opacity:0, rotate:360,repeat: -1,   y: 100 , duration: 2,ease:"back" ,stagger:0.5  });
  }, { scope: container });
    return (
<main className=" flex items-center gap-2 main" id="About">
    <section className="section-left  grow" id="home">
        <div>
 <h1 ref={container}>
  {t("Hi,I'm Ahmedou Mohamed")}<br/>
  <span className="animate inline-block">{t("letter_0")}</span>
  <span className="animate inline-block">{t("letter_1")}</span>
  <span className="animate inline-block">{t("letter_2")}</span>{i18n.language==="en"?" ":""}
  <span className="animate inline-block">{t("letter_3")}</span>{i18n.language==="ar"?" ":""}
  <span className="animate inline-block">{t("letter_4")}</span>
  <span className="animate inline-block">{t("letter_5")}</span>
  <span className="animate inline-block">{t("letter_6")}</span>
  <span className="animate inline-block">{t("letter_7")}</span>
  <span className="animate inline-block">{t("letter_8")}</span>
  <span className="animate inline-block">{t("letter_9")}</span>
  <span className="animate inline-block">{t("letter_10")}</span>
  <span className="animate inline-block">{t("letter_11")}</span>
  <span className="animate inline-block">{t("letter_12")}</span>
  <span className="animate inline-block">{t("letter_13")}</span>
</h1>
   <p>{t("I am a student who is still learning and improving my skills in web development")}</p>
   <p>{t("I enjoy trying new technologies and  building small projects  Even though I’m at")}</p>
   <p>{t("the beginning I’m motivated and  passionate about growing as a developer")}</p>
   </div>
   <div className="div-link">
<a href="https://www.linkedin.com/in/ahmedoumohamed-beedou-1b9535383" target="_blank"><LinkedInIcon className="icons-link"/></a>
<a href="https://github.com/ahmedoubeedou" target="_blank"><GitHubIcon className="icons-link"/></a>
<a href="https://codeforces.com/profile/Ahmedoumohamed24157" target="_blank"><CodeIcon className="icons-link"/></a>
<a href="https://www.tiktok.com/@ahmedoumohamedloulied" target="_blank"><WhatsAppIcon className="icons-link"/></a>
   </div>
    </section>
     <section className="section-right">
        <img src={srcImg} alt="profile" className="photo"/>
    </section>
</main>
    );
}