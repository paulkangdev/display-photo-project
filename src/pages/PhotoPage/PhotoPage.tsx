import { useEffect, useState } from "react";
import PhotoDisplay from "./PhotoDisplay";
import PhotoOptionsInput from "./PhotoOptionsInput";
import { Container } from "@mui/material";
import { PhotoResponse } from "../../types/types";
import { filterPhotos } from "./utilities";
import { fetchAllPhotos } from "../../api/useApi";
import Fallback from "../../components/fallback/Fallback";

function PhotoPage(props: { title: string }) {
  const { title } = props;
  const [photosToUse, setPhotosToUse] = useState<PhotoResponse[]>([]);
  useEffect(() => {
    document.title = title;
  }, [title]);
  const [filters, setFilters] = useState<number[]>([]);

  useEffect(() => {
    async function getAllPhotos() {
      try {
        const response = await fetchAllPhotos();
        setPhotosToUse(response.data);
      } catch (e) {
        console.log(e);
      }
    }
    getAllPhotos();
    return () => {
    };
  }, []);

  const filteredPhotos: PhotoResponse[] = filterPhotos(filters, photosToUse);
  return (
    <>
      <Container sx={{ my: 2 }}>
        <PhotoOptionsInput setFilters={setFilters}></PhotoOptionsInput>
      </Container>
      {filteredPhotos.length > 0 ? (
        <PhotoDisplay photos={filteredPhotos}></PhotoDisplay>
      ) : (
        <Fallback message="Loading..."></Fallback>
      )}
    </>
  );
}

export default PhotoPage;
