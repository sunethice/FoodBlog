import { Component, OnInit, Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IFileConfig } from '../../Interfaces/fileConfig';
import { HttpParams, HttpClient } from "@angular/common/http";
import { FileUploadService } from 'src/app/services/fileUpload.service';
// import { FileUploader } from 'ng2-file-upload';

@Component({
    selector: 'app-create-article',
    templateUrl: './create-article.component.html',
    styleUrls: ['./create-article.component.css']
})

@Injectable()
export class CreateArticleComponent implements OnInit {
    newArticleForm = new FormGroup({
        heading: new FormControl(''),
        description: new FormControl(''),
        main_image: new FormControl(''),
    });
    selectedFile: File = null;
     
    constructor(private http: HttpClient, private fileUpload: FileUploadService) { }

    ngOnInit() {
    }

    onReady(eventData) {
        eventData.plugins.get('FileRepository').createUploadAdapter = (loader) => {
            console.log(btoa(loader.file));
            return new UploadAdapter(loader, '', this.http);
        };
    }

    cpOnFileSelected(event) {
        this.selectedFile = <File>event.target.files[0];
        console.log("1 => " + this.selectedFile.name);
    }

    // cpUploadImage() {
    //     return new Promise(function (resolve, reject) {
    //         const mFormData = new FormData();
    //         mFormData.append('single', this.selectedFile, this.selectedFile.name);
    //         this.http.post('http://localhost:5000/upload', mFormData).subscribe(res => {
    //             resolve(res);
    //         }, error => {
    //             reject(error);
    //         });
    //     });
    // }

    cpSubmit() {
        var that = this;
        console.log(this.selectedFile.name);
        const mFormData = new FormData();
        mFormData.append('single', that.selectedFile, that.selectedFile.name);
        this.fileUpload.cpUploadFile(mFormData).then(res => {
            var fileUploaded = <IFileConfig>res;
            this.cpSaveArticleMetaData(fileUploaded);
        }, error => {
            this.cpOnSubmitError(error);
        });
    }

    cpSaveArticleMetaData(pFileUploaded:IFileConfig) {
        var postData = {
            articleHeader: this.newArticleForm.controls.description.value,
            articleDescription: this.newArticleForm.controls.description.value,
            articleMainImg: pFileUploaded.filename
        }

        this.http.post('http://localhost:5000/article/add', postData).subscribe(res => {
            console.log("d");
            console.log(res);
        }, error => {
            console.log("e");
            console.log(error);
        });
    }

    cpOnSubmitError(error) {
        console.log(error);
    }
}


export class UploadAdapter {
    constructor(
        private loader,
        public url: string,
        private http: HttpClient
    ) {
    }
    //the uploadFile method use to upload image to your server
    // uploadFile(file, url?: string, user?: string) {
    //     let name = '';
    //     url = 'your api';
    //     let formData: FormData = new FormData();
    //     let headers = new Headers();
    //     name = file.name;
    //     formData.append('attachment', file, name);
    //     const dotIndex = name.lastIndexOf('.');
    //     const fileName = dotIndex > 0 ? name.substring(0, dotIndex) : name;
    //     formData.append('name', fileName);
    //     formData.append('source', user);

    //     headers.append('Content-Type', 'multipart/form-data');
    //     headers.append('Accept', 'application/json');
    //     console.log('formData', formData);
    //     let params = new HttpParams();
    //     const options = {
    //         params: params,
    //         reportProgress: true,
    //     };
    //     //http post return an observer
    //     //so I need to convert to Promise
    //     return this.http.post(url, formData, options);
    // }
    // //implement the upload 
    // upload() {
    //     let upload = new Promise((resolve, reject) => {
    //         this.loader['file'].then(
    //             (data) => {
    //                 this.uploadFile(data, this.url, 'test')
    //                     .subscribe(
    //                         (result) => {
    //                             //resolve data formate must like this
    //                             //if **default** is missing, you will get an error
    //                             resolve({ default: result['attachment'] })
    //                         },
    //                         (error) => {
    //                             reject(data.msg);
    //                         }
    //                     );
    //             }
    //         );
    //     });
    //     return upload;
    // }
    // abort() {
    //     console.log("abort")    
    // }
}
