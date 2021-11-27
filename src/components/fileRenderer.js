import React from 'react';
import { MdAudiotrack } from 'react-icons/md';
import { DiAndroid } from 'react-icons/di';
import { AiFillFileZip } from 'react-icons/ai';
import { FaDatabase, FaRegFileVideo } from 'react-icons/fa';
import {
    GrDocumentWord,
    GrDocument,
    GrDocumentImage,
    GrDocumentPdf,
    GrDocumentVerified,
} from 'react-icons/gr';
import { SiJson, SiMicrosoftpowerpoint, SiMicrosoftexcel, SiSvg } from 'react-icons/si';
import prettyBytes from 'pretty-bytes';
import AppContext from '../context/appContext';
import Converters from '../data/converters';

export default function FileRenderer({ file }) {
    let name = file.name;
    let rawSize = file.size;
    let fileExt = name.substring(name.lastIndexOf('.') + 1).toLowerCase();
    let pathPrefix = '';
    let { appState, setAppState } = useContext(AppContext);

    console.log('fileExt:', fileExt);
    let getIcon = () => {
        let IconCom = null;
        //Thanks to https://github.com/react-file-type-icons/react-file-type-icons/blob/master/icons/IconsData/index.js
        switch (fileExt) {
            case 'mp3':
            case 'wav':
            case 'mpa':
            case 'wma':
            case 'ogg':
            case 'aif':
            case 'cda':
            case 'mid':
            case 'midi':
            case 'wpl':
                IconCom = MdAudiotrack;
                pathPrefix = Converters.excel.prefix;
                break;
            case 'mp4':
            case 'avi':
            case 'flv':
            case 'mov':
            case 'mkv':
            case 'mpeg':
            case 'mpg':
            case 'h264':
            case '3gp':
            case '3g2':
            case 'rm':
            case 'swf':
            case 'm4v':
            case 'vob':
            case 'wmv':
                IconCom = FaRegFileVideo;
                pathPrefix = Converters.video.prefix;
                break;
            case 'png':
            case 'jpeg':
            case 'jpg':
            case 'gif':
            case 'exif':
            case 'tiff':
            case 'tif':
            case 'bmp':
                IconCom = GrDocumentImage;
                pathPrefix = Converters.image.prefix;
                break;

            case 'doc':
            case 'docx':
            case 'odt':
                IconCom = GrDocumentWord;
                pathPrefix = Converters.document.prefix;

                break;
            case 'ppt':
            case 'pptx':
            case 'key':
            case 'odp':
            case 'pps':
                IconCom = SiMicrosoftpowerpoint;
                pathPrefix = Converters.ppt.prefix;

                break;

            case 'xlsx':
            case 'xlsm':
            case 'xls':
            case 'ods':
            case 'csv':
                IconCom = SiMicrosoftexcel;
                pathPrefix = Converters.excel.prefix;

                break;
            case 'sql':
            case 'db':
            case 'dbf':
            case 'dbs':
            case 'mdb':
            case 'sav':
            case 'dat':
                IconCom = FaDatabase;
                pathPrefix = Converters.db.prefix;

                break;

            case 'rtf':
            case 'wpd':
            case 'tex':
            case 'txt':
                IconCom = GrDocument;
                pathPrefix = Converters.document.prefix;

                break;
            case 'xml':
                IconCom = GrDocument;
                pathPrefix = Converters.xml.prefix;

                break;
            case 'json':
                IconCom = SiJson;
                pathPrefix = Converters.json.prefix;

                break;

            case 'pdf':
                IconCom = GrDocumentPdf;
                pathPrefix = Converters.pdf.prefix;

                break;

            case 'svg':
                IconCom = SiSvg;
                pathPrefix = Converters.svg.prefix;

                break;

            default:
                IconCom = GrDocumentVerified;
        }
		
		if(pathPrefix != appState.pathPrefix){
			setAppState(Object.assign({},...appState.pathPrefix,pathPrefix:pathPrefix));
		}

        return (
            <>
                <div className="flex flex-col justify-center  ">
                    <div>
                        <IconCom size="3rem" color="#eee" />
                    </div>
                    <div className="flex flex-col items-center text-gray-100 font-bold tracking-wide text-lg">
                        <div>{name}</div>
                        <div className="text-sm font-normal">({prettyBytes(rawSize)})</div>
                    </div>
                </div>
            </>
        );
    };

    return (
        <div>
            <div className="rounded-full border-8 border-primary inline-flex p-5 bg-primary">
                {getIcon()}
            </div>
        </div>
    );
}