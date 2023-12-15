"use client";
import { useRef, useState, ChangeEvent } from "react";
import classes from "@/styles/image-picker.module.css";
import Image from "next/image";

interface ImagePicker {
  label: string;
  name: string;
}

const ImagePicker = ({ label, name }: ImagePicker) => {
  const imageInput = useRef<HTMLInputElement>(null);
  const [previewImape, setPreviewImage] = useState("");
  const handlePickImage = () => {
    if (imageInput.current) {
      imageInput.current.click();
    }
  };

  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const image = e.target.files[0];

      const fr = new FileReader();

      fr.readAsDataURL(image);

      fr.onloadend = () => {
        if (fr.result) {
          const result = fr.result;
          setPreviewImage(result as string);
        }
      };
    }
  };
  return (
    <div className={classes.picker}>
      <label htmlFor={name}></label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {previewImape && <Image src={previewImape} alt="food image" fill />}
          {!previewImape && <p>No Image Selected</p>}
        </div>
        <input
          ref={imageInput}
          className={classes.input}
          type="file"
          id={name}
          name={name}
          accept="image/jpeg, image/png"
          onChange={(e) => handleChangeImage(e)}
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlePickImage}
        >
          Pick Any Image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
