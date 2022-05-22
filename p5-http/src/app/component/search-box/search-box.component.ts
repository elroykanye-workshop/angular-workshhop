import {Component, ElementRef, EventEmitter, OnInit, Output} from '@angular/core';
import {SearchResult} from "../../model/search-result.model";
import {YoutubeSearchService} from "../../service/youtube-search.service";
import {debounceTime, filter, fromEvent, map, tap, Observable, empty} from "rxjs";
import {query} from "@angular/animations";

@Component({
  selector: 'app-search-box',
  template: `<input
    type="text"
    class="form-control"
    placeholder="Search"
    autofocus>`,
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();

  constructor(
    private youtube: YoutubeSearchService,
    private el: ElementRef
  ) { }

  ngOnInit(): void {
    fromEvent(this.el.nativeElement, 'keyup')
      .pipe(
        map((e: any) => e.target.value),
        filter((text: string) => text.length > 2),
        debounceTime(250),
        tap(() => this.loading.emit(true)),
        map((query: string) => this.youtube.search(query))
      ).subscribe(
      (results) => {
        this.loading.emit(false);
        this.results.emit(results)
      }
    )
  }

}
