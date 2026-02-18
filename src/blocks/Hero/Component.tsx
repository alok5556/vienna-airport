type Props = Record<string, unknown>

export const HeroBlockComponent = ({ block }: { block: Props }) => {
  return (
    <section data-block="hero">
      <pre>{JSON.stringify(block, null, 2)}</pre>
    </section>
  )
}
