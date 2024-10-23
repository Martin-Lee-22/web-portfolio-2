import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone: true
})
export class TruncatePipe implements PipeTransform {

/**
 * Transforms the input value to a truncated string if it exceeds the specified limit.
 * 
 * @param value - The input string to be truncated.
 * @param limit - The maximum length of the output string. Defaults to 50.
 * @returns The truncated string if it exceeds the limit, otherwise the original string.
 */
  transform(value: string, limit: number = 50): string {
    if (value.length <= limit) {
      return value;
    }
    return value.substring(0, limit) + '...';
  }

}
