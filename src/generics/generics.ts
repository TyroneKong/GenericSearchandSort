interface Ifoobar {
  foo: string;
  bar: string;
}

const fooBars: Array<Ifoobar> = [
  { foo: "foo1", bar: "bar1" },
  { foo: "foo2", bar: "bar2" },
  { foo: "foo3", bar: "bar3" },
];


export function sorting<T>(data:T[],key: keyof T){
    return fooBars.sort((a:any, b:any)=> a[key] - b[key])
}


console.log(sorting(fooBars,"foo"))
