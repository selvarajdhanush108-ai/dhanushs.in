import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <motion.div
        className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
      <div className="absolute font-bold text-xl text-gradient tracking-widest mt-24">
        DHANUSH
      </div>
    </div>
  );
};

export default Loader;
