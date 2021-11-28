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
import Converters from '../data/converters';
import ExcelPage from '../components/pages/excel/excelPage';
import ImagePage from '../components/pages/image/imagePage';


export function formatDate(dateStr) {
	let months = [
		'JAN',
		'FEB',
		'MAR',
		'APR',
		'MAY',
		'JUN',
		'JULY',
		'AUG',
		'SEP',
		'OCT',
		'NOV',
		'DEC',
	];
	let date = new Date(dateStr);
	return `${date.getDate()} ${months[date.getMonth()]}, ${date.getFullYear()}`;
}

export function getDependentsFromExt(fileExt) {
	let IconCom = null;
	let pathPrefix = null;

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

	return {
		pathPrefix,
		IconCom,
	};
}

export function getExtFromName(name) {
	return name.substring(name.lastIndexOf('.') + 1).toLowerCase();
}

export function  getComponentTobeRenderd (routerQueryPrefix) {
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