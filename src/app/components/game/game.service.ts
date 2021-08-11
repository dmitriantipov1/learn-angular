import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GameService {
  levelList: string[] = ['easy', 'medium', 'hard' ];
  numOfWordsList: number[] = [10, 20, 30];
  languageList: string[] = ['english', 'russian'];

  selectedLevel : string = '';
  selectedNumber : number = 0;
  selectedLang : string = '';

  settingsPage: boolean = true;
  mainPage: boolean = true;
  resultsPage: boolean = true;

  constructor(private http: HttpClient) { }

  selectLevel(level: string){
    this.selectedLevel = level
  }

  selectNumber(number: number){
    this.selectedNumber = number
  }

  selectLang(number: string){
    this.selectedLang = number
  }

  submit(){
    if(this.selectedLevel && this.selectedNumber && this.selectedLang){
      this.mainPage = false
      this.settingsPage = false
      console.log('yes')
    } else {
      throw new Error('hujnja')
    }
  }

  checkWord(){
    return this.http.get('https://englishwordsdb.000webhostapp.com/').subscribe((data) => {
      console.log(data)
    })
  }


}
