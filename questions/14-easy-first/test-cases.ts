import { Equal, Expect } from '@type-challenges/utils'

type First<T extends never[] | any[]> = T['length'] extends 0 ? never : T[0]

type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>
]
