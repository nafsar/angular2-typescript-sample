import { Jframe } from './jframe';
import { JFRAMES } from './mock-jframes';
import { Injectable } from 'angular2/core';

@Injectable()
export class JframeService {
  getJframes() {
    return Promise.resolve(JFRAMES);
  }
}

