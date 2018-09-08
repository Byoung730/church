import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PersonListComponent } from "./person-list/person-list.component";
import { PersonCreateComponent } from "./person-create/person-create.component";
import { DebitListComponent } from "./debit-list/debit-list.component";
import { DebitCreateComponent } from "./debit-create/debit-create.component";
import { CreditListComponent } from "./credit-list/credit-list.component";
import { CreditCreateComponent } from "./credit-create/credit-create.component";
import { BlogListComponent } from "./blog-list/blog-list.component";
import { BlogCreateComponent } from "./blog-create/blog-create.component";

@NgModule({
  declarations: [
    AppComponent,
    PersonListComponent,
    PersonCreateComponent,
    DebitListComponent,
    DebitCreateComponent,
    CreditListComponent,
    CreditCreateComponent,
    BlogListComponent,
    BlogCreateComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
