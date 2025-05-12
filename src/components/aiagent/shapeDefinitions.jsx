import { PiSquareThin, PiTriangleThin, PiRectangleThin, PiDatabaseLight, PiStarThin, PiChatThin, PiDropSimpleThin } from 'react-icons/pi';
import { LiaCircleSolid } from 'react-icons/lia';
import { MdArrowForward, MdArrowBack, MdArrowUpward, MdArrowDownward, MdHorizontalRule } from 'react-icons/md';

export const shapeDefinitions = {
  circle: {
    id: 'circle',
    name: 'Circle',
    icon: LiaCircleSolid,
    type: 'custom',
  },
  square: {
    id: 'square',
    name: 'Square',
    icon: PiSquareThin,
    type: 'custom',
  },
  triangle: {
    id: 'triangle',
    name: 'Triangle',
    icon: PiTriangleThin,
    type: 'custom',
  },
  rectangle: {
    id: 'rectangle',
    name: 'Rectangle',
    icon: PiRectangleThin,
    type: 'custom',
  },
  cylinder: {
    id: 'cylinder',
    name: 'Cylinder',
    icon: PiDatabaseLight,
    type: 'custom',
  },
  star: {
    id: 'star',
    name: 'Star',
    icon: PiStarThin,
    type: 'custom',
  },
  chat: {
    id: 'chat',
    name: 'Chat',
    icon: PiChatThin,
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