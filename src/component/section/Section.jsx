import "./section.css";
//icons 
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function Section()
{
    const srcImg = "/src/assets/ba.png";
    return (
<main className=" flex items-center gap-2 main" id="About">
    <section className="section-left  grow" id="home">
        <div>
   <h1>Hi,I'm Ahmedou Mohamed<br/><span></span></h1>
   <p>I am a student who is still learning and improving my skills in web development</p>
   <p>I enjoy trying new technologies and  building small projects  Even though I’m at</p>
   <p>the beginning I’m motivated and  passionate about growing as a developer</p>
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