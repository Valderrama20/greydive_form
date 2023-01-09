import { getFirestore, collection, addDoc } from "firebase/firestore"
import { useState } from "react"
import app from "../../credenciales"
import json from "../../db.json"
import style from './Form.module.css'
import Swal from "sweetalert2"

const db = getFirestore(app)




export default function Form  () {
  const [button, setButton] = useState(false)

  const init_user = {}
  json.items.forEach(e => e.name ? init_user[e.name] = "" : null)
  init_user.country_of_origin = "argentina"

  const [user, setUser] = useState(init_user)

  const set_user = (e) => {
    e.target.name === "terms_and_conditions"
      ? setUser({ ...user, [e.target.name]: e.target.checked })
      : setUser({ ...user, [e.target.name]: e.target.value })
  }

  const send_db = async (e) => {
    e.preventDefault()

    try {
      const db_answer = await addDoc(collection(db, "Users"), {
        ...user
      })
      localStorage.setItem("ID", db_answer.id)
      Swal.fire(
        '¡Excelente!',
        'Tu respuesta fue enviada',
        'success'
      )
      setButton(true)
      setUser(init_user)
    } catch (error) {
      console.log(error)
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Algo Salio Mal!',
        footer: '<a href="">Why do I have this issue?</a>'
      })
    }
  }

  return (<div className={style.container}>
     <h1>greydive Form</h1>
    {button && <div className={style.button}><div><a href="/user">Revisar Informacion ➜</a></div></div>}
    <div>
      <form onSubmit={e => send_db(e)} className={style.form}>

        {json.items.map(e => <div>
          <label>{e.label}</label> <br />
          {e.type === "submit"? 
          <button class="btn-shine">
          <span>{e.label}</span>
          </button> :
           e.type === "select" ?
           <select name={e.name} id="" onChange={(e) => set_user(e)} className={style.input} value={user.country_of_origin}>
           {e.options.map(e2 => <option value={e2.value}>{e2.label}</option>)}
          </select>:
          <input type={e.type} name={e.name} onChange={(e) => set_user(e)} required={e.required} className={style.input} value={user[e.name]}/>
          
          }

        </div>)}
      </form>

    </div>

  </div>)
}