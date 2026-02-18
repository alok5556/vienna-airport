type Props = Record<string, unknown>

export const TestimonialsBlockComponent = ({ block }: { block: Props }) => {
  return (
    <section data-block="testimonials">
      <pre>{JSON.stringify(block, null, 2)}</pre>
    </section>
  )
}
