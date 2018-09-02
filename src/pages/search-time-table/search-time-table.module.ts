import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchTimeTablePage } from './search-time-table';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    SearchTimeTablePage,
  ],
  imports: [
    IonicPageModule.forChild(SearchTimeTablePage),
    TranslateModule.forChild()
  ],
})
export class SearchTimeTablePageModule {}
