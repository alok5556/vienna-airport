type Props = Record<string, unknown>

export const TextBlockComponent = ({ block }: { block: Props }) => {
  return (
    <section data-block="text">
      <pre>{JSON.stringify(block, null, 2)}</pre>
    </section>
  )
}
