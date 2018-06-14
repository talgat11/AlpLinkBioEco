import { Component, OnInit } from '@angular/core';
import { Articles } from '../articles';
import { InsertionService } from '../insertion.service';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.css'],

})
export class ConsultationComponent implements OnInit {
  articles: Articles[];
  isDesc: boolean = false;
  column: string = 'id';
  popoverErase = 'Effacer';
  popoverMessage = 'Êtes-vous sûr de vouloir effacer cet article ?';
  cancelClicked = false;
  selectedArticle: Articles;


  constructor(private insertion: InsertionService) { }

  ngOnInit() {
    this.getArticles();
  }

  getArticles(): void {
    this.insertion.getArticles()
      .subscribe(articles => this.articles = articles);
  }

  delete(article: Articles): void {
    this.articles = this.articles.filter(h => h !== article);
    this.insertion.deleteArticle(article).subscribe();
  }

  sort(property){
    this.isDesc = !this.isDesc; //change the direction
    this.column = property;
    let direction = this.isDesc ? 1 : -1;
    this.articles.sort(function(a, b){
        if(a[property] < b[property]){
            return -1 * direction;
        }
        else if( a[property] > b[property]){
            return direction;
        }
        else{
            return 0;
        }
    });
};

//   edit(item) {
//     this.modalArticle = item;
//     this.getArticle(item);
//   }
//
//   getArticle(item) {
//     return this.data.indexOf(item);
//   }

}
