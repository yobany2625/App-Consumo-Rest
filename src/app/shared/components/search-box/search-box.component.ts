import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent implements OnInit, OnDestroy {


  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSubscription?: Subscription;

  @Input()
  public placeholder: string = '';

  @Output()
  public onValue = new EventEmitter();

  ngOnInit(): void {
    this.debouncerSubscription = this.debouncer
    .pipe(
      debounceTime(300) // Se ejecuta despues de dejar de escribir
    )
    .subscribe( value => {
      this.onValue.emit(value)
    })
  }

  ngOnDestroy(): void {
    this.debouncerSubscription?.unsubscribe();
  }

  emitValue( value: string):void{
    this.onValue.emit(value);
  }
  onkeyPress(searchTerm: string):void{
    this.debouncer.next(searchTerm);
  }
}
