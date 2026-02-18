type Props = Record<string, unknown>

export const MapBlockComponent = ({ block }: { block: Props }) => {
  return (
    <section data-block="map">
      <pre>{JSON.stringify(block, null, 2)}</pre>
    </section>
  )
}
