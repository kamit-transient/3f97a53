import React, { useContext, useEffect } from 'react';

import prettyBytes from 'pretty-bytes';
import AppContext from '../context/appContext';
import { useRouter } from 'next/router';
import {getDependentsFromExt,getExtFromName} from "../lib/util"

export default function FileRenderer({ file }) {
	let name = file.name;
	let rawSize = file.size;
	let fileExt = getExtFromName(name);
	let pathPrefix = '';
	let { appState, setAppState } = useContext(AppContext);
	let router = useRouter();

	// useEffect(() => {
	// 	setAppState(Object.assign({}, { ...appState, pathPrefix: pathPrefix }));
	// }, [pathPrefix]);

	let getIcon = () => {
		
	let {IconCom}=	getDependentsFromExt(fileExt);
		


		return (
			<>
				<div className="flex flex-col justify-center items-center h-28 w-28">
					<div className="text-gray-50">
						<IconCom size="3rem" color="white"  />
					</div>
					<div className="flex flex-col items-center text-gray-100 font-bold tracking-wide text-lg text-center h-28 w-28">
						<div className="w-full leading-tight" style={{overflowWrap:'break-word'}}>{name}</div>
						<div className="text-sm font-normal">({prettyBytes(rawSize)})</div>
					</div>
				</div>
			</>
		);
	};

	return (
		<div>
			<div className="rounded-full border-8 border-gray-900 inline-flex p-5 bg-gray-900">
				{getIcon()}
			</div>
		</div>
	);
}