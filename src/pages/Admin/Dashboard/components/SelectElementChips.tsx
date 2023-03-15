import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

import "./styles/styles.css";

interface IProps {
  state: boolean;
  toggleState: () => void;
}

export default function SelectElementChips(props: IProps) {
  const {state,toggleState}=props;
  
  return (
    <Stack direction="row" spacing={2}>
      <Chip
        id="chip"
        label="Events"
        onClick={toggleState}
        variant={state ? "filled" : "outlined"}
      />
      <Chip
        id="chip"
        label="Users"
        onClick={toggleState}
        variant={!state ? "filled" : "outlined"}
      />
    </Stack>
  );
}
