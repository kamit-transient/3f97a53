import React, { Fragment, useCallback, useState, useContext } from "react";
import { useDropzone } from "react-dropzone";
import FileRenderer from "./fileRenderer";
import AppContext from "../context/appContext";

export default function FileUpload() {
  // const [state, setState] = useState({
  //   files: []
  // });

  let { appState, setAppState } = useContext(AppContext);

  const onDrop = useCallback((acceptedFiles) => {
    console.log("called..");
    let files = appState.files;
    files = [...files, ...acceptedFiles];
    setAppState({ files: files });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Fragment>
      <div
        {...getRootProps()}
        className={`border-4 border-dashed w-80 h-80 flex justify-center items-center rounded-md ${
          !isDragActive ? "border-gray-300" : "border-primary"
        }`}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p className="text-primary">Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>
      <div>
        {appState.files.map((file) => {
          return <FileRenderer file={file} />;
        })}
      </div>
    </Fragment>
  );
}
