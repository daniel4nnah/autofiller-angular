import { Component, computed } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { signal } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, MatSidenavModule, MatButtonModule, CommonModule ],
  animations: [
    trigger('sidenavAnimation', [
      state('collapsed', style({ width: '65px' })),
      state('expanded', style({ width: '200px' })),
      transition('collapsed <=> expanded', animate('500ms ease-in-out'))
    ])
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  collapsed = signal(false)
  sidenavWidth = computed(() => this.collapsed() ? '200px' : '65px')

  constructor(private _router: Router, private route: ActivatedRoute){
  }

  ngOnInit(){}

  sendForms(){
    this._router.navigate(['fill_data'], {relativeTo: this.route})
  }

}
