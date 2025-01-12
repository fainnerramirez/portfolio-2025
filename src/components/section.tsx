import { motion } from "motion/react";

type Props = {
  key?: string;
  children: React.ReactNode;
};

export const Section: React.FC<Props> = ({ children, key }) => {
  return (
    <motion.div
      key={key}
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 1.5 }}
      style={{ marginTop: 10 }}
    >
      {children}
    </motion.div>
  );
};
