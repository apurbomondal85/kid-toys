
import { useEffect } from "react"

const useTitle = title => {
    useEffect(() =>{
        document.title = `Kid Toys | ${title}`
    },[])
}
export default useTitle