import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ResultComponent } from "./result/result.component";
import { ScanComponent } from "./scan/scan.component";

const routes: Routes = [
  {
    path: "scan",
    component: ScanComponent
  },
  {
    path: "result",
    component: ResultComponent
  },
  {
    path: "",
    redirectTo: "result",
    pathMatch: "full"
  },
  {
    path: "**",
    redirectTo: "result"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: "enabled",
      enableTracing: false
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
