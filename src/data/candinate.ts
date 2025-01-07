import { Candinate } from "./types";
import Person1 from '../assets/images/person1.png'
import Person2 from '../assets/images/person2.png'
import Person3 from '../assets/images/person3.png'

export const candinates:Candinate[] = [
  {
    name: 'Ryan Lee',
    position: 'Senior Graphic Designer',
    photo: Person1,
    skills: ['Creative Suite', 'Illustrator', 'Marketing' , 'Canva']
  },
  {
    name: 'Alex Martin',
    position: 'Senior Graphic Designer',
    photo: Person2,
    skills: ['Adobe Creative Suite', 'Figma', 'Typography' , 'After Effects'],
    verified: true
  },
  {
    name: 'Emma Rivera',
    position: 'Senior Graphic Designer',
    photo: Person3,
    skills: ['Creative Suite', 'Illustrator', 'Typography' , 'Canva']
  }
]