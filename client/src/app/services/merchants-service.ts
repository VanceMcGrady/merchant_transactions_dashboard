import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Merchant } from '../models/merchant';

@Injectable({ providedIn: 'root' })
export class MerchantsService {

    private http = inject(HttpClient)

    getMerchants(){
        return this.http.get<Merchant[]>(`${environment.apiUrl}/merchants`)
    }

    updateMerchant(merchantId: number, merchantData: Partial<Omit<Merchant, 'id'>>){
        return this.http.patch<Merchant>(`${environment.apiUrl}/merchants/${merchantId}`, merchantData)
    }
}
