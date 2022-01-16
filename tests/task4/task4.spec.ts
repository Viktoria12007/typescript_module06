// @ts-ignore
import {IsTypeEqual, typeAssert} from "../type-assertions";
import {DeepReadonly} from "../../src/task4/task4";

describe('task4', () => {
    describe('DeepReadonly', () => {
        it('should work', () => {
            type Example = {
                field1: string
                field2: {
                    field3: string,
                    field4: 1,
                },
                field5: '1',
            };

            type ReadonlyExample = DeepReadonly<Example>;

            type Expected = {
                readonly field1: string,
                readonly field2: {
                    readonly field3: string,
                    readonly field4: 1,
                },
                readonly field5: '1',
            }

            typeAssert<IsTypeEqual<ReadonlyExample, Expected>>();

            expect(true).toStrictEqual(true);
        });
    });
});
