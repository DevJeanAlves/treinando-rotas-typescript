/**
 * name - string
 * duration - Number
 * educator = string
 */

interface Course {
  name: string;
   duration?: number; // opcional "?:"
    educator: string;
}

class CreateCourseService {

  execute({duration = 6, educator, name}:Course){
    console.log(name, duration, educator);
  }
}

export default new CreateCourseService;

/** alternativa passando o data
   execute(data:Course){
    console.log(data.name, data.duration, data.educator);
  }
 */