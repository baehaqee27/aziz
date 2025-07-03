declare module "@bytescale/upload-widget-react" {
  interface UploadWidgetOptions {
    apiKey: string;
    cloudName?: string;
    maxFileCount?: number;
    maxFileSizeBytes?: number;
    showSkipButton?: boolean;
    styles?: {
      colors?: {
        primary?: string;
      };
    };
  }

  interface UploadWidgetProps {
    options: UploadWidgetOptions;
    onComplete?: (files: any[]) => void;
    onError?: (error: any) => void;
    children: (props: { open: () => void }) => React.ReactNode;
  }

  export const UploadWidget: React.FC<UploadWidgetProps>;
}
