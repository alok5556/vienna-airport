type Props = Record<string, unknown>

export const AccordionBlockComponent = ({ block }: { block: Props }) => {
  return (
    <section data-block="accordion">
      <pre>{JSON.stringify(block, null, 2)}</pre>
    </section>
  )
}
