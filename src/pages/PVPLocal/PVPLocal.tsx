import { Board } from "../../components"
import { usePVPLocalLogic } from "./PVPLocal.hooks"

const PVPLocal = () => {
    const info = usePVPLocalLogic()
    
    return(
        <div>
            <Board onSlotClick={info.onMarkingClick} list={info.markings}/>
            fuwefuwbefuwbufbwefwefwfefwefef

        </div>
    )
}
export {PVPLocal}