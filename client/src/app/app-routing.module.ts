import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PersonListComponent } from "./person-list/person-list.component";

const routes: Routes = [
  { path: "", redirectTo: "people", pathMatch: "full" },
  {
    path: "people",
    component: PersonListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
