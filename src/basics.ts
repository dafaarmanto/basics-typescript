// Types
let username: string = "Saul Goodman"
let age: number = 30
let isEmployed: boolean = true
let myRgx: RegExp = /foo/

const names: string[] = username.split(" ");
const myValues: Array<number> = [1, 2, 4]

interface PersonTypes {
    firstName: string,
    lastName: string
}

const person: PersonTypes = {
    firstName: "Kim",
    lastName: "Wexler"
}

const ids: Record<number, string> = {
    30: "a",
    40: "b"
}

ids[30] = "c"

if (ids[30] === "D") {}

for (let i = 0; i < 10; i++) {}

[1, 2, 3].forEach(v => console.log(v))
const out = [4, 5, 6].map(v => v * 10)