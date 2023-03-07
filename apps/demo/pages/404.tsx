// External libraries
import { AnimatePresence, motion } from "framer-motion";

// SK Components
import {
  Button,
  ContentLayout,
  MaterialIcon,
  transition,
  useAnimationConfig,
} from "@suankularb-components/react";

// Utilities
import { CustomPage } from "@/utils/types";

const NotFoundPage: CustomPage = () => {
  const { duration, easing } = useAnimationConfig();

  return (
    <>
      {/* Back Button section */}
      <ContentLayout
        className="absolute inset-0 bottom-auto !px-2 !pt-4 sm:!px-6
          sm:!pt-11"
      >
        <div>
          <Button
            appearance="text"
            icon={<MaterialIcon icon="arrow_backward" />}
            alt="Back"
            onClick={() => history.back()}
          />
        </div>
      </ContentLayout>

      {/* Error section */}
      <div
        className="grid h-[calc(100vh-5rem)] place-content-center
          supports-[height:100dvh]:h-[calc(100dvh-5rem)] sm:h-screen"
      >
        <AnimatePresence>
          {/* 404 code */}
          <motion.h1
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={transition(duration.long4, easing.standardDecelerate)}
            className="font-display from-primary-40 to-secondary-80
              dark:from-primary-80 dark:to-secondary-40
              supports-[-webkit-text-stroke]:text-background bg-gradient-to-b
              bg-clip-text text-[12rem] font-bold leading-none
              supports-[-webkit-text-stroke]:[-webkit-text-stroke:8px_transparent]"
          >
            404
          </motion.h1>

          {/* Description */}
          <motion.p
            className="skc-display-small"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ...transition(duration.long4, easing.standardDecelerate),
              delay: duration.medium2,
            }}
          >
            Page not found
          </motion.p>
        </AnimatePresence>
      </div>
    </>
  );
};

export default NotFoundPage;
