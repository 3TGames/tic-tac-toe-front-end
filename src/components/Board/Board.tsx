import "./Board.css";
import { Slot } from "..";
export type Choice = "X" | "O" | null;

interface IBoardProps {
  list: Choice[];
  onSlotClick: (index: number) => void;
}

export const Board = (props: IBoardProps) => {
  const slots = props.list.map((item, index) => (
    <Slot
      index={index}
      onClickSlot={(slotIndex) => props.onSlotClick(slotIndex)}
      preenchimento={item}
      corDeFundo="green"
      key={`slot-${index}`}
    />
  ));
  return <div className="board">{slots}</div>;
};
