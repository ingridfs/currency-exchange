import { Pipe, PipeTransform } from '@angular/core';
import { formatCurrency, getCurrencySymbol} from '@angular/common'


@Pipe({
    name: 'formatting'
})

export class FormattingPipe implements PipeTransform {
    transform(
        val: number,
        currencyCode: string = 'EUR',
        display:
        | 'code'
        | 'symbol'
        | 'symbol-narrow'
        | string
        | boolean = 'symbol',

    digitsInfo: string = '3.2-2',
    locale: string = 'fr'
        ): string | null{
            return formatCurrency(
                val,
                locale,
                getCurrencySymbol(currencyCode, 'wide'),
                currencyCode,
                digitsInfo,
            );
        
    }
}