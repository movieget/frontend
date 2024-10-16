import { useState } from "react";

const useImagePreview = () => {
  const [image, setImage] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string); // 이미지 업데이트
      };
      reader.readAsDataURL(file);
    }
  };

  const resetImage = (fileInput: HTMLInputElement) => {
    setImage(null);
    fileInput.value = ""; // 파일 입력 초기화
  };

  return { image, handleImageChange, resetImage };
};

export default useImagePreview;
