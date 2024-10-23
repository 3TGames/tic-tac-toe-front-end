import { Board } from "../../components";
import { usePVPLocalLogic } from "./PVPLocal.hooks";

const PVPLocal = () => {
  const info = usePVPLocalLogic();

  return (
    <div>
      <Board
        onSlotClick={(index) => info.onMarkingClick(index)}
        list={info.markings}
      />
      fuwefuwbefuwbufbwefwefwfefwefe
    </div>
  );
};
export { PVPLocal };
