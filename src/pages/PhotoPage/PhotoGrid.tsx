import {
  Avatar,
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  Grid,
  Button,
  Typography,
  Pagination,
  Container,
  Box,
  Stack,
} from "@mui/material";
import { useEffect, useState } from "react";
import { PhotoResponse } from "../../types/types";

function PhotoGrid(props: {
  photos: PhotoResponse[];
  setCurrentPhoto: React.Dispatch<React.SetStateAction<PhotoResponse>>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { photos, setCurrentPhoto, setShowModal } = props;
  const [page, setPage] = useState(1);
  const [elementsPerPage, setElementsPerPage] = useState(12);
  const [photosToDisplay, setPhotosToDisplay] = useState<PhotoResponse[]>([]);
  const [pageCount, setPageCount] = useState(10);

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  function handleElementsPerPage(numberOfElements: number) {
    const currentLowElement = (page - 1) * elementsPerPage + 1;
    setElementsPerPage(numberOfElements);
    setPage(Math.floor(currentLowElement / numberOfElements) + 1);
  }

  useEffect(() => {
    setPage(1);
  }, [photos]);

  useEffect(() => {
    const minIndex = (page - 1) * elementsPerPage;
    const maxIndex = page * elementsPerPage;
    setPageCount(Math.ceil((photos.length - 1) / elementsPerPage));
    setPhotosToDisplay(photos.slice(minIndex, maxIndex));
  }, [page, elementsPerPage, photos]);
  return (
    <Container>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          my: 2,
          flexWrap: "wrap",
        }}
      >
        <Stack sx={{ my: 1, display: "flex", alignItems: "center" }}>
          <Pagination
            size="large"
            count={pageCount}
            page={page}
            onChange={handleChange}
          />
        </Stack>
        <Box sx={{ my: 1 }}>
          <Typography component="p">
            Number of items to display per page:
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <Button
              size="medium"
              variant={elementsPerPage === 12 ? "outlined" : "text"}
              color={elementsPerPage === 12 ? "secondary" : "primary"}
              onClick={() => handleElementsPerPage(12)}
            >
              12
            </Button>
            <Button
              size="medium"
              variant={elementsPerPage === 24 ? "outlined" : "text"}
              color={elementsPerPage === 24 ? "secondary" : "primary"}
              onClick={() => handleElementsPerPage(24)}
            >
              24
            </Button>
          </Box>
        </Box>
      </Box>
      <Grid container spacing={2}>
        {photosToDisplay?.map((elem: PhotoResponse) => (
          <Grid
            key={`grid-item-${elem.id}`}
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            xl={3}
          >
            <Card sx={{ height: "100%" }} variant="outlined">
              <CardHeader
                sx={{ height: "80px", textAlign: "left" }}
                avatar={
                  <>
                    <Avatar sx={{ width: 50, height: 50 }}>{elem.id}</Avatar>
                  </>
                }
                title={`Album #${elem.albumId}`}
                subheader={
                  elem.title.charAt(0).toUpperCase() + elem.title.slice(1)
                }
              />
              <CardMedia
                component="img"
                height="250"
                image={elem.thumbnailUrl}
                alt={elem.title}
                sx={{ objectFit: "contain" }}
              />
              <CardActions sx={{ display: "flex", justifyContent: "center" }}>
                <Button
                  key={`enlarge-button-${elem.id}`}
                  id={`enlarge-button-id-${elem.id}`}
                  onClick={() => {
                    setCurrentPhoto({
                      id: elem.id,
                      albumId: elem.albumId,
                      title: elem.title,
                      url: elem.url,
                      thumbnailUrl: elem.thumbnailUrl,
                    });
                    setShowModal(true);
                  }}
                  sx={{
                    display: { xs: "none", sm: "block" },
                  }}
                >
                  Enlarged view
                </Button>
                <Typography
                  variant="caption"
                  component="p"
                  sx={{ display: { xs: "block", sm: "none" } }}
                >
                  Enlarged photo view is disabled in extra small view. Please
                  widen your browser window.
                </Typography>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
export default PhotoGrid;
