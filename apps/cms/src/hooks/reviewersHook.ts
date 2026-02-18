import type { CollectionAfterChangeHook } from 'payload';

export const reviewersHook: CollectionAfterChangeHook = async ({ doc, req }) => {
  const typedDoc = doc as { workflowState?: string; reviewerEmail?: string; title?: string };
  if (typedDoc.workflowState === 'review' && typedDoc.reviewerEmail) {
    await req.payload.sendEmail({
      to: typedDoc.reviewerEmail,
      subject: `Review requested: ${typedDoc.title ?? 'Untitled'}`,
      text: `Page ${typedDoc.title ?? 'Untitled'} is ready for review.`,
    });
  }
  return doc;
};
