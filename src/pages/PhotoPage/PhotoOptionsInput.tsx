import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import {
  validateAlbumFilters,
  ensureNumberKeyDown,
  determineHelperText,
} from "./utilities";

function PhotoOptionsInput(props: { setFilters: Function }) {
  const { setFilters } = props;
  const [singleAlbum, setSingleAlbum] = useState<string>("");
  const [minAlbum, setMinAlbum] = useState<string>("");
  const [maxAlbum, setMaxAlbum] = useState<string>("");

  const foundErrors = validateAlbumFilters(singleAlbum, minAlbum, maxAlbum);

  function handleSubmit(e: any) {
    if (foundErrors.length === 0) {
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
    }
  }
  function handleReset(e: any) {
    setSingleAlbum("");
    setMinAlbum("");
    setMaxAlbum("");
    setFilters([]);
  }

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
          error={foundErrors.length > 0}
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
          error={foundErrors.length > 0}
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
          error={foundErrors.length > 0}
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
          {foundErrors.length > 0 && (
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
              {determineHelperText(foundErrors)}
            </Typography>
          )}
        </Box>
      </Box>
    </>
  );
}

export default PhotoOptionsInput;
