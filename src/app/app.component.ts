import { Component } from '@angular/core';
import { DataServiceService } from './data-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = [];
  title = 'just';
  constructor(private service: DataServiceService)
  {
    this.service.getData().subscribe(e=>{
        for(let x in e)
        {
          this.data.push(e[x].name);
        }
    });
  }
}
