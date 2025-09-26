import BigDisplay from "./BigDisplay";
import SideDisplay from "./SideDisplay";

export default function MyMain(){
    return(
        <div className="container">
            <SideDisplay/>
            <BigDisplay/>
        </div>
    )
}