import styles from "./inputs.module.css"
const TextField = ({id,label,placeholder,onChangeHandler,name, value, error}) => {
    return <div className={styles.inputWrapper}>
        <label htmlFor={id}>{label}</label>
        <input name = {name} value={value} onChange = {onChangeHandler} placeholder = {placeholder} id={id} style={{color: "black"}}/>
        {!!error && <span style={{color: "black"}}>{error}</span>}
    </div>
}

export default TextField;