type Props = Record<string, unknown>

export const FAQBlockComponent = ({ block }: { block: Props }) => {
  return (
    <section data-block="faq">
      <pre>{JSON.stringify(block, null, 2)}</pre>
    </section>
  )
}
