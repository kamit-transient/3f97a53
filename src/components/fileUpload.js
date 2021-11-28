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
import {GrClose} from "react-icons/gr"

Modal.setAppElement('#__next');
const modalStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
	},
};

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
		let files = appState.files;
		if (files.length) {
			let file = files[0];
			let ext = getExtFromName(file.name);
			let { pathPrefix } = getDependentsFromExt(ext);
			router.push(`/?prefix=${pathPrefix}`, `/${pathPrefix}`);
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
			<div className="pt-24">
				<Modal
					isOpen={!!routerQueryPrefix}
					onRequestClose={() => router.push('/')}
					contentLabel="Post modal"
					className="Content"
					overlayClassName="Overlay"
				>
					<div className="flex flex-col font-body">
						<div className="bg-gray-900 text-white h-10 flex items-center justify-between px-5">
							<div>
							<h1>Hello</h1>
							</div>
							<div>
							<button onClick={() => router.push('/')} className=" opacity-50 flex items-center justify-center gap-1 "> <GrClose color="red" /> Close</button>
							</div>
							
						</div>
						<div className="p-5 sm:p-20 lg:p-30">{getComponentTobeRenderd()}</div>
					</div>
				</Modal>
			</div>
		</Fragment>
	);
}