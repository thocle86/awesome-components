import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Candidate } from '../models/candidate.model';

@Injectable()
export class CandidateService {

    constructor(private http: HttpClient) { }

    private _loading$ = new BehaviorSubject<boolean>(false);

    get loading$(): Observable<boolean> {
        return this._loading$.asObservable();
    }

    private setLoadingStatus(loading: boolean) {
        this._loading$.next(loading);
    }

    private _candidates$ = new BehaviorSubject<Candidate[]>([]);

    get candidates$(): Observable<Candidate[]> {
        return this._candidates$.asObservable();
    }

    private setCandidatesStatus(candidates: Candidate[]) {
        this._candidates$.next(candidates);
    }

    private lastCandidatesLoad = 0;
    private timeToRefresh = 60 * 5 * 1000; // 5 minutes en ms => 300 000

    getCandidatesFromServer(): void {
        if (Date.now() - this.lastCandidatesLoad <= this.timeToRefresh) {
            return;
        }
        this.setLoadingStatus(true);
        this.http.get<Candidate[]>(`${environment.apiUrl}/candidates`).pipe(
            delay(1000),
            tap(candidates => {
                this.lastCandidatesLoad = Date.now();
                this.setCandidatesStatus(candidates);
                this.setLoadingStatus(false);
            })
        ).subscribe();
    }

    getCandidateById(id: number): Observable<Candidate> {
        if (!this.lastCandidatesLoad) {
            this.getCandidatesFromServer();
        }
        return this.candidates$.pipe(
            map(candidates => candidates.filter(candidate => candidate.id === id)[0])
        );
    }

}