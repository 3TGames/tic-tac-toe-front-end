interface ISlotProps {
  preenchimento: string | null;
  corDeFundo: string;
  index: number;
  onClickSlot: (index: number) => void;
}

export const Slot = (props: ISlotProps) => {
  const styleOptions = {
    backgroundColor: props.corDeFundo,
  };

  return (
    <div
      onClick={() => props.onClickSlot(props.index)}
      className="slot"
      style={styleOptions}
    >
      {props.preenchimento}
    </div>
  );
};
