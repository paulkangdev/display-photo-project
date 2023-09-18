import {
  Dialog,
  DialogContent,
  DialogTitle,
  Button,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { PhotoResponse } from "../../types/types";
import PhotoGrid from "./PhotoGrid";

function PhotoDisplay(props: any) {
  const { photos } = props;
  const [showModal, setShowModal] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState<PhotoResponse>(
    {} as PhotoResponse
  );

  return (
    <>
      <PhotoGrid
        photos={photos}
        setShowModal={setShowModal}
        setCurrentPhoto={setCurrentPhoto}
      ></PhotoGrid>
      <Dialog
        hideBackdrop={false}
        open={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        aria-describedBy={`enlarge-button-id-${currentPhoto.id}`}
        maxWidth="md"
      >
        <DialogTitle>
          <Typography variant="h5" noWrap component="p">
            {`Album ${currentPhoto.albumId}, Photo #${currentPhoto.id}`}
          </Typography>
          <Typography variant="h6" noWrap component="p">
            {currentPhoto.title}
          </Typography>
        </DialogTitle>
        <DialogContent>
          <img src={currentPhoto.url} />
        </DialogContent>
        <Button
          id={`close-modal`}
          onClick={() => {
            setShowModal(false);
          }}
        >
          Close enlarged view
        </Button>
      </Dialog>
    </>
  );
}
export default PhotoDisplay;
