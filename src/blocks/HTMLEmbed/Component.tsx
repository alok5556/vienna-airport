type Props = Record<string, unknown>

export const HTMLEmbedBlockComponent = ({ block }: { block: Props }) => {
  return (
    <section data-block="htmlEmbed">
      <pre>{JSON.stringify(block, null, 2)}</pre>
    </section>
  )
}
