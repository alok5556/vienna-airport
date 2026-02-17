import type { Field } from 'payload';

export const dragDropUploadField: Field = {
  name: 'galleryUpload',
  label: 'Drag & drop gallery upload',
  type: 'ui',
  admin: {
    components: {
      Field: {
        path: '@/components/DragDropUploadField#DragDropUploadField',
      },
    },
  },
};
