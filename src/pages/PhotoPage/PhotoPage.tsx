import { useEffect, useState } from "react";
import PhotoDisplay from "./PhotoDisplay";
import PhotoOptionsInput from "./PhotoOptionsInput";
import { Box, Typography } from "@mui/material";
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
    return () => {};
  }, []);

  const filteredPhotos: PhotoResponse[] = filterPhotos(filters, photosToUse);
  return (
    <>
      <Box>
        <Typography variant="h6" component="h1">
          Welcome to Paul Kang's photo sorter!
        </Typography>
        <Typography component="p">
          A large number of photos (5000, to be exact) has been collected for
          you from{" "}
          <a href="https://jsonplaceholder.typicode.com/">
            https://jsonplaceholder.typicode.com/
          </a>
          .
        </Typography>
        <Typography component="p">
          Please use the filters below to view the photos by album, or provide
          a range of albums that you would like to see!
        </Typography>
      </Box>
      <Box sx={{ my: 2 }}>
        <PhotoOptionsInput setFilters={setFilters}></PhotoOptionsInput>
      </Box>
      {filteredPhotos.length > 0 ? (
        <PhotoDisplay photos={filteredPhotos}></PhotoDisplay>
      ) : (
        <Fallback message="Loading..."></Fallback>
      )}
    </>
  );
}

export default PhotoPage;
