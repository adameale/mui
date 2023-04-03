import React from "react";
import { Stack } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from '@mui/icons-material/Save'

const Muiloadingbutton = () => {
  return (
    <Stack spacing={2} direction="row">
      <LoadingButton variant="outlined">submit</LoadingButton>
      <LoadingButton loading variant="outlined" color="success">
        submit
      </LoadingButton>

      <LoadingButton variant="outlined" loadingIndicator="loading...">
        fetch
      </LoadingButton>
      <LoadingButton loading variant="outlined" loadingIndicator="loading...">
        fetch
      </LoadingButton>
      <LoadingButton variant="outlined" loadingPosition="start"
       startIcon={<SaveIcon />}>save</LoadingButton>

<LoadingButton loading variant="outlined" loadingPosition="start"
       startIcon={<SaveIcon />}>save</LoadingButton>
    </Stack>
  );
};

export default Muiloadingbutton;
