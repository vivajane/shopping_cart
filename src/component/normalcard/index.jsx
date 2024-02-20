import "./normalcard.css"
const Normalcard = function({variant, children, size}){
    return <div data-size = {size} data-variant ={variant}className="content">{children}</div>
}
  

export default Normalcard