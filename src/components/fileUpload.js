import React, { Fragment, useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone';
import prettyBytes from 'pretty-bytes';
import FileRenderer from './fileRenderer';

export default function FileUpload() {


    const [state, setState] = useState({
        files: []
    })

    const onDrop = useCallback(acceptedFiles => {
        console.log("called..");
        let files = state.files;
        files.push(acceptedFiles);
        setState({ files: files });
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    return (

        <Fragment>


            <div {...getRootProps()} className={`border-4 border-dashed w-80 h-80 flex justify-center items-center rounded-md ${!isDragActive ? 'border-gray-300' : 'border-primary'}`}>
                <input {...getInputProps()} />
                {
                    isDragActive ?
                        <p className="text-primary">Drop the files here ...</p> :
                        <p>Drag 'n' drop some files here, or click to select files</p>
                }
            </div>
            <div>
                {
                    state.files.map(file => {
                        return (
                            <FileRenderer name={file.path} />
                        )
                    })}
            </div>
        </Fragment>
    )
}
