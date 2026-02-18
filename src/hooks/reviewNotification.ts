import type { CollectionAfterChangeHook } from 'payload'

export const reviewNotificationHook: CollectionAfterChangeHook = async ({ doc, previousDoc }) => {
  if (doc?.status === 'review' && previousDoc?.status !== 'review') {
    // placeholder for email or messaging integration
  }

  return doc
}
