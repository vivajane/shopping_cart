import styles from  "./inputs.module.css"

const TextArea = function({onChangeHandler,name, value}){
    return <textarea name = {name} value={value} onChange = {onChangeHandler} className={styles.input}/>
}

export default TextArea;