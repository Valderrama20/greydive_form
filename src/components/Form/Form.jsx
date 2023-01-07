import {getFirestore, collection, addDoc,getDocs, doc, deleteDoc, getDoc,setDoc} from "firebase/firestore"
import { useState } from "react"
import app from "../../credenciales"
import json from "../../db.json"
import style from './Form.module.css'

console.log(json.items)

const db = getFirestore(app)



  
export default function () {
  
  const init_user = {}
  json.items.forEach(e => e.name? init_user[e.name] = "": null)
  init_user.country_of_origin = "argentina"

 const [user , setUser] = useState(init_user)

  const set_user = (e) => {
      e.target.name === "terms_and_conditions"
       ? setUser({...user,[e.target.name] : e.target.checked})
      : setUser({...user,[e.target.name] : e.target.value})
  }
    
   const send_db = async (e) => {
    e.preventDefault()

      try {
        const db_answer = await addDoc(collection(db,"Users"),{
            ...user
        })
       localStorage.setItem("ID",db_answer.id )

        alert("enviado")
      } catch (error) {
        console.log(error)
        alert("error")
      }
   }

    return(<div className={style.container}>

    <div>
       <form onSubmit={e => send_db(e)} className={style.form}>

         {json.items.map(e => <div>
          <label>{e.label}</label> <br />
          {e.type != "select"? <input type={e.type} name={e.name} onChange={(e) => set_user(e)} required={e.required}/>
          : <select name={e.name} id="" onChange={(e) => set_user(e)} >
            {e.options.map(e2 => <option value={e2.value}>{e2.label}</option>)}
          </select>
          }
          
         </div>)}
    </form> 
    
    </div>
   
    </div>)
}