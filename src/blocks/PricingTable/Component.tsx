type Props = Record<string, unknown>

export const PricingTableBlockComponent = ({ block }: { block: Props }) => {
  return (
    <section data-block="pricingTable">
      <pre>{JSON.stringify(block, null, 2)}</pre>
    </section>
  )
}
