export const excelConverters = {
    path: { prefix: '/excel', suffix: ['dbs', 'pdf', 'csv'] },
};

// https://codesandbox.io/s/ww0xkyqonk?from-embed=&file=/data.js:0-712
export default {
    excel: {
        name: 'Excel',
        prefix: 'excel',
        children: [
            { name: 'dbs', prefix: 'dbs', implemented: yes },
            { name: 'pdf', prefix: 'pdf', implemented: yes },
            { name: 'csv', prefix: 'csv', implemented: yes },
        ],
    },
    audio: {
        name: 'Audio',
        prefix: 'audio',
    },
    video: {
        name: 'Video',
        prefix: 'video',
    },
    image: {
        name: 'Image',
        prefix: 'image',
    },
    document: {
        name: 'Document',
        prefix: 'docs',
    },
    ppt: {
        name: 'Ppt',
        prefix: 'ppt',
    },
    db: {
        name: 'Database',
        prefix: 'db',
    },
    text: {
        name: 'Text Docs',
        prefix: 'text',
    },
    xml: {
        name: 'Xml Docs',
        prefix: 'xml',
    },
    json: {
        name: 'Json',
        prefix: 'json',
    },
    pdf: {
        name: 'Pdf Docs',
        prefix: 'pdf',
    },
    svg: {
        name: 'Svg',
        prefix: 'svg',
    },
};