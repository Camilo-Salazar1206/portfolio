import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit, OnChanges {
  @Input() url:string=""
  @Input() textButton: string = 'available_to_work';
  translatedText: string = '';
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('es');
  }

  ngOnInit() {

    this.updateTranslation();
  }

  ngOnChanges(changes: SimpleChanges) {

    if (changes['textButton']) {
      this.updateTranslation();
    }
  }

  private updateTranslation() {
    if (this.textButton) {
      this.translate.get(this.textButton).subscribe((translated: string) => {
        this.translatedText = translated;
      });
    }
  }
}
