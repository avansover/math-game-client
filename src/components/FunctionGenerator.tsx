import { useState } from "react"
import { CalcAction, ExcersizeType, IntRange } from "../models/Enums"
import { FunctionGeneratorParams } from "../models/FunctionCreation"

export const FunctionGenertor = () => {

    const [parameters, setParameters] = useState<(number | string)[]>([])

    const generateNewFunction = (functionGeneratorParams: FunctionGeneratorParams) => {

        let params: (number | string)[] = [];
        let signsAmount = functionGeneratorParams.params - 1;

        switch (functionGeneratorParams.signs) {

            case ExcersizeType.PLUS:

                for (let i = 0; i < (functionGeneratorParams.params + signsAmount); ++i) {
                    if (i % 2 === 0) {
                        let param = Math.floor(Math.random() * functionGeneratorParams.intRange);
                        params.push(param)
                    } else {
                        params.push(CalcAction.PLUS)
                    }
                };
                break;

            case ExcersizeType.MINUS_POSITIVE:

                params = minusExerciseGenerator(functionGeneratorParams, signsAmount)
                console.log(params);

                break;

            default:
                break;
        }

        setParameters(params)
    }

    const minusExerciseGenerator = (functionGeneratorParams: FunctionGeneratorParams, signsAmount: number): (string | number)[] => {

        let numbers = [];
        let signs = [];

        for (let i = 0; i < functionGeneratorParams.params; ++i) {
            let param = Math.floor(Math.random() * functionGeneratorParams.intRange);
            numbers.push(param);
        }

        for (let i = 0; i < signsAmount; ++i) {
            signs.push(CalcAction.MINUS);
        }

        numbers.sort(function (a, b) { return b - a });

        let fixedParams = minusExerciseFixer(numbers, signs)
        return fixedParams;
    }

    const minusExerciseFixer = (numbers: number[], signs: string[]): (string | number)[] => {
        let exerciseResult = 0;

        for (let i = 0; i < numbers.length; ++i) {
            if (i === 0) {
                exerciseResult = exerciseResult + numbers[i];
            } else {
                if (signs[i - 1] === CalcAction.MINUS) {
                    exerciseResult = exerciseResult - numbers[i];
                } else {
                    exerciseResult = exerciseResult + numbers[i];
                }
            }
        }

        while (exerciseResult < 0) {
            // Look for a minus sign and replace it with a plus sign
            let foundMinus = false;
            for (let i = 0; i < signs.length; ++i) {
                if (signs[i] === CalcAction.MINUS) {
                    signs[i] = CalcAction.PLUS;
                    foundMinus = true;
                    break;
                }
            }

            // If no minus sign is found, break out of the loop to prevent infinite loop
            if (!foundMinus) {
                break;
            }

            // Recalculate exerciseResult after adjusting the signs
            exerciseResult = 0;
            for (let i = 0; i < numbers.length; ++i) {
                if (i === 0) {
                    exerciseResult = exerciseResult + numbers[i];
                } else {
                    if (signs[i - 1] === CalcAction.MINUS) {
                        exerciseResult = exerciseResult - numbers[i];
                    } else {
                        exerciseResult = exerciseResult + numbers[i];
                    }
                }
            }
        }

        let fixedParams = minusExerciseBuilder(numbers, signs);
        return fixedParams;
    };

    const minusExerciseBuilder = (numbers: number[], signs: string[]): (string | number)[] => {

        let params: (number | string)[] = [];

        for (let i = 0; i < numbers.length; i++) {
            params.push(numbers[i])
            if (i !== numbers.length - 1) {
                params.push(signs[i])
            }

        }

        return params;
    }

    return (
        <div>FunctionGenertor


            <div style={{ display: "flex" }}>
                {parameters.map((param, paramIndex) => {
                    return <div key={paramIndex}>{param}</div>;
                })}
            </div>


            <button onClick={() => generateNewFunction({ params: 3, signs: ExcersizeType.MINUS_POSITIVE, intRange: IntRange.TWENTY })}>Generate New Function</button>
        </div>

    )
}