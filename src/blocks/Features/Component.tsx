type Props = Record<string, unknown>

export const FeaturesBlockComponent = ({ block }: { block: Props }) => {
  return (
    <section data-block="features">
      <pre>{JSON.stringify(block, null, 2)}</pre>
    </section>
  )
}
