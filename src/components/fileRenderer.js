import React from 'react';
import { MdAudiotrack } from 'react-icons/md';
import { DiAndroid } from 'react-icons/di';
import { AiFillFileZip } from '@react-icons/all-files/ai';
import { FaDatabase, FaRegFileVideo } from '@react-icons/all-files/fa';
import { GrDocumentWord, GrDocument, GrDocumentImage, GrDocumentPdf, GrDocumentVerified } from '@react-icons/all-files/gr'
import { SiJson, SiMicrosoftpowerpoint, SiMicrosoftexcel, SiSvg } from '@react-icons/all-files/si'


export default function FileRenderer({ name, rawSize }) {

    let fileExt = name.substring(name.lastIndexOf(".")).toLowerCase();

    let getIcon = () => {
        //Thanks to https://github.com/react-file-type-icons/react-file-type-icons/blob/master/icons/IconsData/index.js


        switch (fileExt) {
            case "mp3":
            case "wav":
            case "mpa":
            case "wma":
            case "ogg":
            case "aif":
            case "cda":
            case "mid":
            case "midi":
            case "wpl":
                return <MdAudiotrack />;

            case "apk":
                return <DiAndroid></DiAndroid>



            case "7z":
            case "arj":
            case "deb":
            case "pkg":
            case "rar":
            case "rpm":
            case "z":
            case "zip":
                return <AiFillFileZip></AiFillFileZip>



            case "sql":
            case "csv":
            case "db":
            case "dbf":
            case "dbs":
            case "log":
            case "mdb":
            case "sav":
            case "tar":
            case "xml":
            case "dat":
                return <FaDatabase></FaDatabase>

            case "doc":
            case "docx":
            case "odt":
                return <GrDocumentWord></GrDocumentWord>
            case "rtf":
            case "wpd":
            case "tex":
            case "txt":
                return <GrDocument></GrDocument>





            case "png":
            case "jpeg":
            case "jpg":
            case "gif":
            case "exif":
            case "tiff":
            case "tif":
            case "bmp":
                return <GrDocumentImage></GrDocumentImage>;



            case "json":
                return <SiJson></SiJson>;

            case "pdf":
                return <GrDocumentPdf></GrDocumentPdf>;



            case "ppt":
            case "pptx":
            case "key":
            case "odp":
            case "pps":
                return <SiMicrosoftpowerpoint></SiMicrosoftpowerpoint>;

            case "xlsx":
            case "xlsm":
            case "xls":
            case "ods":
                return <SiMicrosoftexcel></SiMicrosoftexcel>;

            case "svg":
                return <SiSvg></SiSvg>;

            case "mp4":
            case "avi":
            case "flv":
            case "mov":
            case "mkv":
            case "mpeg":
            case "mpg":
            case "h264":
            case "3gp":
            case "3g2":
            case "rm":
            case "swf":
            case "m4v":
            case "vob":
            case "wmv":
                return <FaRegFileVideo></FaRegFileVideo>;

            default:
                return <GrDocumentVerified></GrDocumentVerified>;

        };

    }


    return (
        <div>
            {getIcon()}
        </div>
    )
}
