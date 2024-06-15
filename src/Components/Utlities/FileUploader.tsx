import { Input, Button } from "@nextui-org/react";
import React, { useRef, useState, forwardRef } from "react";
import { UploadIcon } from "lucide-react";

interface FileUploaderProps {
  file: File | null;
  setFile: (file: File | null) => void;
}

export const FileUploader: React.FC<FileUploaderProps> = ({
  file,
  setFile,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0] || null;
    setFile(selectedFile);
    console.log("Selected file:", selectedFile);
  };

  return (
    <div>
      <Input
        fullWidth={true}
        ref={fileInputRef}
        type="file"
        className="hidden"
        onChange={handleFileChange}
      />
      <Button onClick={handleFileClick} fullWidth={true}>
        File Uploader <UploadIcon />
      </Button>
      {file && <p>Selected file: {file.name}</p>}
    </div>
  );
};
