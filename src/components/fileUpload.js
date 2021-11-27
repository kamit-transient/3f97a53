import React, { Fragment, useCallback, useState, useContext } from "react";
import { useDropzone } from "react-dropzone";
import FileRenderer from "./fileRenderer";
import AppContext from "../context/appContext";
import { useRouter } from 'next/router'
import Modal from 'react-modal'


export default function FileUpload() {

	
	const router=useRouter();

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
		  
		     <Modal
        isOpen={!!router.query.prefix}
        onRequestClose={() => router.push('/')}
        contentLabel="Post modal"
      >
        <Post id={router.query.postId} pathname={router.pathname} />
      </Modal>
    </Fragment>
  );
}