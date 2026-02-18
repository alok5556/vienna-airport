type Props = Record<string, unknown>

export const CTABlockComponent = ({ block }: { block: Props }) => {
  return (
    <section data-block="cta">
      <pre>{JSON.stringify(block, null, 2)}</pre>
    </section>
  )
}
