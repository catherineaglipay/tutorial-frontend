import * as moment from 'moment';

export class BaseComponent {
    GLOBAL_CURRENT_DATE = moment().format("YYYY-MM-DD")
    test_global_var = "catherine global variable"

    testGlobalFunction() {
        return "catherine global function"
    }
}