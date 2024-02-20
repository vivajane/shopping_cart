import { useState } from "react"
import Button from "../../Button"
import TextField from "../../inputs/textfield"
import styles from "./formcomponent.module.css"
import clsx from "clsx"
import TextArea from "../../inputs/textarea"
const FormComponent = function ({className}){
    return <div className ={clsx(styles.formWrapper, className)}>
        <div>
            <h3 className={styles.heading}>
            An easy way to send requests to all suppliers
            </h3>
            <p className={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
        </div>
        <div className={styles.formContent}>
            <Form/>
        </div>
    
    </div>
}
const Form = () => {
    const [formState, setFormState] = useState({});
    const onChangeHandler = function (e){
        const{value, name} = e?.target;
        setFormState((prev) => ({
            ...prev,
            [name] : value
        }))
        console.log(value)
    }
    return (
        <form className={styles.form}>
            <TextField value = {formState.item} name = "item"onChangeHandler = {onChangeHandler} id="item" placeholder= "What item you need?"/>
            <TextArea className = {styles.inputWrapper}/>       
            <div className={styles.btnWrapper}>
            <Button >Send Enquiry</Button>
            </div>
        </form>
    )
   
}

export default FormComponent;