import { useEffect, useRef } from "react";
import Editor from "@monaco-editor/react";
import editorService from "./EditorService";

export const ResultView = () => {
  const editorRef = useRef<any>(null);

  function handleEditorDidMount(editor: any, monaco: any) {
    editorRef.current = editor;
  }

  function handleEditorChange(value: any, event: any) {
    console.log("here is the current model value:", value);
  }

  useEffect(() => {
    let subscription = editorService.result$.subscribe((arg) => {
      editorRef.current.setValue(arg);
    });
    return () => {
      subscription.unsubscribe();
    };
  });

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
