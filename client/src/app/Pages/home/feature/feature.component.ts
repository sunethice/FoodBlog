import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {
  featureData = [
    {
      cs1:"col-md-7 order-md-2",
      cs2:"col-md-5 order-md-1",
      featureImgSrc:"data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==",
      featureHeader:"First featurette heading.",
      featureSubHeader:"It'll blow your mind.",
      featureDesc:"Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo."
    },
    {
      cs1:"col-md-7",
      cs2:"col-md-5",
      featureImgSrc:"data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==",
      featureHeader:"Oh yeah, it's that good.",
      featureSubHeader:"See for yourself.",
      featureDesc:"Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo."
    },
    {
      cs1:"col-md-7 order-md-2",
      cs2:"col-md-5 order-md-1",
      featureImgSrc:"data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==",
      featureHeader:"And lastly, this one.",
      featureSubHeader:"Checkmate.",
      featureDesc:"Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo."
    }
  ]

  //{true: 'col-md-7 order-md-2', false: 'col-md-7'}[i % 2 == 0]
  constructor() { }

  ngOnInit() {
  }

}
