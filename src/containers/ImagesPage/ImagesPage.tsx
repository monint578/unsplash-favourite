import React, { useCallback, useState } from "react";
import { UnsplashImage } from "../../types/Images";
import { useUnslashPhotoList } from "../../api/api";
import Image from "../../components/Image/Image";
import Loader from "../../components/Loader/Loader";
import { MasonryGrid } from "../../theme/GlobalComponents.style";
import { Modal } from "../../components/Modal/Modal";
import { ImageDetailsDialog } from "../Dialogs/ImageDetailsDialog/ImageDetailsDialog";
import { useModal } from "../../state/useModal";

export default function ImagePage() {
  const { imageListData, isLoaded, error } = useUnslashPhotoList();
  const [id, setId] = useState<string>("");
  const { isModalOpen, toggleModal } = useModal();

  const handleClick = useCallback(
    (id: string) => {
      setId(id);
      toggleModal();
    },
    [toggleModal]
  );

  if (!isLoaded || error) return <Loader />;

  return (
    <>
      <MasonryGrid>
        {imageListData.map((image: UnsplashImage) => (
          <Image
            key={image.id}
            url={image.urls.small}
            description={image.alt_description}
            handleClick={() => handleClick(image.id)}
            id={image.id}
          />
        ))}
      </MasonryGrid>
      <Modal
        isOpen={isModalOpen}
        handleClose={toggleModal}
        headerText="confirmation"
        modalSize="lg"
        modalContent={<ImageDetailsDialog id={id} />}
      />
    </>
  );
}
