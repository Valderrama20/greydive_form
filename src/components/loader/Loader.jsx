import style from "./Loader.module.css"
export default function Loader () {




    return( <div className={style.container}>
        <div class={style.lds_ring}><div></div><div></div><div></div><div></div></div>
    </div>
    )
}