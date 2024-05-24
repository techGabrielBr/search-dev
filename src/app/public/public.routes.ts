import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { ProfileComponent } from "./components/profile/profile.component";

export const publicRoutes: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "perfil", component: ProfileComponent},
  {path: "**", redirectTo: "home", pathMatch: "full"}
];
