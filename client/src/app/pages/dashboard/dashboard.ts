import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { rxResource } from '@angular/core/rxjs-interop';
import { MerchantsService } from '../../services/merchants-service';
import { Merchant } from '../../models/merchant';

type MerchantEditForm = Pick<Merchant, 'name' | 'category' | 'city' | 'state' | 'email'>;

@Component({
  imports: [FormsModule],
  selector: 'app-dashboard',
  styleUrl: './dashboard.scss',
  templateUrl: './dashboard.html',
})
export class Dashboard {
  private merchantsService = inject(MerchantsService);

  merchants = rxResource({
    stream: () => this.merchantsService.getMerchants(),
  });

  editingMerchantId = signal<number | null>(null);
  editForm: MerchantEditForm = { name: '', category: '', city: '', state: '', email: '' };

  startEdit(merchant: Merchant) {
    this.editingMerchantId.set(merchant.id);
    this.editForm = {
      name: merchant.name,
      category: merchant.category,
      city: merchant.city,
      state: merchant.state,
      email: merchant.email,
    };
  }

  cancelEdit() {
    this.editingMerchantId.set(null);
  }

  saveEdit(merchantId: number) {
    this.merchantsService.updateMerchant(merchantId, this.editForm).subscribe(() => {
      this.editingMerchantId.set(null);
      this.merchants.reload();
    });
  }
}
