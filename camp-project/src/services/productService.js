
import axios from "axios"
export default class ProductService{
getProducts(){
    return  axios.get("http://localhost:8080/api/products/getall")
    //api products get all u çağır swagger da
}
}
