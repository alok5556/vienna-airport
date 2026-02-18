import type { CollectionAfterChangeHook } from 'payload';

export const sourceChangeNotification: CollectionAfterChangeHook = async ({ req, doc, previousDoc }) => {
  if (!previousDoc) return doc;
  const sourceLocale = req.locale ?? 'en';
  if (sourceLocale !== 'en') return doc;

  const targetLocales = ['de', 'sk', 'cz', 'hu'];
  await Promise.all(
    targetLocales.map(async (locale) => {
      await req.payload.logger.info(
        `Notify translators: page ${doc.id} source changed; locale=${locale}; updatedAt=${doc.updatedAt}`
      );
    })
  );

  return doc;
};
