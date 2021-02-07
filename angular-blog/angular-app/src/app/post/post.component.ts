import { Component, OnInit, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { TransferState, makeStateKey } from '@angular/platform-browser';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  public id: String = "";
  public post: any = null;
  private baseUrl: string;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private injector: Injector,
    private state: TransferState) {
    this.baseUrl = this.injector.get('BASE_URL');
    this.route.params
      .subscribe(params => {
        this.id = params.id;
      })
  }

  ngOnInit() {
    let key = makeStateKey('key-post');
    let store = this.state.get(key, null);

    if (store) {
      this.post = store;
    } else {
      this.http.get(`${this.baseUrl}Blog/${this.id}`)
        .subscribe((post: any) => {
          this.state.set(key, post);
          this.post = post;
        })
    }
  }
}
