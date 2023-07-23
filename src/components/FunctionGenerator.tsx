import { useState } from "react"
import { CalcAction, ExcersizeType } from "../models/Enums"
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
                        let param = Math.floor(Math.random() * 11);
                        params.push(param)
                    } else {
                        params.push(CalcAction.PLUS)
                    }
                };
                break;

            case ExcersizeType.MINUS:

                params = minusExerciseGenerator(functionGeneratorParams, signsAmount)
                console.log(params);

                break;

            default:
                break;
        }

        setParameters(params)
    }

    const minusExerciseGenerator = (functionGeneratorParams: FunctionGeneratorParams, signsAmount: number) : any => {

        let numbers = [];
        let signs = [];

        for (let i = 0; i < functionGeneratorParams.params; ++i) {
            let param = Math.floor(Math.random() * 11);
            numbers.push(param);
        }

        for (let i = 0; i < signsAmount; ++i) {
            signs.push(CalcAction.MINUS);
        }

        numbers.sort(function (a, b) { return b - a });

        let fixedParams = minusExerciseFixer(numbers, signs)
        console.log(fixedParams);
        
        

        return fixedParams;

    }

    // const minusExerciseFixer = (numbers: number[], signs: string[]) => {

    //     let excersizeResult = 0;
    //     console.log(numbers);
    //     console.log(signs);

    //     for (let i = 0; i < numbers.length; ++i) {
    //         if (i === 0) {
    //             excersizeResult = excersizeResult + numbers[i]
    //         } else {
    //             if (signs[i - 1] === CalcAction.MINUS) {
    //                 excersizeResult = excersizeResult - numbers[i]
    //             } else {
    //                 excersizeResult = excersizeResult + numbers[i]
    //             }
    //         }
    //     }

    //     if (excersizeResult < 0) {
    //         for (let i = 0; i < signs.length; ++i) {
    //             if (signs[i] === CalcAction.MINUS) {
    //                 signs[i] = CalcAction.PLUS
    //                 break
    //             }
    //         }
    //     }
    //     console.log(excersizeResult);

    //     if (excersizeResult < 0) {
    //         minusExerciseFixer(numbers, signs)
            
    //     } else {
    //         let fixedParams = minusExerciseBuilder(numbers, signs)
    //         console.log(fixedParams);
            
    //         return fixedParams
    //     }
    // }

    // const minusExerciseFixer = (numbers: number[], signs: string[]) : any => {
    //     let exerciseResult = 0;
    
    //     for (let i = 0; i < numbers.length; ++i) {
    //         if (i === 0) {
    //             exerciseResult = exerciseResult + numbers[i];
    //         } else {
    //             if (signs[i - 1] === CalcAction.MINUS) {
    //                 exerciseResult = exerciseResult - numbers[i];
    //             } else {
    //                 exerciseResult = exerciseResult + numbers[i];
    //             }
    //         }
    //     }
    
    //     if (exerciseResult < 0) {
    //         for (let i = 0; i < signs.length; ++i) {
    //             if (signs[i] === CalcAction.MINUS) {
    //                 signs[i] = CalcAction.PLUS;
    //                 break;
    //             }
    //         }
    //         // Recursive call is replaced by a while loop
    //         return minusExerciseFixer(numbers, signs);
    //     } else {
    //         let fixedParams = minusExerciseBuilder(numbers, signs);
    //         console.log(fixedParams);
    //         return fixedParams;
    //     }
    // };

    const minusExerciseFixer = (numbers: number[], signs: string[]) => {
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
        console.log(fixedParams);
        return fixedParams;
    };

    const minusExerciseBuilder = (numbers: number[], signs: string[]) => {

        let params: (number | string)[] = [];

        for (let i = 0; i < numbers.length; i++) {
            params.push(numbers[i])
            if (i !== numbers.length - 1) {
                params.push(signs[i])
            }

        }

        console.log('====================================');
        console.log(params);
        console.log('====================================');

        //setParameters(params)

        return params;
    }

    return (
        <div>FunctionGenertor


            <div style={{ display: "flex" }}>
                {parameters.map((param, paramIndex) => {
                    return <div key={paramIndex}>{param}</div>;
                })}
            </div>


            <button onClick={() => generateNewFunction({ params: 3, signs: ExcersizeType.MINUS })}>Generate New Function</button>
        </div>

    )
}