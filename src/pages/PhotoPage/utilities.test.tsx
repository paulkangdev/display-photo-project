import { beforeEach, describe, expect, test } from "vitest";
import {
  AlbumError,
  bothDefined,
  maxNotDefined,
  maxOverHundred,
  maxTooLow,
  minGreaterThanMax,
  minNotDefined,
  minOverHundred,
  minTooLow,
  singleGreaterOneHundred,
  singleLessOrEqualToZero,
} from "./constants";
import { determineHelperText, validateAlbumFilters } from "./utilities";
import { fireEvent, render, screen } from "@testing-library/react";
import PhotoOptionsInput from "./PhotoOptionsInput";

describe("utilities tests", () => {
  describe("validateAlbumFilters", () => {
    test("Should return error BothDefined if all parameters are defined", () => {
      expect(validateAlbumFilters("1", "2", "3")).toContain(
        AlbumError.BothDefined
      );
    });
    test("Should return error SingleLessOrEqualToZero if single album is less than 0", () => {
      expect(validateAlbumFilters("-5", "", "")).toContain(
        AlbumError.SingleLessOrEqualToZero
      );
    });
    test("Should return error SingleGreaterOneHundred if single album greater than 100", () => {
      expect(validateAlbumFilters("101", "", "")).toContain(
        AlbumError.SingleGreaterOneHundred
      );
    });
    test("Should return no errors if single album equal to 100", () => {
      expect(validateAlbumFilters("100", "", "").length).toBe(0);
    });
    test("Should return no error if single album is equal to 0 and min/max are undefined", () => {
      expect(validateAlbumFilters("0", "", "").length).toBe(0);
    });
    test("Should return error MinTooLow if Minimum is zero", () => {
      expect(validateAlbumFilters("", "0", "100")).toContain(
        AlbumError.MinTooLow
      );
    });
    test("Should return error MinTooLow if Minimum is less than zero", () => {
      expect(validateAlbumFilters("", "-25", "100")).toContain(
        AlbumError.MinTooLow
      );
    });
    test("Should return error MaxTooLow if Max is zero", () => {
      expect(validateAlbumFilters("", "-1", "0")).toContain(
        AlbumError.MaxTooLow
      );
    });
    test("Should return error MaxTooLow if Max is less than zero", () => {
      expect(validateAlbumFilters("", "-1", "-2")).toContain(
        AlbumError.MaxTooLow
      );
    });
    test("Should return MaxNotDefined if Minimum provided without Maximum", () => {
      expect(validateAlbumFilters("", "2", "")).toContain(
        AlbumError.MaxNotDefined
      );
    });
    test("Should return MinNotDefined if Maximum provided without Minimum", () => {
      expect(validateAlbumFilters("", "", "30")).toContain(
        AlbumError.MinNotDefined
      );
    });
    test("Should return MinGreaterThanMax if Minimum greater than Maximum", () => {
      expect(validateAlbumFilters("", "25", "3")).toContain(
        AlbumError.MinGreaterThanMax
      );
    });
    test("Should return MinOverHundred if Minimum greater than 100", () => {
      expect(validateAlbumFilters("", "101", "")).toContain(
        AlbumError.MinOverHundred
      );
    });
    test("Should return MaxOverHundred if Maximum greater than 100 ", () => {
      expect(validateAlbumFilters("", "", "101")).toContain(
        AlbumError.MaxOverHundred
      );
    });
  });
  describe("determineHelperText", () => {
    test("Should return determineHelperText if all parameters are defined", () => {
      determineHelperText([
        AlbumError.BothDefined,
        AlbumError.SingleLessOrEqualToZero,
        AlbumError.SingleGreaterOneHundred,
        AlbumError.MinTooLow,
        AlbumError.MaxTooLow,
        AlbumError.MaxNotDefined,
        AlbumError.MinNotDefined,
        AlbumError.MinGreaterThanMax,
        AlbumError.MinOverHundred,
        AlbumError.MaxOverHundred,
      ]).forEach((elem) => render(elem));

      expect(screen.getByText(bothDefined));
      expect(screen.getByText(singleLessOrEqualToZero));
      expect(screen.getByText(singleGreaterOneHundred));
      expect(screen.getByText(minTooLow));
      expect(screen.getByText(maxTooLow));
      expect(screen.getByText(maxNotDefined));
      expect(screen.getByText(minNotDefined));
      expect(screen.getByText(minGreaterThanMax));
      expect(screen.getByText(minOverHundred));
      expect(screen.getByText(maxOverHundred));
    });
  });
});

describe("Photo Options Input functionality tests", () => {
  beforeEach(() => {
    render(<PhotoOptionsInput setFilters={() => {}}></PhotoOptionsInput>);
  });
  describe("ensureNumberKeyDown functionality testing", () => {
    test("Should not change single-album-number-input if non-numeric keys are pressed", async () => {
      const singleInput = screen
        .getByTestId("single-album-number-input")
        .querySelector("input");
      if (singleInput) {
        fireEvent.change(singleInput, { target: { value: "A" } });
        fireEvent.change(singleInput, { target: { value: "B" } });
        fireEvent.change(singleInput, { target: { value: "A-aeerab" } });
        expect(singleInput.value).toBe("");
      }
    });
    test("Should change single-album-number-input if numeric keys are pressed", () => {
      const singleInput = screen
        .getByTestId("single-album-number-input")
        .querySelector("input");
      if (singleInput) {
        fireEvent.change(singleInput, { target: { value: "123" } });
        expect(singleInput.value).toBe("123");
      }
    });
    test("Should not change max-album-number-input if non-numeric keys are pressed", async () => {
      const singleInput = screen
        .getByTestId("max-album-number-input")
        .querySelector("input");
      if (singleInput) {
        fireEvent.change(singleInput, { target: { value: "A" } });
        fireEvent.change(singleInput, { target: { value: "B" } });
        fireEvent.change(singleInput, { target: { value: "A-aeerab" } });
        expect(singleInput.value).toBe("");
      }
    });
    test("Should change max-album-number-input if numeric keys are pressed", () => {
      const singleInput = screen
        .getByTestId("max-album-number-input")
        .querySelector("input");
      if (singleInput) {
        fireEvent.change(singleInput, { target: { value: "123" } });
        expect(singleInput.value).toBe("123");
      }
    });
    test("Should not change min-album-number-input if non-numeric keys are pressed", async () => {
      const singleInput = screen
        .getByTestId("min-album-number-input")
        .querySelector("input");
      if (singleInput) {
        fireEvent.change(singleInput, { target: { value: "A" } });
        fireEvent.change(singleInput, { target: { value: "B" } });
        fireEvent.change(singleInput, { target: { value: "A-aeerab" } });
        expect(singleInput.value).toBe("");
      }
    });
    test("Should change min-album-number-input if numeric keys are pressed", () => {
      const singleInput = screen
        .getByTestId("min-album-number-input")
        .querySelector("input");
      if (singleInput) {
        fireEvent.change(singleInput, { target: { value: "123" } });
        expect(singleInput.value).toBe("123");
      }
    });
  });
});
