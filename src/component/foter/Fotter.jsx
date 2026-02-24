import "./fotter.css"
//icons
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import OutgoingMailIcon from '@mui/icons-material/OutgoingMail';
export default function Fotter()
{
    return(
        <footer className="flex footer-css items-center justify-between " id="Contact">
            <div className="div-childe">
                <h1 >Contact ME</h1>
<div>
    
<p>
    I'm a passionate web developer open to new opportunities and<br/> 
    exciting projects. Don’t hesitate to reach out!

</p>
<div>
      <div className="div-link">
<a href="https://www.linkedin.com/in/ahmedoumohamed-beedou-1b9535383" target="_blank"><LinkedInIcon className="icons-link"/></a>
<a href="https://github.com/ahmedoubeedou" target="_blank"><GitHubIcon className="icons-link"/></a>
<a href="https://codeforces.com/profile/Ahmedoumohamed24157" target="_blank"><CodeIcon className="icons-link"/></a>
<a href="https://www.tiktok.com/@ahmedoumohamedloulied" target="_blank"><WhatsAppIcon className="icons-link"/></a>
   </div>
    <div className="div-phone-gmaile">
        <div>
            <PhoneInTalkIcon className="icons"/> <span>+222 43 16 85 28</span>

        </div>
          <div>
       <OutgoingMailIcon className="icons"/> <span className="text-span">ahmedoomohamedbedou@gmail.com</span>
          </div>
    
    </div>
  

  
</div>
</div>


            </div>
            <div className=" div-form">
<form>
    <div>
        <label htmlFor="name">Your Name</label>
        <input type="text" placeholder="Your name" id="name" required />
    </div>
     <div>
        <label htmlFor="email"> Your Email</label>
        <input type="email" placeholder="Your Email" id="email" required />
    </div>
     <div>
        <label htmlFor="text">Your Subject</label>
        <input type="text" placeholder="Your Subject" id="text" required />
    </div>
     <div>
        <label htmlFor="message">Your Message</label>
       <textarea id="message" placeholder="Your Message">
        
       </textarea>
    </div>
</form>
            </div>
        </footer>
    );
}