import { Component } from '@angular/core';
import { Faq } from 'src/app/faq';
import { FAQ } from 'src/app/moc-faq';


@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent {
  questions:Faq[] = FAQ
}
