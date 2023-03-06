// SK Components
import {
  Button,
  ContentLayout,
  MaterialIcon,
} from "@suankularb-components/react";

// Utilities
import { CustomPage } from "@/utils/types";

const NotFoundPage: CustomPage = () => (
  <>
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
    <div
      className="grid h-[calc(100vh-5rem)] place-content-center
        supports-[height:100dvh]:h-[calc(100dvh-5rem)] sm:h-screen"
    >
      <h1
        className="font-display from-primary-40 to-secondary-80
          dark:from-primary-80 dark:to-secondary-40
          supports-[-webkit-text-stroke]:text-background bg-gradient-to-b
          bg-clip-text text-[12rem] font-bold leading-none
          supports-[-webkit-text-stroke]:[-webkit-text-stroke:8px_transparent]"
      >
        404
      </h1>
      <p className="skc-display-small">Page not found</p>
    </div>
  </>
);

export default NotFoundPage;
