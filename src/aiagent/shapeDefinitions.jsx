import { PiSquareThin, PiTriangleThin, PiRectangleThin, PiDatabaseLight, PiStarThin, PiDropSimpleThin } from 'react-icons/pi';
import { LiaRobotSolid,LiaCircleSolid } from 'react-icons/lia';
import { MdArrowForward, MdArrowBack, MdArrowUpward, MdArrowDownward, MdHorizontalRule } from 'react-icons/md';

export const shapeDefinitions = {
  circle: {
    id: 'circle',
    name: 'Tool1',
    icon: LiaCircleSolid,
    type: 'custom',
  },
  square: {
    id: 'square',
    name: 'Agent1',
    icon: PiSquareThin,
    type: 'custom',
  },
  triangle: {
    id: 'triangle',
    name: 'Tool2',
    icon: PiTriangleThin,
    type: 'custom',
  },
  rectangle: {
    id: 'rectangle',
    name: 'Agent2',
    icon: PiRectangleThin,
    type: 'custom',
  },
  cylinder: {
    id: 'cylinder',
    name: 'Database',
    icon: PiDatabaseLight,
    type: 'custom',
  },
  star: {
    id: 'star',
    name: 'Manager',
    icon: PiStarThin,
    type: 'custom',
  },
  chat: {
    id: 'chatbot',
    name: 'Chatbot',
    icon: LiaRobotSolid,
    type: 'custom',
  },
  drop: {
    id: 'drop',
    name: 'Drop',
    icon: PiDropSimpleThin,
    type: 'custom',
  },
  arrowForward: {
    id: 'arrowForward',
    name: 'Arrow Forward',
    icon: MdArrowForward,
    type: 'custom',
  },
  arrowBack: {
    id: 'arrowBack',
    name: 'Arrow Back',
    icon: MdArrowBack,
    type: 'custom',
  },
  arrowUp: {
    id: 'arrowUp',
    name: 'Arrow Up',
    icon: MdArrowUpward,
    type: 'custom',
  },
  arrowDown: {
    id: 'arrowDown',
    name: 'Arrow Down',
    icon: MdArrowDownward,
    type: 'custom',
  },
  horizontalRule: {
    id: 'horizontalRule',
    name: 'Horizontal Rule',
    icon: MdHorizontalRule,
    type: 'custom',
  },
}; 