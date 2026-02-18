import type { CollectionBeforeChangeHook } from 'payload'

export const pageWorkflowHook: CollectionBeforeChangeHook = async ({ data }) => {
  const now = new Date()

  if (data?.scheduledPublishAt && new Date(data.scheduledPublishAt) <= now) {
    data.status = 'published'
  }

  if (data?.expiresAt && new Date(data.expiresAt) <= now) {
    data.status = 'draft'
  }

  return data
}
