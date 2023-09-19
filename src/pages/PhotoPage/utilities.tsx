import { Typography } from "@mui/material";
import {
  bothDefined,
  singleLessOrEqualToZero,
  singleGreaterOneHundred,
  minTooLow,
  maxTooLow,
  maxNotDefined,
  minNotDefined,
  minGreaterThanMax,
  minOverHundred,
  maxOverHundred,
  AlbumError,
} from "./constants";
import { PhotoResponse } from "../../types/types";

export function validateAlbumFilters(
  singleAlbum: string,
  minAlbum: string,
  maxAlbum: string
): AlbumError[] {
  if (!singleAlbum && !minAlbum && !maxAlbum) {
    return [];
  }
  const numericSingle = Number(singleAlbum);
  const numericMin = Number(minAlbum);
  const numericMax = Number(maxAlbum);

  if (!numericSingle && !numericMin && !numericMax) {
    return [];
  }
  const newErrors = [];

  if (numericSingle !== 0) {
    if (minAlbum || maxAlbum) {
      newErrors.push(AlbumError.BothDefined);
    }
    if (numericSingle > 100) {
      newErrors.push(AlbumError.SingleGreaterOneHundred);
    }
    if (numericSingle < 0) {
      newErrors.push(AlbumError.SingleLessOrEqualToZero);
    }
    return newErrors;
  }
  if (numericMin <= 0) {
    newErrors.push(AlbumError.MinTooLow);
  }
  if (numericMax <= 0) {
    newErrors.push(AlbumError.MaxTooLow);
  }
  if (numericMin && !numericMax) {
    newErrors.push(AlbumError.MaxNotDefined);
  }
  if (!minAlbum && numericMax) {
    newErrors.push(AlbumError.MinNotDefined);
  }
  if (numericMin > numericMax) {
    newErrors.push(AlbumError.MinGreaterThanMax);
  }
  if (numericMin > 100) {
    newErrors.push(AlbumError.MinOverHundred);
  }
  if (numericMax > 100) {
    newErrors.push(AlbumError.MaxOverHundred);
  }
  return newErrors;
}

export const ensureNumberKeyDown = (
  event: React.KeyboardEvent<HTMLInputElement>
) => {
  const eventCode = event.code.toLowerCase();
  if (
    !(
      event.code !== null &&
      (eventCode.includes("digit") ||
        eventCode.includes("arrow") ||
        eventCode.includes("home") ||
        eventCode.includes("end") ||
        eventCode.includes("tab") ||
        eventCode.includes("backspace") ||
        (eventCode.includes("numpad") && eventCode.length === 7))
    )
  ) {
    event.preventDefault();
  }
};

export function determineHelperText(foundErrors: AlbumError[]) {
  return foundErrors.map((errorText) => {
    switch (errorText) {
      case "BothDefined":
        return (
          <Typography key={`error-${bothDefined}`} component="p">
            {bothDefined}
          </Typography>
        );
      case "SingleLessOrEqualToZero":
        return (
          <Typography key={`error-${singleLessOrEqualToZero}`} component="p">
            {singleLessOrEqualToZero}
          </Typography>
        );
      case "SingleGreaterOneHundred":
        return (
          <Typography key={`error-${singleGreaterOneHundred}`} component="p">
            {singleGreaterOneHundred}
          </Typography>
        );
      case "MinTooLow":
        return (
          <Typography key={`error-${minTooLow}`} component="p">
            {minTooLow}
          </Typography>
        );
      case "MaxTooLow":
        return (
          <Typography key={`error-${maxTooLow}`} component="p">
            {maxTooLow}
          </Typography>
        );
      case "MaxNotDefined":
        return (
          <Typography key={`error-${maxNotDefined}`} component="p">
            {maxNotDefined}
          </Typography>
        );
      case "MinNotDefined":
        return (
          <Typography key={`error-${minNotDefined}`} component="p">
            {minNotDefined}
          </Typography>
        );
      case "MinGreaterThanMax":
        return (
          <Typography key={`error-${minGreaterThanMax}`} component="p">
            {minGreaterThanMax}
          </Typography>
        );
      case "MinOverHundred":
        return (
          <Typography key={`error-${minOverHundred}`} component="p">
            {minOverHundred}
          </Typography>
        );
      case "MaxOverHundred":
        return (
          <Typography key={`error-${maxOverHundred}`} component="p">
            {maxOverHundred}
          </Typography>
        );
      default:
        return <></>;
    }
  });
}

export function filterPhotos(filtersInput: number[], photos: PhotoResponse[]) {
  if (filtersInput.length === 1) {
    return photos.filter((elem: PhotoResponse) => {
      return Number(elem.albumId) === filtersInput[0];
    });
  }
  if (filtersInput.length === 2) {
    return photos.filter((elem: PhotoResponse) => {
      return (
        Number(elem.albumId) >= filtersInput[0] &&
        Number(elem.albumId) <= filtersInput[1]
      );
    });
  } else {
    return photos;
  }
}
