import { motion } from 'framer-motion';
import { Card, Button } from '@va/ui';
import { formatters } from '@va/config';

interface BlockRendererProps {
  blocks: Array<Record<string, unknown>>;
  locale: string;
}

export const BlockRenderer = ({ blocks, locale }: BlockRendererProps) => (
  <div className="space-y-6">
    {blocks.map((block, index) => {
      const type = block.blockType as string;
      return (
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.03 }}
          key={`${type}-${index}`}
        >
          <Card>
            <h2 className="mb-2 text-xl font-semibold capitalize">{type}</h2>
            <pre className="whitespace-pre-wrap text-xs text-slate-600">{JSON.stringify(block, null, 2)}</pre>
            {type === 'pricingTable' ? (
              <p className="mt-4 text-sm text-slate-700">
                {formatters.currency(locale).format(Number((block as { plans?: Array<{ price?: number }> }).plans?.[0]?.price ?? 0))}
              </p>
            ) : null}
            {type === 'cta' ? <Button className="mt-4">Action</Button> : null}
          </Card>
        </motion.section>
      );
    })}
  </div>
);
