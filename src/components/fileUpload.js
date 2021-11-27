import React, { Fragment, useCallback, useState, useContext, useEffect, useRef } from 'react';
import { useDropzone } from 'react-dropzone';
import FileRenderer from './fileRenderer';
import AppContext from '../context/appContext';
import { useRouter } from 'next/router';
import Modal from 'react-modal';
import Converters from '../data/converters';
import ExcelPage from './pages/excel/excelPage';
import ImagePage from './pages/image/imagePage';
import { getDependentsFromExt, getExtFromName } from '../lib/util';


Modal.setAppElement('#__next')

export default function FileUpload() {
	const router = useRouter();
	const routerQueryPrefix = router.query.prefix;
	const myCallbacksList = useRef([]);

	let { appState, setAppState } = useContext(AppContext);

	useEffect(() => {
		//https://maksimrv.medium.com/usestate-with-callback-d574298eb8bd
		myCallbacksList.current.forEach((callback) => callback());
		myCallbacksList.current = [];
	}, [appState]);

	useEffect(() => {
		let files= appState.files;
		if(files.length){
			let file=files[0];
			let pathPrefix=getExtFromName(file.name);
			router.push(`/?prefix=${pathPrefix}`, `/${pathPrefix}`, { shallow: true });

		}
	}, [appState.files]);

	const onDrop = useCallback((acceptedFiles) => {
		console.log('appState.files..', appState.files);
		let files = appState.files;
		files = [...acceptedFiles];
		let { prefix } = getDependentsFromExt();
		setAppState(Object.assign({}, { ...appState, files: files }));
	}, []);

	const getComponentTobeRenderd = () => {
		let DecidedComponent = '';
		let path = '';
		switch (routerQueryPrefix) {
			// case Converters.audio.prefix:
			//     break;
			// case Converters.video.prefix:
			//     break;
			case Converters.image.prefix:
				DecidedComponent = ImagePage;

				break;
			// case Converters.document.prefix:
			//     break;
			// case Converters.ppt.prefix:
			//     break;
			case Converters.excel.prefix:
				DecidedComponent = ExcelPage;
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

		return <DecidedComponent />;
	};

	const fileValidator = (file) => {
		let ext = getExtFromName(file.name);

		console.log('file validator: ', file);

		// if (file.name.length > maxLength) {
		//   return {
		//     code: "name-too-large",
		//     message: `Name is larger than ${maxLength} characters`
		//   };
		// }

		return null;
	};

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		maxFiles: 1,
		validator: fileValidator,
	});

	return (
		<Fragment>
			<div
				{...getRootProps()}
				className={` mt-20 border-4 border-dashed  h-80 flex justify-center items-center rounded-md ${
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