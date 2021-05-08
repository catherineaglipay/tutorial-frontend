import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'widget-featured-post',
  templateUrl: 'featured-post.component.html'
})
export class FeaturedPostComponent implements OnInit {
  widgetTitle: string  = 'Pellentesque Ligula Fringilla';
  widgetSubTitle: string  = 'by Malinda Hollaway on 19th June 2015 at 09:10 AM';
  widgetImg: string = './assets/demo/img/widgets/note.png';
  widgetContent: string  = 'Donec ullamcorper nulla non metus auctor fringilla. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra.';

  constructor() { }

  ngOnInit() {
  }

}
