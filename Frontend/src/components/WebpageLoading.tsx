import { motion } from "framer-motion";

function WebpageLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black overflow-hidden">
      <div className="relative flex flex-col items-center gap-6">

        <motion.div
          className="absolute w-80 h-80 rounded-full bg-yellow-400/10 blur-[130px]"
          animate={{ scale: [1, 1.25, 1], opacity: [0.35, 0.7, 0.35] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="relative flex items-center justify-center w-24 h-24">

          <motion.div
            className="absolute w-full h-full border border-yellow-300/20 rounded-full"
            animate={{ rotate: 360 }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <motion.div
            className="absolute w-16 h-16 border border-yellow-400/40 rounded-full"
            animate={{ rotate: -360 }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <motion.div
            className="text-yellow-300 text-2xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            ⚔
          </motion.div>

        </div>

        <motion.h1
          className="text-white text-xl tracking-widest font-medium"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          NeuroArena
        </motion.h1>

        <p className="text-white/40 text-sm">
          Initializing combat AI...
        </p>

        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="w-2 h-2 rounded-full bg-yellow-300/70"
              animate={{ y: [0, -8, 0], opacity: [0.3, 1, 0.3] }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: i * 0.15,
              }}
            />
          ))}
        </div>

      </div>
    </div>
  );
}

export default WebpageLoading;