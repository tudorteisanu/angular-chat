import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiRoutes } from '@/ts/enum';
import { UserInterface } from '@/ts/interfaces';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  searchUser(search: string): Observable<UserInterface[]> {
    return this.http.get<UserInterface[]>(`${ApiRoutes.Users}/search`, {
      params: { search },
    });
  }
}
