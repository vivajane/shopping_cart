
import styles from "./button.module.css"
const Button = ({variant = "primary", size = "medium", fullwidth = "true", children}) => {
    return <button data-fullwidth= {fullwidth} data-size = {size} data-variant= {variant} className={styles.btn}>
        {children}
        </button>
}

export default Button;