import styles from "./inputs.module.css"
const TextField = ({id,label,placeholder,onChangeHandler,name}) => {
    return <div className={styles.inputWrapper}>
        <label htmlFor={id}>{label}</label>
        <input name = {name} onChange = {onChangeHandler} placeholder = {placeholder} id={id}/>
        </div>
}

export default TextField;