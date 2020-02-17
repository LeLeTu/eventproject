import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient) { }
  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(`${environment.API_URL}/events`);
  }
  getEvent(id: number): Observable<Event> {
    return this.http.get<Event>(`${environment.API_URL}/events/${id}`);
  }
}
