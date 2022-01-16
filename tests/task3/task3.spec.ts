import { MyReadonly } from "../../src/task3/task3";
// @ts-ignore
import {IsTypeEqual, typeAssert} from "../type-assertions";

describe('task3', () => {
    describe('MyReadonly', () => {
        it('should work', () => {
            type Example = {
                field1: string
                field2: string
                field3: boolean
            };

            type ReadonlyExample = MyReadonly<Example, 'field1' | 'field2'>;

            type Expected = Omit<Example, 'field1' | 'field2'> & { readonly field1: string, readonly field2: string};

            typeAssert<IsTypeEqual<ReadonlyExample, Expected>>();

            expect(true).toStrictEqual(true);
        });
    });
});
