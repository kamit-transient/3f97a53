import React, { Fragment, useCallback, useState, useContext } from 'react';
import { useDropzone } from 'react-dropzone';
import FileRenderer from './fileRenderer';
import AppContext from '../context/appContext';
import { useRouter } from 'next/router';
import Modal from 'react-modal';
import Converters from '../data/converters';
import ExcelPage from "./pages/excel/excelPage";

export default function FileUpload() {
    const router = useRouter();
    const routerQueryPrefix = router.query.prefix;

    let { appState, setAppState } = useContext(AppContext);

    const onDrop = useCallback((acceptedFiles) => {
        console.log('called..');
        let files = appState.files;
        files = [...files, ...acceptedFiles];
        setAppState(Object.assign({}, { ...appState, files: files }));
    }, []);

    const getComponentTobeRenderd = () => {
		let DecidedComponent=""
        switch (routerQueryPrefix) {
            // case Converters.audio.prefix:
            //     break;
            // case Converters.video.prefix:
            //     break;
            // case Converters.image.prefix:
            //     break;
            // case Converters.document.prefix:
            //     break;
            // case Converters.ppt.prefix:
            //     break;
            case Converters.excel.prefix:
				DecidedComponent=ExcelPage
                break;
            // case Converters.db.prefix:
            //     break;
            // case Converters.document.prefix:
            //     break;
            // case Converters.xml.prefix:
            //     break;
            // case Converters.json.prefix:
            //     break;
            // case Converters.pdf.prefix:
            //     break;
            // case Converters.svg.prefix:
            //     break;
			
				
        }
		
		return (
		<DecidedComponent />
		)
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <Fragment>
            <div
                {...getRootProps()}
                className={`border-4 border-dashed w-80 h-80 flex justify-center items-center rounded-md ${
                    !isDragActive ? 'border-gray-300' : 'border-primary'
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
                isOpen={!!routerQueryPrefix}
                onRequestClose={() => router.push('/')}
                contentLabel="Post modal"
            >
                {getComponentTobeRenderd()}
            </Modal>
        </Fragment>
    );
}