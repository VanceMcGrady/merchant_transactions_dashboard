import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";
import { Merchant } from "../entities/merchant.entity";

const ALLOWED_KEYS = ['name', 'category', 'city', 'state', 'email', 'createdAt']

@Injectable()
export class ValidateUpdateMerchantPipe implements PipeTransform {
    transform(value: Partial<Merchant>, metadata: ArgumentMetadata) {
        const unknownKeys = Object.keys(value).filter((key) => !ALLOWED_KEYS.includes(key))
        if (unknownKeys.length) {
            throw new BadRequestException(`Unknown Field(s): ${unknownKeys.join(', ')}`)
        }
        return value
    }
}