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
import { AdminPanelModule } from './Pages/admin/admin-panel.module';

import { EchoService } from './services/echo.service';
import { MyserviceService } from './services/myservice.service';

import { HeadertopComponent } from './components/Header/headertop/headertop.component';
import { HeaderbottomComponent } from './components/Header/headerbottom/headerbottom.component';
import { CarouselComponent } from './components/Carousel/carousel.component';
import { CreateArticleComponent } from './Pages/create-article/create-article.component';
import { HomeComponent } from './Pages/home/home.component';
import { WysiwygComponent } from './components/wysiwyg/wysiwyg.component';
import { WizComponent } from './components/wiz/wiz.component';
import { CardComponent } from './Pages/home/card/card.component';
import { FeatureComponent } from './Pages/home/feature/feature.component';
// import { AdminPanelRoutingModule } from './Pages/admin/admin-panel-routing.module';

@NgModule({
    /**
     * The set of schemas that declare elements to be allowed in the NgModule.
     * Elements and properties that are neither Angular components nor directives
     * must be declared in a schema.
     */
    bootstrap: [ AppComponent ],
    /**
    * The set of components, directives, and pipes declared in this
    * NgModule that can be used in the template of any component that is part of an
    * NgModule that imports this NgModule. Exported declarations are the module's public API.
    */
    imports: [
        BrowserModule,
        CommonModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        AngularEditorModule,
        CKEditorModule,
        AppRoutingModule,
        // AdminPanelRoutingModule,
    ],
    /**
     * The set of NgModules whose exported [declarables](guide/glossary#declarable)
     * are available to templates in this module.
     */
    declarations: [
        AppComponent, 
        HeadertopComponent, 
        HeaderbottomComponent, 
        CarouselComponent, 
        CreateArticleComponent, 
        HomeComponent,
        FileDropDirective, 
        FileSelectDirective, 
        WysiwygComponent, 
        WizComponent, 
        CardComponent, FeatureComponent
    ],
    /**
     * The set of components, directives, and pipes ([declarables](guide/glossary#declarable))
     * that belong to this module.
     */
    providers: [ MyserviceService, EchoService ]
})

export class AppModule {

}