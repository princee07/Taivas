import { motion } from "framer-motion";

interface Event {
  title: string;
  instructor?: string;
  time?: string;
  location?: string;
  description?: string;
  image?: string;
}

interface HeroBannerProps {
  event: Event | null;
}

const HeroBanner: React.FC<HeroBannerProps> = ({ event }) => {
  return (
    <motion.div
      className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {event && event.image ? (
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="flex items-center justify-center h-full text-gray-500">
          Click an event day to view details
        </div>
      )}
    </motion.div>
  );
};

export default HeroBanner;