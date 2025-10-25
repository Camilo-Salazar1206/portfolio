import { Component, ChangeDetectorRef } from '@angular/core';
import { Links } from 'src/app/core/enums/routes.enums';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent {
  links = Links;
  emailCopied = false;
  email = 'c4m1loo12@gmail.com';

  constructor(private cdr: ChangeDetectorRef) {}

  copyEmail() {
    // Intentar API moderna
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(this.email).then(() => {
        this.emailCopied = true;
        this.cdr.detectChanges();
        setTimeout(() => {
          this.emailCopied = false;
          this.cdr.detectChanges();
        }, 2000);
      }).catch(err => {
        console.error('Error copying email: ', err);
        this.fallbackCopyText(this.email);
      });
    } else {
      // Fallback cuando clipboard API no está disponible
      this.fallbackCopyText(this.email);
    }
  }

  // Fallback copy usando textarea
  private fallbackCopyText(text: string) {
    try {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.left = '-9999px';
      document.body.appendChild(textarea);
      textarea.select();
      const successful = document.execCommand('copy');
      document.body.removeChild(textarea);
      if (successful) {
        this.emailCopied = true;
        this.cdr.detectChanges();
        setTimeout(() => {
          this.emailCopied = false;
          this.cdr.detectChanges();
        }, 2000);
      } else {
        console.error('Copy command was not successful');
      }
    } catch (err) {
      console.error('Fallback: Oops, unable to copy', err);
    }
  }

  openEmailClient() {
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${this.email}`, '_blank');
  }
}
