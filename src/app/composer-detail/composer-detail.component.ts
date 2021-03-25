import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComposerDetailService } from '../composer-detail.service';

@Component({
  selector: 'app-composer-detail',
  templateUrl: './composer-detail.component.html',
  styleUrls: ['./composer-detail.component.css']
})
export class ComposerDetailComponent implements OnInit {

  composer: any;


  constructor(
    private route: ActivatedRoute,
    private composerDetailService: ComposerDetailService
    ) {}

  ngOnInit(): void {
    this.getComposer();
    this.getCurrentComposerOperas();
  }

  getComposer(): void {
    const id: number = +this.route.snapshot.paramMap.get('id')!;
    this.composerDetailService.getComposer(id)
    .subscribe(composer => {
      this.composer = composer;
    })

  }

  getCurrentComposerOperas() {
    this.composer.operas.push("Otello");
    this.composer.operas.push("Aida");
  }


}
