"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCourse = void 0;
const createCourseService_1 = __importDefault(require("./createCourseService"));
function createCourse(request, response) {
    createCourseService_1.default.execute({ name: "NodeJS",
        educator: "Dani",
        duration: 10 });
    createCourseService_1.default.execute({
        name: "React",
        educator: "Diego"
    });
    return response.send();
}
exports.createCourse = createCourse;
/**independente de qual seja a ordem, poderemos passar para o curso o name, educator e duration. */ 
