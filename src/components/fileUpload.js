import React, { Fragment, useCallback, useState, useContext, useEffect, useRef } from 'react';
import { useDropzone } from 'react-dropzone';
import FileRenderer from './fileRenderer';
import AppContext from '../context/appContext';
import { useRouter } from 'next/router';
import Modal from 'react-modal';
import Converters from '../data/converters';

import { getDependentsFromExt, getExtFromName } from '../lib/util';


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
	
	
	let [state, setState]=useState({
		files:[],
		pathPrefix:null
	})

	useEffect(() => {
		//https://maksimrv.medium.com/usestate-with-callback-d574298eb8bd
		// myCallbacksList.current.forEach((callback) => callback());
		// myCallbacksList.current = [];

	}, [state]);

	// useEffect(() => {
	// 	let files = appState.files;
	// 	if (files.length) {
	// 		let pathPrefix=appState.prefix;
	// 		console.log('appState.. before changing route', appState);

	// 		router.push(`/?prefix=${pathPrefix}`, `/${pathPrefix}`);
	// 	}
	// }, [appState.prefix]);
	
	
/* eslint-disable */
	const onDrop = useCallback((acceptedFiles) => {
		let files = [...acceptedFiles];
		let ext=getExtFromName(files[0].name);
		let { pathPrefix } = getDependentsFromExt(ext);
		setAppState(Object.assign({}, { ...appState, files: files,prefix:pathPrefix }));
		router.push(`/${pathPrefix}`);

		// setState(Object.assign({}, { ...appState, files: files,prefix:prefix }));
	},[]);

	

	const fileValidator = (file) => {
		// let ext = getExtFromName(file.name);

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
		maxFiles: 2,
		validator: fileValidator,
	});

	return (
		<Fragment>
			<div className="">
			
			
			<div
				{...getRootProps()}
				className={` mt-20 border-4 border-dashed  h-80 p-5 flex flex-col justify-center items-center rounded-md ${
					!isDragActive ? 'border-gray-400' : 'border-primary'
				}`}
			>
				<input {...getInputProps()} />
				{isDragActive ? (
					<p className="text-primary tracking-wide text-opacity-40 text-4xl">Drop the files here ...</p>
				) : (<>
					 <p className="text-gray-200 tracking-wide text-xl sm:text-2xl leading mb-4">You can Convert <span className="font-bold"> Excel, ppt, images, audio, video</span> files etc.</p>
					<p className="text-gray-300 tracking-wide text-2xl sm:text-4xl">Drag n drop some files here, or click to select files</p> </>
				)}
			</div>
	</div>
		</Fragment>
	);
}