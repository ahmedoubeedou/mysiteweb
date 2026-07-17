import "./projet.css"
import { useTranslation } from 'react-i18next';
export default function Cards({srcs , hrefs})
{
    const { t, i18n } = useTranslation();
    return(
 <div className='flex parent-img-div flex-col items-center justify-center'>
    <img src={srcs} alt="climat"  className='img-climat'/>
   <a href={hrefs} target='_blank'><p className='link-projet'>{t("Go to Projects")}</p> </a> 
 </div>
    );
}