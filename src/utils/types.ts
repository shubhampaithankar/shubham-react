import { BuiltInQuestion } from 'inquirer/dist/cjs/types/types'

export type Question = BuiltInQuestion & {
    name: string
}
