import { Component, OnInit, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TransferState, makeStateKey } from '@angular/platform-browser';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  private baseUrl: string;

  constructor(
    private http: HttpClient,
    private injector: Injector,
    private state: TransferState) {
    this.baseUrl = this.injector.get('BASE_URL');
  }

  ngOnInit() {
    let key = makeStateKey('key-blogs');
    let store = this.state.get(key, null);

    if (store) {
      this.blogs = store;
    } else {
      this.http.get(`${this.baseUrl}Blog`)
        .subscribe((blogs: any) => {
          this.state.set(key, blogs);
          this.blogs = blogs;
        })
    }
  }

  public blogs: Array<any> = [];

}
