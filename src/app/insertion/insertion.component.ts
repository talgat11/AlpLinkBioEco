import {Component, OnInit} from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Articles } from '../articles';
import { InsertionService } from '../insertion.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-insertion',
  templateUrl: './insertion.component.html',
  styleUrls: ['./insertion.component.css']
})
export class InsertionComponent implements OnInit {

  articles: Articles[] = [];
  selectedImg: any;
  selectedItems: any;
  selectedImportance: any;

  categories: SelectItem[];
  selectedCategory: string;

  constructor(private insertion: InsertionService, private http: HttpClient) {
    this.categories = [
      {value:'Results'},
      {value:'Publication'},
      {value:'Events'},
      {value:'Media'}
    ];
  }

  ngOnInit() {
    this.getArticles();
  }

  // imgUpload() {
  //   this.http.post('imgUrl', this.selectedImg)
  //     .subscribe(articles => this.articles.push(articles));
  // }
  getCategories(): void {

  }

  getArticles(): void {
    this.insertion.getArticles()
      .subscribe(articles => this.articles = articles);
  }

  addAll(
         numElement: number,
         title: string,
         category: string,
         institutes: [ string ],
         image: string,
         pdf: string,
         link: string,
         resume: string,
         text: string,
         important: string
         ): void {
    console.log("ADD");
    // if(!title && !category && !institutes && !image && !pdf && !link && !resume && !text && !important) {return; }
    console.log("test")
    this.insertion.addArticle({ numElement, title, category, institutes, image, pdf, link, resume, text, important } as Articles)
      .subscribe(articles => {
        this.articles.push(articles);
      });
    // console.log(this.selectedItems);
  }
    genId(articles: Articles[]): number {
    return articles.length > 0 ? Math.max(...articles.map(articles => articles.numElement)) + 1 : 1;
  }
  onUploadFinished(file: Articles) {
  console.log(file);
  }

  onRemoved(file: Articles) {
    console.log(file);
  }

   onUploadStateChanged(state: boolean) {
    console.log(state);
  }
}
