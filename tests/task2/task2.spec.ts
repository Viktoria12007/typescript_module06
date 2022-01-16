// @ts-ignore
import {IsTypeEqual, typeAssert} from "../type-assertions";
import {First} from "../../src/task2/task2";

describe('task2', () => {
    describe('First', () => {
        it('should work', () => {
            type Example = ['h', 'j', 'k'];

            type FirstExample = First<Example>;

            type Expected = 'h';

            typeAssert<IsTypeEqual<FirstExample, Expected>>();

            expect(true).toStrictEqual(true);
        });
    });
});
