import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { MerchantsService } from '../../services/merchants-service';

@Component({
  imports: [],
  selector: 'app-dashboard',
  styleUrl: './dashboard.scss',
  templateUrl: './dashboard.html',
})
export class Dashboard {
  private merchantsService = inject(MerchantsService);

  merchants = rxResource({
    stream: () => this.merchantsService.getMerchants(),
  });
}
