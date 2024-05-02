
import styles from "./button.module.css"
const Button = ({variant = "primary", size = "medium", fullwidth = "true", children, type}) => {
    return <button data-fullwidth= {fullwidth} data-size = {size} type = {type} data-variant= {variant} className={styles.btn}>
        {children}
        </button>
}

export default Button;