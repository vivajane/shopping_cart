import { useEffect, useState } from "react";
import styles from "./showcase.module.css"
import Button from "../../Button"
import CategoryList from "../../categoryList";
import Normalcard from "../../normalcard"
import AverterComponent from "../../useraverter";
import {FetchCategories} from "../../../apiRequest/category";


const HomeShowCase = function(){
    const [categories, setcategories] = useState([]);
    useEffect(() => {
        const getCategory = async () => {
            const data = await FetchCategories();
            setcategories(data)
        }
        getCategory()
    }, []);

    
   
    
    return(
        <div className={styles.showcase}>
        <div className={styles.categories}>
            <CategoryList categories = {categories} />
        </div>
        <div className= {styles.center}>
            <h3 className= {styles.mainHeader}>
                <span>Latest Trending</span>
                Electronic items
            </h3>
            <div className= {styles.mainBtn}>
             <Button variant="secondary">Learn more</Button>
            </div>
        </div>
        <div className= {styles.cards}> 
            <Normalcard variant= "small">
               <div className={styles.card}>
               <AverterComponent/>
                <Button fullwidth>Join Now</Button>
                <Button fullwidth variant="secondary">Log in</Button>
               </div>
            </Normalcard>
            <Normalcard variant = "secondary">
             <p>Get US $10 off with a new supplier</p>
           </Normalcard>
            <Normalcard variant = "primary">
             <p>Send quotes with supplier preferences</p>
           </Normalcard>
        </div>
        </div>
    )
    
     
}

export default HomeShowCase;