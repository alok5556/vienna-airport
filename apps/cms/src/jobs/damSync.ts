import type { TaskConfig } from 'payload';

export const damSyncJob: TaskConfig<'dam-sync'> = {
  retries: 1,
  slug: 'dam-sync',
  outputSchema: [],
  handler: async ({ req }) => {
    const approvedAssets = [
      { filename: 'approved-lounge.jpg', alt: 'Approved lounge asset', damApproved: true },
      { filename: 'approved-fasttrack.pdf', alt: 'FastTrack brochure', damApproved: true },
    ];

    for (const asset of approvedAssets) {
      await req.payload.create({
        collection: 'media',
        data: {
          ...asset,
          folder: 'dam/imported',
          tags: [{ value: 'dam' }, { value: 'approved' }],
        },
      });
    }

    return { output: { synced: approvedAssets.length } };
  },
};
