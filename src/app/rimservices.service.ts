import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RimservicesService {
  API = 'https://ipromisesolutions.com/api_folder/';

  router: any;
  constructor(private http: HttpClient) { }

  View_Users(): Observable<Object> {
    var URL = this.API + 'ViewUsers.php';
    var formData = new FormData();
    return this.http.post(URL, formData);
  }
  Report_Details(reportId: any): Observable<Object> {
    var URL = this.API + 'Report_Details.php'
    var formData = new FormData()
    formData.append('reportId', reportId)
    return this.http.post(URL, formData)
  }
}

