import { Injectable } from '@angular/core';
import { Articles } from './articles';
import { Categories } from './categories';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';
import 'rxjs/Rx';
import {EventEmitter} from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable()
export class InsertionService {

  categories: Categories[];
  public static error = new EventEmitter<any>();
  private static articleUrl = 'https://interreg.humantech.institute/api/api.php/elements';
  private static categoryUrl = 'https://interreg.humantech.institute/api/api.php/list';
  private articlesUrl = 'https://interreg.humantech.institute/api/api.php/elements';
  static extractData(res: Response) {
    const body = res;
    return body || {};
  }
  static extractCategory(res: Response) {
    let body = <Categories[]>res.json.categories;
    return body || [];
  }

  constructor(private http: HttpClient) {
  }

  // getArticles(): Observable<any[]> {
    // return this.http.get<Articles[]>(this.articlesUrl)
    //   .pipe(
    //     tap(articles => console.log(`fetched articles`)),
    //     catchError(this.handleError('getArticles', []))
    //
    // }

   getArticles() {
    return this.http.get(InsertionService.articleUrl, {})
      .map(InsertionService.extractData).catch(this.handleErrors);
  }

  getCategory() {
    return this.http.get(InsertionService.categoryUrl, {})
      .map(InsertionService.extractCategory).catch(this.handleErrors);
  }

  handleErrors(error: Response | any) {
    let errMsg: string;
    let b;
    console.log(error);
    if(error instanceof Response) {
      const body = error || '';
      b = error;
      const err = body['error'] || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    InsertionService.error.emit(JSON.parse(error.body));
    return Observable.throw(JSON.parse(error.body));
  }



  getArticlesNo404<Data>(numElement: number): Observable<Articles> {
    const url = `${this.articlesUrl}/?numElement=${numElement}`;
    return this.http.get<Articles[]>(url)
      .pipe(
        map(articles => articles[0]),
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          console.log(`${outcome} article numElement=${numElement}`);
        }),
        catchError(this.handleError<Articles>(`getArticles numElement=${numElement}`))
      );
  }

  getArticle(numElement: number): Observable<Articles> {
    const url = `${this.articlesUrl}/${numElement}`;
    return this.http.get<Articles>(url).pipe(
      tap(_ => console.log(`fetched article numElement=${numElement}`)),
      catchError(this.handleError<Articles>(`getArticle numElement=${numElement}`))
    );
  }

  addArticle (article: Articles): Observable<Articles> {
    console.log(article)

    // const data = {
    //   "title": "test",
    //   "activate": 0,
    //   "category": "2",
    //   "important": 0,
    //   "resume": "test",
    //   "text": "test",
    //
    // }

    return this.http.post<Articles>('https://interreg.humantech.institute/api/api.php/element', article, httpOptions).pipe(
      tap((article: Articles) => console.log(`added article w/ numElement=${article.numElement}`)),
      catchError(this.handleError<Articles>('addArticle'))
    );
  }

  deleteArticle (article : Articles | number): Observable<Articles> {
    const numElement = typeof article === 'number' ? article : article.numElement;
    const url = `${this.articlesUrl}/${numElement}`;

    return this.http.delete<Articles>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted articles numElement=${numElement}`)),
      catchError(this.handleError<Articles>('deleteHero'))
    );
  }

  updateArticle (article: Articles): Observable<any> {
    return this.http.put(this.articlesUrl, article, httpOptions).pipe(
      tap(_ => console.log(`updated article numElement=${article.numElement}`)),
      catchError(this.handleError<any>('updateArticle'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        console.error(error);
        console.log(`${operation} failed: ${error.message}`);
        return of(result as T);
      };
    }
}
