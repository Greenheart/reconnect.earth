// https://stackoverflow.com/a/53758827

// import { rng } from '#lib/seedrandom.js'
// import { rng } from './seedrandom.ts'
// import assert from 'node:assert'
import alea from './seedrandom-alea.ts'

export function shuffle<T>(array: T[], seed: string) {
  const random = alea(seed)
  let m = array.length
  let t: T
  let i: number

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(random() * m--)

    // And swap it with the current element.
    t = array[m]
    array[m] = array[i]
    array[i] = t
  }

  return array
}

// function main() {
//   const [year, week] = getWeekNumber(new Date())
//   console.log("It's currently week " + week + ' of ' + year)

//   const input = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
//   const seed = `${year}:${week}`

//   const expected = `
// 3 4 6 2 5 0 7 9 8 1
// 2 5 7 6 0 3 9 1 8 4
// 6 0 9 7 3 2 1 4 8 5
// 7 3 1 9 2 6 4 5 8 0
// 9 2 4 1 6 7 5 0 8 3
// 1 6 5 4 7 9 0 3 8 2
// 4 7 0 5 9 1 3 2 8 6
// 5 9 3 0 1 4 2 6 8 7
// 0 1 2 3 4 5 6 7 8 9
// 3 4 6 2 5 0 7 9 8 1
// `.trim()

//   const actual = input.map(() => shuffle(input, seed).join(' ')).join('\n')

//   assert.strictEqual(actual, expected, 'Should match the expected output')
//   console.log('OK - Matches the expected output!')
// }

// main()
