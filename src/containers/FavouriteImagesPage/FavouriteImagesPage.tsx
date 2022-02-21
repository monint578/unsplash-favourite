import React, { useCallback, useMemo, useState } from "react";
import { UnsplashImage } from "../../types/Images";
import { useUnslashPhotoList } from "../../api/api";
import Image from "../../components/Image/Image";
import Loader from "../../components/Loader/Loader";
import { MasonryGrid } from "../../theme/GlobalComponents.style";
import { Modal } from "../../components/Modal/Modal";
import { ImageDetailsDialog } from "../Dialogs/ImageDetailsDialog/ImageDetailsDialog";
import { useModal } from "../../state/useModal";
import EmptyPage from "../EmptyPage/EmptyPage";

export default function FavouriteImagesPage() {
  const { parsedImagesList, isLoaded, error } = useUnslashPhotoList();
  const [id, setId] = useState<string>("");
  const { isModalOpen, toggleModal } = useModal();

  const handleClick = useCallback(
    (id: string) => {
      setId(id);
      toggleModal();
    },
    [toggleModal]
  );

  const imageList = useMemo(() => parsedImagesList, [parsedImagesList]);

  if (!isLoaded || error) return <Loader />;

  if (imageList.length === 0) return <EmptyPage />;

  return (
    <>
      <MasonryGrid>
        {imageList.map((image: UnsplashImage) => (
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
        headerText="Confirmation"
        modalSize="lg"
        modalContent={<ImageDetailsDialog id={id} />}
      />
    </>
  );
}
