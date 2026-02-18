'use client';

import { motion } from 'framer-motion';

type Block = {
  id: string;
  blockType: string;
  [key: string]: unknown;
};

export function BlockRenderer({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((block) => (
        <motion.section key={block.id} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
          <h2 className="text-xl font-semibold capitalize">{block.blockType}</h2>
          <pre className="overflow-auto rounded-lg bg-slate-900 p-3 text-xs text-white">{JSON.stringify(block, null, 2)}</pre>
        </motion.section>
      ))}
    </div>
  );
}
