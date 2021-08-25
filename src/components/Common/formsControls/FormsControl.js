import styles from "./FormsControl.module.css"

export const Textarea = (props) => {
    const hasError =props.meta.touched && props.meta.error;
    return (
        <div className={styles.formControl + " " + (hasError? styles.error:" ")}>
            <div>
                <textarea {...props.input} />
            </div>
            {hasError && <span>{props.meta.error}</span>}
        </div>
    )
}
export const Input = ({input,meta,...props}) => {
    const hasError =meta.touched && meta.error;
    return (
        <div className={styles.formControl + " " + (hasError? styles.error:" ")}>
            <div>
                <input {...input} {...props} />
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}