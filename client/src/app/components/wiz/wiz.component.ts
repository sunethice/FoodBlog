import { Component, OnInit } from '@angular/core';
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import Autosave from '@ckeditor/ckeditor5-autosave/src/Autosave';

@Component({
  selector: 'app-wiz',
  templateUrl: './wiz.component.html',
  styleUrls: ['./wiz.component.css']
})

export class WizComponent implements OnInit {
  // public Editor = DecoupledEditor;
  //filebrowserUploadUrl : '/notes/add/ajax/upload-inline-image/index.cfm'
  //filebrowserBrowseUrl

  // public onReady(editor) {
  //   editor.ui.getEditableElement().parentElement.insertBefore(
  //     editor.ui.view.toolbar.element,
  //     editor.ui.getEditableElement()
  //   );
  // }

  public Editor;

  ngOnInit() {
    DecoupledEditor
      .create(document.querySelector('.document-editor__editable'), {
        // plugins: [
        //   Autosave
        // ],
        // autosave: {
        //   waitingTime: 5000, // in ms
        //   save( editor ) {
        //       return this.cpAutoSaveData( editor.getData() );
        //   }
        // },
      })
      .then(editor => {
        const toolbarContainer = document.querySelector('.document-editor__toolbar');
        toolbarContainer.appendChild(editor.ui.view.toolbar.element);
        // editor.addEventListener( 'blur', () => {
        //   const editorData = editor.getData();
        //   this.onBlur(editorData);
        //   // ...
        // });
        document.querySelector('.document-editor__editable').addEventListener('blur', () => {
          const editorData = editor.getData();
          this.onBlur(editorData);
          // ...
        });
        this.Editor = editor;
      })
      .catch(err => {
        console.error(err);
      });
  }

  public onBlur(pData) {

    console.log(pData);
  }

  public cpAutoSaveData(pData){
    /*  ================ Note=========== 
    check this on how to create a status for saving..
    https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/saving-data.html
    */
    console.log(pData);
  }
}