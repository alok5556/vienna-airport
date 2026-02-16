'use client'

import React, { useCallback, useMemo, useState } from 'react'

type PreviewItem = {
  id: string
  name: string
  previewUrl: string
}

export const DragDropUploadField: React.FC = () => {
  const [items, setItems] = useState<PreviewItem[]>([])
  const [dragActive, setDragActive] = useState(false)

  const handleFiles = useCallback((files: FileList | null) => {
    if (!files) return
    const next = Array.from(files).map((file) => ({
      id: `${file.name}-${file.lastModified}`,
      name: file.name,
      previewUrl: URL.createObjectURL(file),
    }))

    setItems((prev) => [...prev, ...next])
  }, [])

  const onDrop = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setDragActive(false)
    handleFiles(event.dataTransfer.files)
  }, [handleFiles])

  const classes = useMemo(
    () =>
      `rounded-xl border-2 border-dashed p-6 transition ${
        dragActive ? 'border-blue-500 bg-blue-50' : 'border-slate-300 bg-white'
      }`,
    [dragActive],
  )

  return (
    <div className="space-y-4">
      <div
        className={classes}
        onDragOver={(e) => {
          e.preventDefault()
          setDragActive(true)
        }}
        onDragLeave={() => setDragActive(false)}
        onDrop={onDrop}
      >
        <p className="text-sm font-medium">Drag & drop files here</p>
        <p className="text-xs text-slate-500">or choose files from your computer</p>
        <input
          type="file"
          multiple
          className="mt-4 block w-full text-sm"
          onChange={(e) => handleFiles(e.target.files)}
        />
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {items.map((item) => (
          <div key={item.id} className="overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
            <img src={item.previewUrl} alt={item.name} className="h-24 w-full object-cover" />
            <p className="truncate px-2 py-1 text-xs">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
