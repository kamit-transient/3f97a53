import React, { useContext, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import AppContext from '../context/appContext';
import { GrClose } from 'react-icons/gr';
import { getDependentsFromExt, getExtFromName, getComponentTobeRenderd } from '../lib/util';
import Modal from 'react-modal';


export default function AppModal() {
	let router = useRouter();
	const routerQueryPrefix = router.query.prefix;
	let { appState, setAppState } = useContext(AppContext);



	return (
		<>
			<Modal
				isOpen={!!router.query.prefix}
				onRequestClose={() => {
					console.log('closing modal to home');
				try{
					router.push("/","/");
				}
				catch(e){
					console.log("error in onRequestClose",e);
				}
					
				}}
				contentLabel="Post modal"
				className="Modal"
				overlayClassName="Overlay"
			>
				<div className="flex flex-col font-body">
					<div className="bg-gray-900 text-white h-10 flex items-center justify-between px-5">
						<div>
							<h1>Hello</h1>
						</div>
						<div>
							<button
								onClick={() => router.push('/')}
								className=" opacity-50 flex items-center justify-center gap-1 "
							>
								{' '}
								<GrClose color="red" /> Close
							</button>
						</div>
					</div>
					<div className="p-5 sm:p-20 lg:p-30">
						{getComponentTobeRenderd(router.query.prefix)}
					</div>
				</div>
			</Modal>
		</>
	);
}