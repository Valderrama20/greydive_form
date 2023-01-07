import { async } from "@firebase/util"
import {getFirestore, collection, addDoc,getDocs, doc, deleteDoc, getDoc,setDoc} from "firebase/firestore"
import { useState } from "react"
import app from "../../credenciales"
import json from "../../db.json"

console.log(json.items)

const db = getFirestore(app)
  
export default function () {
  
  const init_user = {}
  json.items.forEach(e => e.name? init_user[e.name] = "": null)

 const [user , setUser] = useState(init_user)

  const set_user = (e) => {
      e.target.name === "terms_and_conditions"
       ? setUser({...user,[e.target.name] : e.target.checked})
      : setUser({...user,[e.target.name] : e.target.value})
  }
    
   const send_db = async (e) => {
    e.preventDefault()
      try {
        await addDoc(collection(db,"Users"),{
            ...user
        })
        alert("enviado")
      } catch (error) {
        console.log(error)
        alert("error")
      }
      console.log(user)
   }

    return(<form onSubmit={e => send_db(e)}>

         {json.items.map(e => <div>
          <label>{e.label}</label>
          {e.type != "select"? <input type={e.type} name={e.name} onChange={(e) => set_user(e)}/>
          : <select name={e.name} id="" onChange={(e) => set_user(e)}>
            {e.options.map(e2 => <option value={e2.value} >{e2.label}</option>)}
          </select>
          }
          
         </div>)}
         <button >holaaaa</button>
        
    </form>)
}