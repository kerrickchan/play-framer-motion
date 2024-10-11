import { motion } from 'framer-motion';
import { useState } from 'react';

const ShakeButton = () => {
  const [isShaking, setIsShaking] = useState(false);

  const shakeVariants = {
    shake: {
      x: [-10, 10, -10, 10, -5, 5, -2, 2, 0],
      transition: {
        duration: 0.5
      }
    }
  };

  const handleClick = () => {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 500);
  };

  return (
    <motion.button
      variants={shakeVariants}
      animate={isShaking ? "shake" : ""}
      onClick={handleClick}
      style={{
        padding: '10px 20px',
        fontSize: '16px',
        border: 'none',
        backgroundColor: '#007bff',
        color: 'white',
        cursor: 'pointer',
        borderRadius: '5px'
      }}
    >
      Shake Me!
    </motion.button>
  );
};

export default ShakeButton;
