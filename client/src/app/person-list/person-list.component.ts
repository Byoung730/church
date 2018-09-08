import { Component, OnInit } from "@angular/core";
import { APIService } from "../api.service";

@Component({
  selector: "app-person-list",
  templateUrl: "./person-list.component.html",
  styleUrls: ["./person-list.component.css"]
})
export class PersonListComponent implements OnInit {
  private people: Array<object> = [];
  constructor(private apiService: APIService) {}
  ngOnInit() {
    this.getAllPeople();
  }
  public getAllPeople() {
    this.apiService.getAllPeople().subscribe((data: Array<object>) => {
      this.people = data;
      console.log(data);
    });
  }
}
