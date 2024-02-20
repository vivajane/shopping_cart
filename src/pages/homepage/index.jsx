// import Normalcard from "../../component/normalcard";
// import Button from "../../component/Button"
import FormComponent from "../../component/homecontainer/formcomponent";
import HomeShowCase from "../../component/homecontainer/homeshowcase";
import styles from "./homepage.module.css"


const Home = () => {
    // return <>
    // <Normalcard variant = "primary">
    //     <p>Send quotes with supplier preferences</p>
    // </Normalcard>
    // <Normalcard variant = "secondary">
    //     <p>Get US $10 off with a new supplier</p>
    // </Normalcard>
    // <Button></Button>
    // <HomeShowCase></HomeShowCase>
    // </>
    return <div className="container">
        <HomeShowCase></HomeShowCase>
        <FormComponent className={styles.marginTop}></FormComponent>
    </div>
}

export default Home;