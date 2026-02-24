import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import "./projet.css"
export default function Cards({srcs , hrefs})
{
    return(
 <div className='flex parent-img-div flex-col items-center justify-center'>
    <img src={srcs} alt="climat"  className='img-climat'/>
   <a href={hrefs} target='_blank'><p className='link-projet'>aller aux projet</p> </a> 
 </div>
    );
}