import {Request, Response} from 'express';
import createCourseService from './createCourseService';

export function createCourse(request: Request, response: Response) {

  createCourseService.execute({name: "NodeJS",
  educator: "Dani",
  duration: 10});

  createCourseService.execute({
    name: "React",
    educator: "Diego"
  })

  return response.send()
}

/**independente de qual seja a ordem, poderemos passar para o curso o name, educator e duration. */