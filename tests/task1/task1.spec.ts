// @ts-ignore
import {IsTypeEqual, typeAssert} from "../type-assertions";
import {MyOmit} from "../../src/task1/task1";

describe('task1', () => {
    describe('MyOmit', () => {
        it('should work', () => {
            type Todo = {
                field1: string,
                field2: string,
                field3: string
            }


            type MyOmitExample = MyOmit<Todo, 'field1' | 'field2'>;

            type Expected = {
                field3: string,
            };

            typeAssert<IsTypeEqual<MyOmitExample, Expected>>();

            expect(true).toStrictEqual(true);
        });
    });
});
