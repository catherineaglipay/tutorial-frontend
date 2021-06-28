import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseComponent } from "../../base-component";
import Swal from 'sweetalert2'
import * as moment from 'moment';

import { ApiService } from '../../services/api.service';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent extends BaseComponent implements OnInit {
    @ViewChild("addStudentModal") public addStudentModal: ModalDirective
    @ViewChild("editStudentModal") public editStudentModal: ModalDirective

    global_var = this.test_global_var
    global_func = this.testGlobalFunction()
    local_current_date = moment().format("YYYY-MM-DD")

    student_list = []
    modal_first_name = ""
    modal_middle_name = ""
    modal_last_name = ""

    modal_edit_student_key = 0
    modal_edit_first_name = ""
    modal_edit_middle_name = ""
    modal_edit_last_name = ""

    test_array: Array<any> = [
        {
            id: 1,
            fname: "Wanda",
            mname: "Morales",
            lname: "wmorales0@e-recht24.de"
        },
        {
            id: 2,
            fname: "Virginia",
            mname: "Lee",
            lname: "vlee1@ibm.com"
        },
        {
            id: 3,
            fname: "Margaret",
            mname: "Wright",
            lname: "mwright5j@blog.com"
        }
    ];

    constructor(private API: ApiService) {
        super();
    }

    ngOnInit() {
        // console.log("global var test: ", this.global_var)
        // console.log("global func test: ", this.global_func)
        // console.log("global current date: ", this.GLOBAL_CURRENT_DATE)
        // console.log("local current date: ", this.local_current_date)

        this.getStudents()
    }

    testSwal() {
        Swal.fire({
            title: 'Success!',
            text: 'Do you want to continue',
            icon: 'success',
            confirmButtonText: 'Cool'
        })
    }

    getStudents() {
        this.API.get("/parent-route/get-student-list")
            .subscribe((backend_response: any) => {
                if (backend_response.devMessage == null) {
                    this.student_list = [];
                }
                else {
                    this.student_list = backend_response.devMessage
                }

            }, (error: any) => {
                console.log(error)
            }
        )
    }


    addStudent() {
        this.API.post("/parent-route/save-student", {
            "first_name"        : this.modal_first_name, 
            "middle_name"       : this.modal_middle_name,
            "last_name"         : this.modal_last_name
        }).subscribe(backend_response => {
            // console.log("backend response: ", backend_response)
            if (backend_response.statusCode == 200) {
                Swal.fire({
                    title: "Success!",
                    text: backend_response.devMessage,
                    icon: "success",
                    allowOutsideClick: false,
                    confirmButtonColor: "#00B5E2",
                    confirmButtonText: "Confirm"
                }).then((result) => {
                    if (result.value) {
                        this.ngOnInit()
                        this.addStudentModal.hide()
                    }
                })
                console.log("success add: ", backend_response)
                
            } else {
                Swal.fire({
                    title: "Oops!",
                    text: backend_response.body.message,
                    icon: "warning",
                    allowOutsideClick: false,
                    confirmButtonColor: "#00B5E2",
                    confirmButtonText: "Confirm"
                })
                console.log("error", backend_response)
            }
        }, (error: any) => {
            // Swal.fire({
            //     title: "Oops!",
            //     text: error.message,
            //     icon: "warning",
            //     allowOutsideClick: false,
            //     confirmButtonColor: this.AMA_CUSTOM_PURPLE,
            //     confirmButtonText: "Confirm"
            // })
            console.log(error)
        },)
    }


    editStudent(param_student_data) {
        console.log("edit student data: ", param_student_data)
        this.modal_edit_student_key = param_student_data.key
        this.modal_edit_first_name = param_student_data.fname
        this.modal_edit_middle_name = param_student_data.mname
        this.modal_edit_last_name = param_student_data.lname
    }


    updateStudent() {
        this.API.post("/parent-route/update-student", {
            "key"               : this.modal_edit_student_key, 
            "first_name"        : this.modal_edit_first_name, 
            "middle_name"       : this.modal_edit_middle_name,
            "last_name"         : this.modal_edit_last_name
        }).subscribe(backend_response => {
            // console.log("backend response: ", backend_response)
            if (backend_response.statusCode == 200) {
                Swal.fire({
                    title: "Success!",
                    text: backend_response.devMessage,
                    icon: "success",
                    allowOutsideClick: false,
                    confirmButtonColor: "#00B5E2",
                    confirmButtonText: "Confirm"
                }).then((result) => {
                    if (result.value) {
                        this.ngOnInit()
                        this.editStudentModal.hide()
                    }
                })
                console.log("success update: ", backend_response)
                
            } else {
                Swal.fire({
                    title: "Oops!",
                    text: backend_response.body.message,
                    icon: "warning",
                    allowOutsideClick: false,
                    confirmButtonColor: "#00B5E2",
                    confirmButtonText: "Confirm"
                })
                console.log("error", backend_response)
            }
        }, (error: any) => {
            // Swal.fire({
            //     title: "Oops!",
            //     text: error.message,
            //     icon: "warning",
            //     allowOutsideClick: false,
            //     confirmButtonColor: this.AMA_CUSTOM_PURPLE,
            //     confirmButtonText: "Confirm"
            // })
            console.log(error)
        },)
    }


    deleteStudent(param_student_key) {
        this.API.post("/parent-route/delete-student", {
            "key"               : param_student_key, 
        }).subscribe(backend_response => {
            // console.log("backend response: ", backend_response)
            if (backend_response.statusCode == 200) {
                Swal.fire({
                    title: "Success!",
                    text: backend_response.devMessage,
                    icon: "success",
                    allowOutsideClick: false,
                    confirmButtonColor: "#00B5E2",
                    confirmButtonText: "Confirm"
                }).then((result) => {
                    if (result.value) {
                        this.ngOnInit()
                        this.editStudentModal.hide()
                    }
                })
                console.log("success delete: ", backend_response)
                
            } else {
                Swal.fire({
                    title: "Oops!",
                    text: backend_response.body.message,
                    icon: "warning",
                    allowOutsideClick: false,
                    confirmButtonColor: "#00B5E2",
                    confirmButtonText: "Confirm"
                })
                console.log("error", backend_response)
            }
        }, (error: any) => {
            // Swal.fire({
            //     title: "Oops!",
            //     text: error.message,
            //     icon: "warning",
            //     allowOutsideClick: false,
            //     confirmButtonColor: this.AMA_CUSTOM_PURPLE,
            //     confirmButtonText: "Confirm"
            // })
            console.log(error)
        },)
    }

}
