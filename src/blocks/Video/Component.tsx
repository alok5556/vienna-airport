type Props = Record<string, unknown>

export const VideoBlockComponent = ({ block }: { block: Props }) => {
  return (
    <section data-block="video">
      <pre>{JSON.stringify(block, null, 2)}</pre>
    </section>
  )
}
