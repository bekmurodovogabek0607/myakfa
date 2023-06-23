import React, { createContext, useState } from 'react'


// interface IUser {
//     name: string
//     email: string
//     password: string
// }

export interface IZakaz{
    ZakazStyles?:string,
    
    boyi?:number
    eni?:number
    narxi?:number
    akra?:{
       
        asos:number
        arkaBalandligi:number
    }
    DerazaPalla?:{
        
         eni:number
    }
    ProfilKompani?:string
    oyna?:string
    oynaQavat?:string
    MaxanizmDeraza?:{
       
        nomi:string
    }
    tor?:string
    oshiqmoshiq?:string
    
    eshikZamog?:string
    derazaTutuqich?:string

    EshikPastkiQism?:string
ProfilColor?:string,

}

export type ContextType = {
    MyDerazaStyles: {styles:string,arka:boolean}[],
    setMyDerazaStyles: React.Dispatch<React.SetStateAction<{styles:string,arka:boolean}[]>>,
    ProfilRagng:string,
    setProfilRang?:React.Dispatch<React.SetStateAction<string>>,
    SelectDesing:{styles:string,arka:boolean},
    setSelectDesing:React.Dispatch<React.SetStateAction<{styles:string,arka:boolean}>>,
    ArkaBor:boolean,
    setArkaBor:React.Dispatch<React.SetStateAction<boolean>>,
    Zakaz:IZakaz[],
    setZakaz:React.Dispatch<React.SetStateAction<IZakaz[]>>,
    OneZakaz:IZakaz,
    setONeZakaz:React.Dispatch<React.SetStateAction<IZakaz>>,
}
export const Context = createContext<ContextType | null>(null)
type ChildrenType = {
    children: React.ReactNode
}
const GlobalProvayder = ({ children }: ChildrenType) => {
    const [MyDerazaStyles, setMyDerazaStyles] = useState<{styles:string,arka:boolean}[]>([{styles:'Derazastyle1',arka:false}])
    const [ProfilRagng,setProfilRang]=useState<string>('')
    const [SelectDesing,setSelectDesing]=useState<{styles:string,arka:boolean}>({styles:'Derazastyle13',arka:true})
    const [ArkaBor,setArkaBor]=useState<boolean>(false)
    const [Zakaz,setZakaz]=useState<IZakaz[]>([])
    const [OneZakaz,setONeZakaz]=useState<IZakaz>({})
    return (
        <Context.Provider
            value={{
                MyDerazaStyles,
                setMyDerazaStyles,
                ProfilRagng,
                setProfilRang,
                SelectDesing,
                setSelectDesing,
                setArkaBor,
                ArkaBor,
                Zakaz,
                setZakaz,
                OneZakaz,
                setONeZakaz
            }}
        >{children}
        </Context.Provider>
    )
}

export default GlobalProvayder