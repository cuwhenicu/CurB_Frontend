import {
  Avatar,
  Modal,
  ModalContent,
  ModalOverlay,
  Select,
  useDisclosure,
} from "@chakra-ui/react";
import { faCloudArrowUp, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import CropUploadImg from "./CropUploadImg";
import styles from "./UploadFeed.module.scss";

const UploadFeed = () => {
  const { register, handleSubmit, getValues } = useForm();
  const [previewImg, setPreviewImg] = useState();
  const navigate = useNavigate();

  const { isOpen, onOpen, onClose } = useDisclosure();

  /**썸네일 보기 */
  const changeImg = async (e: any) => {
    const reader: any = new FileReader();
    const file = e.target.files[0];

    reader.readAsDataURL(file);

    const data: any = URL.createObjectURL(file);

    // reader.onloadend = () => {
    //   setPreviewImg(reader.result);
    // };
    setPreviewImg(data);
    onOpen();
  };

  /**제출하기 */
  const submitHandler = (data: any) => {
    console.log(data);
    return;
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent>
          <CropUploadImg previewImg={previewImg} />
        </ModalContent>
      </Modal>

      <form onSubmit={handleSubmit(submitHandler)} className={styles.postForm}>
        <div className={styles.postFormHeader}>
          <button onClick={() => navigate("/main")}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <h3>새 게시물 작성하기</h3>
          <button onSubmit={handleSubmit(submitHandler)}>업로드하기</button>
        </div>

        <div className={styles.postFormMain}>
          <div className={styles.fileForm}>
            {!previewImg ? (
              <>
                <input
                  type="file"
                  {...register("file")}
                  accept="image/*"
                  onChange={changeImg}
                />
                <button>
                  <FontAwesomeIcon
                    icon={faCloudArrowUp}
                    size="5x"
                    style={{ color: "skyblue" }}
                  />
                </button>
              </>
            ) : (
              <img alt=" " className={styles.previewImg} src={previewImg} />
            )}
          </div>

          <div className={styles.postFormDiv}>
            <Select
              placeholder="카테고리를 입력해주세요"
              size="sm"
              {...register("category", {
                required: true,
              })}
            >
              <option>스펙평가 A vs B</option>
            </Select>
            <div className={styles.postFormNickname}>
              <Avatar name="닉네임" size="xs" />
              <p>닉네임</p>
            </div>
            <textarea
              className={styles.contents}
              placeholder="내용을 입력해주세요..."
              {...register("content")}
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default UploadFeed;
