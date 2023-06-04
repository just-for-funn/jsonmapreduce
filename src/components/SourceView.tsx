import { useEffect, useRef } from "react";
import Editor from "@monaco-editor/react";
import editorService from "./EditorService";
import { sourceSample } from "./samples";

export const SourceView = () => {
  const editorRef = useRef<any>(null);

  function handleEditorDidMount(editor: any, monaco: any) {
    editorRef.current = editor;
    var str = JSON.stringify(sourceSample, null, 4);
    editorRef.current.setValue(str);
    editorService.setSource(str);
  }

  function handleEditorChange(value: any, event: any) {
    editorService.setSource(value);
  }

  return (
    <>
      <Editor
        height="100%"
        width={"100%"}
        defaultLanguage="json"
        defaultValue="// some comment"
        theme={"vs-dark"}
        onMount={handleEditorDidMount}
        onChange={handleEditorChange}
      />
    </>
  );
};
