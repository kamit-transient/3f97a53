import React, { useContext, useEffect } from 'react';
import Link from 'next/link';
import AppContext from '../../../context/appContext';
import FileRenderer from "../../fileRenderer";
import Converters from '../../../data/converters';
import {useSpring, animated,config } from "@react-spring/web"


export default function ExcelPage() {
	let { appState, setAppState } = useContext(AppContext);
	let animatedStyle= useSpring({
		from:{transform:"translateY(-50%) scale(0)"},
		to:{transform:"translateY(0px) scale(1)"},
		 delay: 200,
    config: config.molasses,
	})
	
	let prefix=appState.prefix;
	
	let formatsToBeConverted= Converters["excel"].children.filter(ch=>ch.implemented);

	useEffect(() => {}, []);
	
	let file={
		name:"ammmm.xls",
		size:121212
	}

	return (
		<div className="container mx-auto py-14">
			<div className="flex flex-col items-center gap-10 min-h-screen ">
				<div>
					{appState.files && appState.files.map((file) => {
						return <FileRenderer file={file} key={file.name} />;
					})}
					<FileRenderer file={file} key={file.name} />
				</div>
				
				<animated.div style={animatedStyle} className="flex flex-wrap gap-2 items-center justify-start">
				{
					formatsToBeConverted &&	formatsToBeConverted.map(f=>{
							return(
									<div key={f.prefix} className="bg-gray-800 text-white font-heading tracking-wide cursor-pointer px-6 py-3  rounded-md uppercase text-3xl ">
										{f.name}
									</div>
							)
						})
					}
				</animated.div>
				
			</div>
			
		</div>
	);
}