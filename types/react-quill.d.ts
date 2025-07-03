declare module "react-quill" {
  import React from "react";

  interface QuillOptionsStatic {
    toolbar?: Array<Array<string | object>>;
  }

  interface ReactQuillProps {
    value?: string;
    onChange?: (value: string) => void;
    className?: string;
    placeholder?: string;
    modules?: QuillOptionsStatic;
    formats?: string[];
  }

  const ReactQuill: React.FC<ReactQuillProps>;

  export default ReactQuill;
}
