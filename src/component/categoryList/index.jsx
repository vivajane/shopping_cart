import styles from "./category.module.css";

const CategoryList = ({categories}) => {
   return <ul>
      {
       categories?.map ((category) => {
         return <li className={styles.categoryItem} key={category.id}>{category.title}</li>
         
       })
      }
   </ul>
}


export default CategoryList