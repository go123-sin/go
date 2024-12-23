import { EventEmitter, Pipe, PipeTransform } from '@angular/core';
import {
  concat,
  concatMap,
  delay,
  finalize,
  from,
  ignoreElements,
  interval,
  map,
  of,
  repeat,
  take,
} from 'rxjs';

@Pipe({
  name: 'typing',
  standalone: true,
})
export class TypingAnimationPipe implements PipeTransform {
  transform(textos: string[], emmiter: EventEmitter<boolean>) {
    return this.getTypewriterEffect(textos, emmiter);
  }

  private type({ word, speed, backwards = false }: any) {
    return interval(speed).pipe(
      map((x) =>
        backwards
          ? word.substring(0, word.length - x)
          : word.substring(0, x + 1)
      ),
      take(word.length)
    );
  }

  typeEffect(word: string) {
    return concat(
      this.type({ word, speed: 40 }),
      of('').pipe(delay(1200), ignoreElements()),
      this.type({ word, speed: 20, backwards: true }),
      of('').pipe(delay(300), ignoreElements())
    );
  }

  getTypewriterEffect(titles: string[], emmiter: EventEmitter<boolean>) {
    return from(titles).pipe(
      delay(500),
      concatMap((title) => this.typeEffect(" " + title)),
      finalize(()=>{
        emmiter.emit(true)
      })
    );
  }
}
