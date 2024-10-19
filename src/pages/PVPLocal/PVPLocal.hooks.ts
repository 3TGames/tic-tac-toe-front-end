import { Choice } from "../../components";
import { useState } from "react";

const emptyMarkings:Choice[] = [null,null,null,null,null,null,null,null,null]

export const usePVPLocalLogic = () => {
  const [markings,setMarkings] = useState<Choice[]>(emptyMarkings)
  const onMarkingClick = () => {
    console.log("Usuário clicou")
  }
  return {
    markings,
    onMarkingClick
  };
};
