import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";
import {useRef} from "react";
import editorService from "./EditorService";

export const EditorWrapper = () => {
    const editorRef = useRef<any>(null);

    function handleEditorDidMount(editor: any, monaco: any) {
        editorRef.current = editor;
    }

    function handleEditorChange(value: any, event:any) {
        editorService.setBody(value);
    }

    return (
        <>
            <Editor
                height="100%"
                width={"100%"}
                defaultLanguage="javascript"
                defaultValue="// some comment"
                theme={"vs-dark"}
                onMount={handleEditorDidMount}
                onChange={handleEditorChange}
            />
        </>

    )
}