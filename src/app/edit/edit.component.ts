import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { InsertionService } from '../insertion.service';
import {Articles} from '../articles';
import {SelectItem} from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements  OnInit {


  @Input() articles: Articles;
  @Output() dataChange = new EventEmitter();
  @Input() modalArticle: object;

  constructor(private insertion: InsertionService, private location: Location, private route: ActivatedRoute) {
  }

  categories: SelectItem[];
  selectedCategory: string;


  ngOnInit() {
    this.categories = [
      {value:'Results'},
      {value:'Publication'},
      {value:'Events'},
      {value:'Media'}
    ];
    this.getArticle();
  }

  getArticle(): void {
    const numElement = +this.route.snapshot.paramMap.get('numElement');
    this.insertion.getArticle(numElement)
      .subscribe(articles => this.articles = articles);
  }
  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.insertion.updateArticle(this.articles)
      .subscribe(()=> this.goBack())
  }

}
