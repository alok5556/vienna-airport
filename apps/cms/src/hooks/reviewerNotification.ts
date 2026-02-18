import type { CollectionAfterChangeHook } from 'payload';

export const reviewerNotification: CollectionAfterChangeHook = async ({ req, doc, previousDoc }) => {
  if (!previousDoc) return doc;
  if (previousDoc.status !== 'review' && doc.status === 'review') {
    await req.payload.logger.info(`Reviewer notification dispatched for page ${doc.slug}`);
  }
  return doc;
};
