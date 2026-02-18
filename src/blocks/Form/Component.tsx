type Props = Record<string, unknown>

export const FormBlockComponent = ({ block }: { block: Props }) => {
  return (
    <section data-block="form">
      <pre>{JSON.stringify(block, null, 2)}</pre>
    </section>
  )
}
