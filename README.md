# ts-key-namespace

A TypeScript namespace declaration for KeyboardEvent.key strings, just in case you prefer namespaces to enums. Largely based on [`ts-key-enum`](https://www.npmjs.com/package/ts-key-enum) by Nathan Friend. `ts-key-enum` also probably works better.

## Install
```sh
npm install ts-key-namespace --save
```

## Import
```typescript
import Key from "ts-key-namespace";
```

## Example
```typescript
onKeyDown={(ev: KeyboardEvent<HTMLInputElement>)=>{
  if(ev.key === Key.Enter) {
    console.log("Stuff");
  }
}}
```