import React, { useContext, useEffect } from 'react';
import Link from 'next/link';
import AppContext from '../../../context/appContext';
import FileRenderer from "../../fileRenderer";

export default function ExcelPage() {
	let { appState, setAppState } = useContext(AppContext);

	useEffect(() => {}, []);

	return (
		<div className="container mx-auto">
			<div className="flex flex-col gap-10">
				<div>
					{appState.files.map((file) => {
						return <FileRenderer file={file} key={file.name} />;
					})}
				</div>
				
			</div>{' '}
		</div>
	);
}