"use strict";
/**
 * name - string
 * duration - Number
 * educator = string
 */
Object.defineProperty(exports, "__esModule", { value: true });
class CreateCourseService {
    execute({ duration = 6, educator, name }) {
        console.log(name, duration, educator);
    }
}
exports.default = new CreateCourseService;
/** alternativa passando o data
   execute(data:Course){
    console.log(data.name, data.duration, data.educator);
  }
 */ 
