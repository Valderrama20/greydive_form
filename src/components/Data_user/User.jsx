import app from "../../credenciales"
import {getFirestore, doc, getDoc} from "firebase/firestore"
import { useEffect, useState } from "react"
import style from "./User.module.css"

const db = getFirestore(app)

export default function () {
const id = localStorage.getItem("ID")

    useEffect(() => {get_user(id)},[])

    const [data, setData] = useState(null)
    
const get_user = async (id) =>{
    const user = await getDoc(doc(db,"Users",id))
    setData(user.data())
}


    return(<>
     {data ?
    <div className={style.container}>
        <h1>Datos De Usuario</h1>
        <div className={style.volver}><a href="/">🡐 Volver</a></div>
        <div className={style.data}>
        <label htmlFor="">Nombre completo</label>
        <p>{data.full_name}</p>
        <label htmlFor="">Correo electrónico</label>
        <p>{data.email}</p>
        <label htmlFor="">Fecha de nacimiento</label>
        <p>{data.birth_date}</p>
        <label htmlFor="">País de origen</label>
        <p>{data.country_of_origin}</p>     
         </div>
           </div>
        :  <p>cagando</p>}
        </>)
}