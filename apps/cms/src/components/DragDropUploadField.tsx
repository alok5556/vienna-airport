'use client';

import React, { useMemo, useState } from 'react';

type PreviewFile = {
  id: string;
  file: File;
  url: string;
};

type DragDropUploadFieldProps = {
  path: string;
};

export function DragDropUploadField({ path }: DragDropUploadFieldProps) {
  const [previews, setPreviews] = useState<PreviewFile[]>([]);

  const onDrop: React.DragEventHandler<HTMLLabelElement> = (event) => {
    event.preventDefault();
    const droppedFiles = Array.from(event.dataTransfer.files || []);
    const nextFiles = droppedFiles.map((file) => ({
      id: crypto.randomUUID(),
      file,
      url: URL.createObjectURL(file),
    }));
    setPreviews((current) => [...current, ...nextFiles]);
  };

  const previewNodes = useMemo(
    () =>
      previews.map((preview) => (
        <figure key={preview.id} className="rounded border border-gray-300 p-2">
          <img alt={preview.file.name} className="h-32 w-full rounded object-cover" src={preview.url} />
          <figcaption className="mt-2 truncate text-xs">{preview.file.name}</figcaption>
        </figure>
      )),
    [previews],
  );

  return (
    <div className="space-y-3">
      <label
        className="flex min-h-40 cursor-pointer items-center justify-center rounded border-2 border-dashed border-gray-300 bg-gray-50 p-4 text-center"
        htmlFor={`${path}-input`}
        onDragOver={(event) => event.preventDefault()}
        onDrop={onDrop}
      >
        Drag and drop images here, or click to browse
      </label>
      <input
        className="hidden"
        id={`${path}-input`}
        multiple
        name={path}
        onChange={(event) => {
          const files = Array.from(event.target.files || []);
          const nextFiles = files.map((file) => ({
            id: crypto.randomUUID(),
            file,
            url: URL.createObjectURL(file),
          }));
          setPreviews((current) => [...current, ...nextFiles]);
        }}
        type="file"
      />
      {previews.length > 0 ? <div className="grid grid-cols-2 gap-3 md:grid-cols-4">{previewNodes}</div> : null}
    </div>
  );
}
