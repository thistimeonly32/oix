import { Injectable } from '@angular/core';
import { JobByIdResponse } from '../model/job-by-id-response';

@Injectable({
  providedIn: 'root'
})
export class ServiceDataService {

  public job: JobByIdResponse;
  public attendance: string;
  public checkInTime: string;
  public service: string;
  constructor() { }
}
