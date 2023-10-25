# /Src

- typescript codes

# /build

- compiled javascript codes
- html files
- css files

### How to make typescript know that all of the typescript codes are in the src folder ?

- create the tsconfig.json file

```bash
tsc --init
```

- define where the rootDir and outDir are :

```json
rootDir="./src"
outDir="./build/js"
```

- ignore other ts files outside of src to prevent unintended js files transpilation.

```json
"include" : ["src"]
```

- typescript is a strongly typed language and if you want to prevent any unpermitted typescript code from being emitted as valid js files because all invalid typescripts are valid javascripts, then do this :

```json
"noEmitOnError": true
```

- If you want to change the variable declaration from var to let or let to var, you can change the Javascript Language version via :

```json
"target" : "es5" or "es2016"
```
