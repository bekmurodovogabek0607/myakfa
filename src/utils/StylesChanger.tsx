import Derazastyle1 from "../Component/derazaStyle/Derazastyle1"
import Derazastyle9 from "../Component/derazaStyle/Derazastyle10"
import Derazastyle11 from "../Component/derazaStyle/Derazastyle11"
import Derazastyle12 from "../Component/derazaStyle/Derazastyle12"
import Derazastyle13 from "../Component/derazaStyle/Derazastyle13"
import Derazastyle14 from "../Component/derazaStyle/Derazastyle14"
import Derazastyle2 from "../Component/derazaStyle/Derazastyle2"
import Derazastyle3 from "../Component/derazaStyle/Derazastyle3"
import Derazastyle4 from "../Component/derazaStyle/Derazastyle4"
import Derazastyle5 from "../Component/derazaStyle/Derazastyle5"
import Derazastyle6 from "../Component/derazaStyle/Derazastyle6"
import Derazastyle7 from "../Component/derazaStyle/Derazastyle7"
import Derazastyle8 from "../Component/derazaStyle/Derazastyle8"
import Derazastyle10 from "../Component/derazaStyle/Derazastyle9"


export default function StylesChanger(style:string|undefined,color:string|undefined ,setPalla:React.Dispatch<React.SetStateAction<number>>,setTepa:React.Dispatch<React.SetStateAction<number>>):JSX.Element{
    
    switch (style) {
        case "Derazastyle1":
          return <Derazastyle1 shishaColor={'rgb(141, 69, 2)'} derazaColor={color} seerazmer={'block'} setPalla={setPalla} />
  
        case "Derazastyle2":
          return <Derazastyle2 shishaColor={'rgb(141, 69, 2)'} derazaColor={color} seerazmer={'block'} setPalla={setPalla}/>
  
        case "Derazastyle3":
          return <Derazastyle3 shishaColor={'rgb(141, 69, 2)'} derazaColor={color} seerazmer={'block'} setPalla={setPalla} setTepa={setTepa}/>
  
  
        case "Derazastyle4":
          return <Derazastyle4 shishaColor={'rgb(141, 69, 2)'} derazaColor={color} seerazmer={'block'} setPalla={setPalla} setTepa={setTepa}/>
  
  
        case "Derazastyle5":
          return <Derazastyle5 shishaColor={'rgb(141, 69, 2)'} derazaColor={color} seerazmer={'block'} setPalla={setPalla} setTepa={setTepa}/>
  
  
        case "Derazastyle6":
          return <Derazastyle6 shishaColor={'rgb(141, 69, 2)'} derazaColor={color} seerazmer={'block'} setPalla={setPalla}/>
  
        case "Derazastyle7":
          return <Derazastyle7 shishaColor={'rgb(141, 69, 2)'} derazaColor={color} seerazmer={'block'} setPalla={setPalla} setTepa={setTepa}/>
  
  
        case "Derazastyle8":
          return <Derazastyle8 shishaColor={'rgb(141, 69, 2)'} derazaColor={color} seerazmer={'block'} setPalla={setPalla} setTepa={setTepa}/>
  
  
        case "Derazastyle9":
          return <Derazastyle9 shishaColor={'rgb(141, 69, 2)'} derazaColor={color} seerazmer={'block'} setPalla={setPalla}/>
  
        case "Derazastyle10":
          return <Derazastyle10 shishaColor={'rgb(141, 69, 2)'} derazaColor={color} seerazmer={'block'} setPalla={setPalla}/>
  
        case "Derazastyle11":
          return <Derazastyle11 shishaColor={'rgb(141, 69, 2)'} derazaColor={color} seerazmer={'block'} setPalla={setPalla}/>
  
        case "Derazastyle12":
          return <Derazastyle12 shishaColor={'rgb(141, 69, 2)'} derazaColor={color} seerazmer={'block'} setPalla={setPalla}/>
  
        case "Derazastyle13":
          return <Derazastyle13 shishaColor={'rgb(141, 69, 2)'} derazaColor={color} seerazmer={'block'} setPalla={setPalla}/>
  
  
        case "Derazastyle14":
          return <Derazastyle14 shishaColor={'rgb(141, 69, 2)'} derazaColor={color} seerazmer={'block'} setPalla={setPalla} setTepa={setTepa}/>
  
        default:
          return <div></div>
  
  
  
      }
}