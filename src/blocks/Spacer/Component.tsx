type Props = Record<string, unknown>

export const SpacerBlockComponent = ({ block }: { block: Props }) => {
  return (
    <section data-block="spacer">
      <pre>{JSON.stringify(block, null, 2)}</pre>
    </section>
  )
}
