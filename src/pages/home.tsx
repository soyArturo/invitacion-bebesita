import { motion } from "motion/react";
import { useState } from "react";
import { Link } from "react-router";
import bgVideo from "../assets/bgVideo2.mp4";

const Home = () => {
  const [videoEnded, setVideoEnded] = useState(false);
  return (
    <div
      className="relative w-full h-full"
      style={{
        backgroundColor: "#edeceb",
      }}
    >
      <video
        autoPlay
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full z-0 object-fill"
        onEnded={() => setVideoEnded(true)}
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      <div className="relative z-10 flex items-center justify-center h-full">
        {videoEnded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Link
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-primary-foreground shadow-xs hover:bg-primary/90 h-10 px-8 py-6 has-[>svg]:px-4 text-3xl"
              style={{ backgroundColor: "#b9c8a8" }}
              to={{
                pathname: "/invitacion",
              }}
            >
              Abrir
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Home;
