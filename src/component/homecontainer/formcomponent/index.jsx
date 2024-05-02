// import { useState } from "react"
import Button from "../../Button"
import TextField from "../../inputs/textfield"
import styles from "./formcomponent.module.css"
import clsx from "clsx"
import TextArea from "../../inputs/textarea"
import * as yup from "yup"
import {Formik} from "formik"
import { createInquiry } from "../../../apiRequest/inquiry"




const FormComponent = function ({className}){
    return <div className ={clsx(styles.formWrapper, className)}>
        <div className={styles.parah}>
            <h3 className={styles.heading}>
            An easy way to send requests to all suppliers
            </h3>
            <p className={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
        </div>
        <div className={styles.formContent}>
            <Form/>
        </div>
    
    </div>
};
export const Form = () => {
    try{
   
    const onSubmitHandler = async (values) =>{
        await createInquiry(values)
    }
    return (
        <Formik  initialValues = {defaultValues}
        validationSchema={userSchema} 
        onSubmit ={onSubmitHandler} 
        >
            {({
                values, handleChange, handleSubmit, errors
            }) => { 

            return (
          <form  onSubmit={handleSubmit} className={styles.form}>
            <TextField value = {values.item} name = "item" onChangeHandler = {handleChange} id="item" placeholder= "What item you need?" error={errors.item}/>
            <TextArea name = "desc" value = {values.desc} onChangeHandler = {handleChange}/>       
            <div className={styles.btnWrapper}>
            <Button type= "submit">Send Enquiry</Button>
            </div>
          </form>
            )
            }}
           
        </Formik>
        
    )
    } catch(error){
        console.log(error, "here is the error")
    }
   
}
const defaultValues = {
    item : "",
    desc : ""
}
const userSchema = yup.object({
    item: yup.string().required().min(4),
    desc: yup.string().required(),
  
});

export default FormComponent;