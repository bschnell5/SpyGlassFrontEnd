import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  data: any[];

  constructor(public dataService : DataService) {}

  ngOnInit(): void {
    this.dataService.getNews().subscribe((data)=>{
      console.log(data);
      this.data = data['articles'];
    });
  }

}

