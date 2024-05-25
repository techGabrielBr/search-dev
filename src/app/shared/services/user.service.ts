import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { User } from '../../public/models/User';
import { Observable } from 'rxjs';
import { Repository } from '../../public/models/Repository';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser(username: string): Observable<User> {
    return this.http.get<User>(`${environment.API_URL_BASE}/${username}`);
  }

  getAllRepository(url: string): Observable<Repository[]>{
    return this.http.get<Repository[]>(url);
  }

}
