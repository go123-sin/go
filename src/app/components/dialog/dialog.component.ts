import { CommonModule } from '@angular/common';
import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  inject,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { Surprise } from '../../models/sorprise.model';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule],
  template: `
    <h2 mat-dialog-title>{{ data?.title }}</h2>
    <mat-dialog-content>
      @if (data?.type === 'imagen' && !showImg) {
      <div class="hidden-img">
        <button
          mat-icon-button
          (click)="showImg = true"
          [title]="'Quiero verla yaaaa'"
        >
          <mat-icon>visibility</mat-icon>
        </button>
        <p>
          Quizá salga una imagen interesante así que es mejor que decidas verla
          por tu cuenta.
        </p>
      </div>
      } @if(data?.type === 'imagen' && showImg || (data?.type !== 'imagen')) {
      <div [innerHTML]="url" class="content"></div>
      }
      <div class="description">
        {{ data?.description }}
      </div>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button mat-dialog-close>Close</button>
    </mat-dialog-actions>
  `,
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.initUrlNew();
  }
  data: Surprise | null = null;
  showImg = false;
  private sanitizer = inject(DomSanitizer);
  url!: SafeHtml;
  initUrlNew() {
    this.url = this.sanitizer.bypassSecurityTrustHtml(this.data?.url || '');
  }
}
