import styles from "./category.module.css";

const CategoryList = ({categories}) => {
   return <ul>
      {/* {
       categories?.map ((category) => {
         return <li className={styles.categoryItem} key={category.id}>{category.title}</li>
         
       })
      } */}
      <li  className={styles.categoryItem}>TV</li>
      <li  className={styles.categoryItem}>SHOES</li>
      <li  className={styles.categoryItem}>CLOTHES</li>
      <li  className={styles.categoryItem}>BAGS</li>
      <li  className={styles.categoryItem}>ACCESORIES</li>
   </ul>
}


export default CategoryList