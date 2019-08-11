import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileDropDirective, FileSelectDirective} from 'ng2-file-upload';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { AppRoutingModule } from './app-routing.module';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';


import { EchoService } from './services/echo.service';
import { MyserviceService } from './services/myservice.service';

import { HeadertopComponent } from './components/Header/headertop/headertop.component';
import { HeaderbottomComponent } from './components/Header/headerbottom/headerbottom.component';
import { CarouselComponent } from './components/Carousel/carousel.component';
import { CreateArticleComponent } from './Pages/create-article/create-article.component';
import { HomeComponent } from './Pages/home/home.component';
import { WysiwygComponent } from './components/wysiwyg/wysiwyg.component';
import { WizComponent } from './components/wiz/wiz.component';

@NgModule({
    bootstrap: [ AppComponent ],
    imports: [
        BrowserModule,
        CommonModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        AngularEditorModule,
        CKEditorModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent, 
        HeadertopComponent, 
        HeaderbottomComponent, 
        CarouselComponent, 
        CreateArticleComponent, 
        HomeComponent,
        FileDropDirective, 
        FileSelectDirective, 
        WysiwygComponent, WizComponent
    ],
    providers: [ MyserviceService, EchoService ]
})

export class AppModule {

}