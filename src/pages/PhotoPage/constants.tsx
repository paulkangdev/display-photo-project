export const bothDefined =
  "Please enter either a single album, or a min and a max.";
export const singleLessOrEqualToZero = "Selection must be greater than zero.";
export const singleGreaterOneHundred =
  "Selection must be less than or equal to 100.";
export const minTooLow = "Minimum must be greater than zero.";
export const maxTooLow = "Maximum must be greater than zero.";
export const maxNotDefined = "Maximum is required if a minimum is given.";
export const minNotDefined = "Minimum is required if a maximum is given.";
export const minGreaterThanMax =
  "Minimum must be less than or equal to maximum.";
export const minOverHundred = "Minimum must be less than or equal to 100.";
export const maxOverHundred = "Maximum must be less than or equal to 100.";

export enum AlbumError {
  BothDefined = "BothDefined",
  SingleLessOrEqualToZero = "SingleLessOrEqualToZero",
  SingleGreaterOneHundred = "SingleGreaterOneHundred",
  MinTooLow = "MinTooLow",
  MaxTooLow = "MaxTooLow",
  MaxNotDefined = "MaxNotDefined",
  MinNotDefined = "MinNotDefined",
  MinGreaterThanMax = "MinGreaterThanMax",
  MinOverHundred = "MinOverHundred",
  MaxOverHundred = "MaxOverHundred",
}
