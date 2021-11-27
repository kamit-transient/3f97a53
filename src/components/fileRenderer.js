import React from "react";
import { MdAudiotrack } from "react-icons/md";
import { DiAndroid } from "react-icons/di";
import { AiFillFileZip } from "react-icons/ai";
import { FaDatabase, FaRegFileVideo } from "react-icons/fa";
import {
  GrDocumentWord,
  GrDocument,
  GrDocumentImage,
  GrDocumentPdf,
  GrDocumentVerified
} from "react-icons/gr";
import {
  SiJson,
  SiMicrosoftpowerpoint,
  SiMicrosoftexcel,
  SiSvg
} from "react-icons/si";
import prettyBytes from "pretty-bytes";

export default function FileRenderer({ file }) {
  let name = file.name;
  let rawSize = file.size;
  let fileExt = name.substring(name.lastIndexOf(".") + 1).toLowerCase();
  console.log("fileExt:", fileExt);
  let getIcon = () => {
    let IconCom = null;
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
        IconCom = MdAudiotrack;
        break;

      case "apk":
        IconCom = DiAndroid;
        break;

      case "7z":
      case "arj":
      case "deb":
      case "pkg":
      case "rar":
      case "rpm":
      case "z":
      case "zip":
        IconCom = AiFillFileZip;
        break;

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
        IconCom = FaDatabase;
        break;

      case "doc":
      case "docx":
      case "odt":
        IconCom = GrDocumentWord;
        break;

      case "rtf":
      case "wpd":
      case "tex":
      case "txt":
        IconCom = GrDocument;
        break;
      case "png":
      case "jpeg":
      case "jpg":
      case "gif":
      case "exif":
      case "tiff":
      case "tif":
      case "bmp":
        IconCom = GrDocumentImage;
        break;

      case "json":
        IconCom = SiJson;
        break;

      case "pdf":
        IconCom = GrDocumentPdf;
        break;

      case "ppt":
      case "pptx":
      case "key":
      case "odp":
      case "pps":
        IconCom = SiMicrosoftpowerpoint;
        break;

      case "xlsx":
      case "xlsm":
      case "xls":
      case "ods":
        IconCom = SiMicrosoftexcel;
        break;

      case "svg":
        IconCom = SiSvg;
        break;

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
        IconCom = FaRegFileVideo;
        break;

      default:
        IconCom = GrDocumentVerified;
    }

    return (
      <>
        <div className="flex flex-col justify-center  ">
          <div>
            <IconCom size="3rem" color="#eee" />
          </div>
          <div className="flex flex-col items-center text-gray-100 font-bold tracking-wide text-lg">
           <div>
			    {name}
			  </div>
			  <div className="text-sm font-normal">
			  ({prettyBytes(rawSize)})
			  </div>
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
