import { useEffect, useState } from "react";
import { getPhotos } from "../../api/api";
import { useApi } from "../../api/useApi";
import PhotoDisplay from "./PhotoDisplay";
import PhotoOptionsInput from "./PhotoOptionsInput";
import { Container } from "@mui/material";
import { PhotoResponse } from "../../types/types";
import { filterPhotos } from "./utilities";

function PhotoPage(props: { title: string }) {
  const { title } = props;
  useEffect(() => {
    document.title = title;
  }, []);
  const [filters, setFilters] = useState<number[]>([]);
  const getPhotosApi = useApi(getPhotos);
  const photosToUse: [] = getPhotosApi.data ? getPhotosApi.data : [];

  useEffect(() => {
    async function callPhotos() {
      await getPhotosApi.request();
    }
    callPhotos();
  }, []);

  const filteredPhotos: PhotoResponse[] = filterPhotos(filters, photosToUse);

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
