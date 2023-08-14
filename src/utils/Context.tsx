import React, { createContext, useState } from 'react'


// interface IUser {
//     name: string
//     email: string
//     password: string
// }

export interface IZakaz{
    ZakazStyles?:string,
    soni:number
    id?:string,
    boyi?:number
    eni?:number
    narxi?:number
    akraasos?:number,
    arkaBalandligi?:number,
    DerazaPalla?:number,
    ProfilKompani?:string
    oyna?:string
    oynaQavat?:string
    MaxanizmDeraza?:string,
    tor?:string
    oshiqmoshiq?:string
    tepaOynaBalnad?:number
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
    SelectDesing:{styles?:string,arka?:boolean},
    setSelectDesing:React.Dispatch<React.SetStateAction<{styles?:string,arka?:boolean}>>,
    ArkaBor:boolean,
    setArkaBor:React.Dispatch<React.SetStateAction<boolean>>,
    Zakaz:IZakaz[],
    setZakaz:React.Dispatch<React.SetStateAction<IZakaz[]>>,
    OneZakaz:IZakaz,
    setONeZakaz:React.Dispatch<React.SetStateAction<IZakaz>>,
    isModalOpen:boolean,
    setIsModalOpen:React.Dispatch<React.SetStateAction<boolean>>,
    isModalOpenSoni:boolean,
    setIsModalOpenSoni:React.Dispatch<React.SetStateAction<boolean>>,
    User:{email?:string,name?:string,id?:string},
    setUser:React.Dispatch<React.SetStateAction<{email?:string,name?:string,id?:string}>>,
}
export const Context = createContext<ContextType | null>(null)
type ChildrenType = {
    children: React.ReactNode
}
const GlobalProvayder = ({ children }: ChildrenType) => {
    const [MyDerazaStyles, setMyDerazaStyles] = useState<{styles:string,arka:boolean}[]>([{styles:'Derazastyle1',arka:false}])
    const [ProfilRagng,setProfilRang]=useState<string>('rgb(219, 219, 219)')
    const [SelectDesing,setSelectDesing]=useState<{styles?:string,arka?:boolean}>({})
    const [ArkaBor,setArkaBor]=useState<boolean>(false)
    const [Zakaz,setZakaz]=useState<IZakaz[]>([])
    const [OneZakaz,setONeZakaz]=useState<IZakaz>({ProfilColor:'rgb(219, 219, 219)',id:'1',soni:1})
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [isModalOpenSoni, setIsModalOpenSoni] = useState(false);
    const [User,setUser]=useState<{email?:string,name?:string,id?:string}>({email:'',name:''})


 

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
                setONeZakaz,
                isModalOpen,
                setIsModalOpen,
                isModalOpenSoni,
                setIsModalOpenSoni,
                User,
                setUser
            }}
        >{children}
        </Context.Provider>
    )
}

export default GlobalProvayder