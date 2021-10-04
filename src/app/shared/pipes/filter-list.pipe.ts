import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'filterlist',
})
export class FilterListPipe implements PipeTransform {
  transform(
    itemList: unknown[],
    searchText: string,
    searchKey: string = 'name'
  ): unknown[] {
    if (!itemList) return [];
    if (!searchText) return itemList;
    searchText = searchText.toLowerCase();
    return itemList.filter((it: any) => {
      return it[searchKey].toLowerCase().includes(searchText);
    });
  }
}
