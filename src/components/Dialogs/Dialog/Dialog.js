import s from './Dialog.module.css'
const Dialog =(props)=>{
    return (
        <div className={s.item}>
            {props.dialog}
        </div>
    )
}
export default Dialog;