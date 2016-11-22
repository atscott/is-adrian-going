const fs = require('file-system');

const imageFolder = 'src/assets/images/';

const files = fs.readdirSync(imageFolder);
const fileList = files.reduce((list, file) => `${list}\n  '${file}',`, '');
//const fileList = files.join(',\n  ');
const fileContents = `
// THIS IS A GENERATED FILE. USE THE COMMAND 'grunt gen_fortunes' TO REGENERATE

export const fortunes = [${fileList}
];`;

fs.writeFile('src/app/fortune/fortunes.ts', fileContents, (err) => {console.log(err)});

