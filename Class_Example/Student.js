var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Student = /** @class */ (function () {
    function Student(fName, lName, Mobileno, Marks, Standerd) {
        this.Marks = Marks;
        this.MobileNo = Mobileno;
        this.lName = lName;
        this.fName = fName;
        this.Standerd = Standerd;
    }
    return Student;
}());
var NewStudent = /** @class */ (function (_super) {
    __extends(NewStudent, _super);
    function NewStudent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NewStudent;
}(Student));
