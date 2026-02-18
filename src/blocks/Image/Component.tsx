type Props = Record<string, unknown>

export const ImageBlockComponent = ({ block }: { block: Props }) => {
  return (
    <section data-block="image">
      <pre>{JSON.stringify(block, null, 2)}</pre>
    </section>
  )
}
