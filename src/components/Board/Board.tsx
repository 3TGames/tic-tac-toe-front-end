import "./Board.css";

export type Choice = "X" | "O" | null;

interface IBoardProps {
  list: Choice[];
  onSlotClick:()=>void
}

export const Board = (props: IBoardProps) => {
  const slots = props.list.map((item, index) => (
    <Slot onClickSlot={props.onSlotClick} preenchimento={item} corDeFundo="green" key={`slot-${index}`} />
  ));
  return <div className="board">{slots}</div>;
};


interface ISlotProps {
  preenchimento: string | null;
  corDeFundo: string;
  onClickSlot: ()=>void
}

const Slot = (props: ISlotProps) => {
  const styleOptions = {
    backgroundColor: props.corDeFundo,
  };

  return (
    <div onClick={props.onClickSlot} className="slot" style={styleOptions}>
      {props.preenchimento}
    </div>
  );
};
