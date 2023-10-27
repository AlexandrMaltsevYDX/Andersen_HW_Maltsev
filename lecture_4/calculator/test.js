// import Calculator from "./calculator.js";
// import {expect, jest, test} from '@jest/globals';

import Calculator from './calculator'


describe('Calculator', () => {
    it('should instantiate and call child method', () => {
      const childInstance = new Calculator();
      childInstance.setX(1)
      childInstance.setY(1)
      expect(childInstance.logSum()).toBe(2);
    });
  });