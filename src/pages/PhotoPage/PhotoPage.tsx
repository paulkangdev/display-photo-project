import { useEffect, useMemo, useState } from "react";
import { getPhotos } from "../../api/api";
import { useApi } from "../../api/useApi";
import PhotoDisplay from "./PhotoDisplay";
import PhotoOptionsInput from "./PhotoOptionsInput";
import { Container } from "@mui/material";
import { PhotoResponse } from "../../types/types";
import { filterPhotos } from "./utilities";

function PhotoPage() {
  const [filters, setFilters] = useState<number[]>([]);
  const getPhotosApi = useApi(getPhotos);
  const photosToUse: [] = getPhotosApi.data ? getPhotosApi.data : [];

  const filteredPhotos: PhotoResponse[] = useMemo(
    () => filterPhotos(filters, photosToUse),
    [filters, photosToUse]
  );
  console.log(filters, photosToUse);
  useEffect(() => {
    getPhotosApi.request();
  }, []);

  return (
    <>
      <Container sx={{ my: 2 }}>
        <PhotoOptionsInput setFilters={setFilters}></PhotoOptionsInput>
      </Container>
      {getPhotosApi.data && (
        <PhotoDisplay photos={filteredPhotos}></PhotoDisplay>
      )}
    </>
  );
}

export default PhotoPage;
