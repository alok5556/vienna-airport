export function LocaleMeta({ locale }: { locale: string }) {
  const date = new Intl.DateTimeFormat(locale, { dateStyle: 'full', timeStyle: 'short' }).format(new Date());
  const passengers = new Intl.NumberFormat(locale).format(31500000);

  return (
    <div className="mb-4 rounded-lg bg-sky-50 p-3 text-sm text-sky-900">
      <p>Local time: {date}</p>
      <p>Annual passengers: {passengers}</p>
    </div>
  );
}
