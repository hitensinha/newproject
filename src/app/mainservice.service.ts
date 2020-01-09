import { Injectable } from '@angular/core';
//  import { Http, Headers, Response } from '@angular/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';
// import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MainserviceService {
  cardData: Object[] = [];

  constructor(public http: HttpClient) { }

private extractJsonData(response: Response) {
  return response;
}

private handleJsonError(error: any) {
  console.log(error);
  if(error){
    const errMsg = (error.error) ? error.error :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    try {
      JSON.parse(errMsg);
    } catch (e) {
      return throwError(errMsg);
    }
    return throwError(JSON.parse(errMsg));
  }
}
public getOperation(LOGIN_API_URL: any): Observable<any> {
  const headers = new HttpHeaders({'Authorization':localStorage.getItem('expert_id')?localStorage.getItem('expert_id'):''});
  //if(localStorage.getItem('user_token')){
    //console.log(localStorage.getItem('user_tokenexpert_id'));
    //headers.append('Authorization', 'Bearer '+localStorage.getItem('user_token'));
  //}
  return this.http.get(LOGIN_API_URL, { headers: headers })
  .pipe(
    map(this.extractJsonData)
  )
  .pipe(
    catchError(this.handleJsonError)
  );
}

public getOpr(API_URL: any): Observable<any> {
  const headers = new HttpHeaders({'Authorization':localStorage.getItem('expert_id')?localStorage.getItem('expert_id'):''});
  //if(localStorage.getItem('user_token')){
    //console.log(localStorage.getItem('user_tokenexpert_id'));
    //headers.append('Authorization', 'Bearer '+localStorage.getItem('user_token'));
  //}
  return this.http.get(API_URL, { headers: headers })
  .pipe(
    map(this.extractJsonData)
  )
  .pipe(
    catchError(this.handleJsonError)
  );
}

public postOperation(API_URL: any, objectData: any): Observable<any> {
  const headers = new HttpHeaders({
    'Authorization':localStorage.getItem('expert_id')?localStorage.getItem('expert_id'):'',
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  });

  return this.http.post(API_URL, objectData, { headers: headers })
  .pipe(
    map(this.extractJsonData)
  )
  .pipe(
    catchError(this.handleJsonError)
  );
}

public putOperation(API_URL, objectData): Observable<any> {
  const headers = new HttpHeaders({
    'Authorization':localStorage.getItem('expert_id')?localStorage.getItem('expert_id'):'',
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  });

  return this.http.put(API_URL, objectData, { headers: headers })
  .pipe(
    map(this.extractJsonData)
  )
  .pipe(
    catchError(this.handleJsonError)
  );
}

public deleteOperation(API_URL): Observable<any> {
  const headers = new HttpHeaders({
    'Authorization':localStorage.getItem('expert_id')?localStorage.getItem('expert_id'):'',
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  });

  return this.http.delete(API_URL, { headers: headers })
  .pipe(
    map(this.extractJsonData)
  )
  .pipe(
    catchError(this.handleJsonError)
  );
}



}
