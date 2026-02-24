import Section from "./component/section/Section"
import Headr from "./component/headr/Headr";
import Language from "./component/lanugsjsx/Language";
import Projet from "./component/projet/projet";
import Fotter from "./component/foter/Fotter";
function App() {
 

  return (
  <div className="widt-app">
    <Headr/>
    <div className="line-element"/>
    <Section/>
      <div className="line-element"/>
      <Language />
      <div className="line-element"/>
      <Projet/>
      <div className="line-element"/>
      <Fotter/>
  </div>
  )
}
export default App
