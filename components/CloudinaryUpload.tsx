"use client";

import React, { useState } from "react";
import { Upload } from "lucide-react";

interface CloudinaryUploadProps {
  onUploadSuccess: (url: string) => void;
}

export default function CloudinaryUpload({
  onUploadSuccess,
}: CloudinaryUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      if (selectedFile.size > 5000000) {
        // 5MB limit
        setError("Ukuran file terlalu besar. Batas maksimum adalah 5MB.");
        return;
      }
      setFile(selectedFile);
      setError(null);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setError("Silakan pilih file untuk diunggah.");
      return;
    }

    setUploading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "pacbulunews-img"); // Ganti jika Anda memiliki preset tertentu
      formData.append("folder", "pacbulunews"); // Folder di Cloudinary

      const cloudName =
        process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "dpcmxtxnb";
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      if (data.secure_url) {
        onUploadSuccess(data.secure_url);
        setUploading(false);
        setFile(null);
      } else {
        throw new Error("No secure_url returned from Cloudinary");
      }
    } catch (err) {
      setError(
        `Gagal mengunggah: ${
          err instanceof Error ? err.message : "Unknown error"
        }`
      );
      setUploading(false);
    }
  };

  return (
    <div className="mb-4">
      <label className="block text-teal-700 mb-1 font-medium">
        Unggah Gambar Header
      </label>
      {error && <p className="text-red-600 mb-2 text-sm">{error}</p>}
      <div className="flex items-center space-x-2">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="w-full p-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          disabled={uploading}
        />
        <button
          type="button"
          onClick={handleUpload}
          className={`py-2 px-4 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors flex items-center justify-center ${
            uploading || !file ? "opacity-70 cursor-not-allowed" : ""
          }`}
          disabled={uploading || !file}
        >
          <Upload className="mr-2" size={18} />
          {uploading ? "Mengunggah..." : "Unggah"}
        </button>
      </div>
      <p className="text-gray-500 text-xs mt-1">
        Klik untuk memilih gambar header dan unggah ke Cloudinary. Batas ukuran
        file: 5MB.
        <br />
        Catatan: Implementasi unggah Cloudinary saat ini menggunakan URL
        placeholder. Untuk unggah sebenarnya, diperlukan endpoint server-side.
      </p>
    </div>
  );
}
