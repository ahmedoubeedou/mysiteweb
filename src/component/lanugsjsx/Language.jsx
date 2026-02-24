import "./language.css"
export default function Language()
{
    const js = "/src/language/js.svg";
    const tilwand = "/src/language/tailwindcss.svg";
    const css3 = "/src/language/css3.svg";
    const html = "/src/language/html.svg";
    const reactjs = "/src/language/react.svg";
    return(
       <div id="Skils" className=" language flex flex-col gap-6">
        <h2 className="text-3xl skils">My Skils</h2>
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