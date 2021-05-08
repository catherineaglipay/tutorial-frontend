import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { TestComponent } from "./test.component";

// My Additionals - Catherine
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';

const TEST_ROUTE = [{ path: '', component: TestComponent }];

@NgModule({
  declarations: [TestComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(TEST_ROUTE),
    FormsModule,
    ModalModule.forRoot()
  ]
})
export class TestModule { }
