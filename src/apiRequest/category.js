export const FetchCategories = async () => {
 try{
    const response = await fetch ('http://127.0.0.1:3005/mycategory')
    const data = await response.json();
    return data;
 }catch(error){
   console.log(error);

}
};