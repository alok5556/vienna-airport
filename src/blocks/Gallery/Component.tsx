type Props = Record<string, unknown>

export const GalleryBlockComponent = ({ block }: { block: Props }) => {
  return (
    <section data-block="gallery">
      <pre>{JSON.stringify(block, null, 2)}</pre>
    </section>
  )
}
