import { Choice } from "../../components";
import { useState } from "react";

const emptyMarkings: Choice[] = [
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
];

export const usePVPLocalLogic = () => {
  const [markings, setMarkings] = useState<Choice[]>(emptyMarkings);
  const onMarkingClick = (id: number) => {
    console.log("Usuário clicou na casa " + id);
  };
  return {
    markings,
    onMarkingClick,
  };
};
