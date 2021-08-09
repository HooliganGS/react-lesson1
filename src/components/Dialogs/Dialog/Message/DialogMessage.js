import s from "../../Dialogs.module.css";

const DialogMessage = (props) => {
    return (
        <div className={s.Message}>{props.message}</div>
    )
}
export default DialogMessage;