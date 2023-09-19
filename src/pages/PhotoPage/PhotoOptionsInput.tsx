import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import {
  validateAlbumFilters,
  ensureNumberKeyDown,
  determineHelperText,
} from "./utilities";

function PhotoOptionsInput(props: {
  setFilters: React.Dispatch<React.SetStateAction<number[]>>;
}) {
  const { setFilters } = props;
  const [singleAlbum, setSingleAlbum] = useState<string>("");
  const [minAlbum, setMinAlbum] = useState<string>("");
  const [maxAlbum, setMaxAlbum] = useState<string>("");
  const [displayErrors, setDisplayErrors] = useState(false);

  const foundErrors = validateAlbumFilters(singleAlbum, minAlbum, maxAlbum);

  function handleSubmit() {
    setDisplayErrors(false);
    if (foundErrors.length === 0) {
      if (!singleAlbum && !minAlbum && !maxAlbum) {
        return;
      }
      const numericSingle = Number(singleAlbum);
      const numericMin = Number(minAlbum);
      const numericMax = Number(maxAlbum);
      if (numericSingle !== 0) {
        setFilters([numericSingle]);
      } else {
        setFilters([numericMin, numericMax]);
      }
    } else {
      console.log(foundErrors);
      setDisplayErrors(true);
    }
  }
  function handleReset() {
    setSingleAlbum("");
    setMinAlbum("");
    setMaxAlbum("");
    setFilters([]);
  }
  const errorsToDisplay = determineHelperText(foundErrors);
  return (
    <>
      <Box component="form" autoComplete="off" sx={{ my: 2 }}>
        <Typography component="p" sx={{ my: 1 }}>
          Enter a single album id between 1 and 100:
        </Typography>
        <TextField
          data-testid="single-album-number-input"
          label="Single album id"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setMinAlbum("");
            setMaxAlbum("");
            setSingleAlbum(event.target.value);
          }}
          value={singleAlbum}
          error={displayErrors && foundErrors.length > 0}
          type="number"
          onKeyDown={ensureNumberKeyDown}
        ></TextField>
      </Box>
      <Typography component="p">or</Typography>
      <Box component="form" sx={{ my: 2 }}>
        <Typography component="p" sx={{ my: 1 }}>
          Enter a range of album ids:
        </Typography>
        <TextField
          id="min-album-number-input"
          data-testid="min-album-number-input"
          label="Min album id"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setSingleAlbum("");
            setMinAlbum(event.target.value);
          }}
          error={displayErrors && foundErrors.length > 0}
          value={minAlbum}
          type="number"
          onKeyDown={ensureNumberKeyDown}
        ></TextField>
        <TextField
          id="max-album-number-input"
          data-testid="max-album-number-input"
          label="Max album id"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setSingleAlbum("");
            setMaxAlbum(event.target.value);
          }}
          error={displayErrors && foundErrors.length > 0}
          value={maxAlbum}
          type="number"
          onKeyDown={ensureNumberKeyDown}
        ></TextField>
      </Box>
      <Box>
        <Box
          sx={{
            width: "50%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button variant="outlined" onClick={handleSubmit}>
            Filter albums
          </Button>
          <Button color="warning" variant="outlined" onClick={handleReset}>
            Reset filters
          </Button>
        </Box>
        <Box sx={{ width: "50%" }}>
          {displayErrors && foundErrors.length > 0 && (
            <Typography
              component="h1"
              gutterBottom={false}
              sx={{
                py: 2,
                px: 2,
                my: 1,
                border: "solid 1px",
                borderColor: "red",
              }}
            >
              <Typography component="p" sx={{ fontWeight: "bold" }}>
                Please correct the following errors:
              </Typography>
              {errorsToDisplay}
            </Typography>
          )}
        </Box>
      </Box>
    </>
  );
}

export default PhotoOptionsInput;
