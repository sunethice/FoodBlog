const fileupload = require('../service/fileUpload');


module.exports = app => {
    app.get('/list-files', fileupload.cpListFiles);

    app.post('/upload', fileupload.cpUploadFile);

    app.get('/files',fileupload.cpDispAllFiles);

    app.get('/files/:filename',fileupload.cpDispFile);

    app.get('/image/:filename',fileupload.cpDispImage);
    
    app.delete('/files/:id',fileupload.cpDeleteFile);

    app.post('/wysiwyg/upload',fileupload.cpWysiwygImgUpload)
}