# java-bin [![Build Status](https://travis-ci.org/mastilver/java-bin.svg?branch=master)](https://travis-ci.org/mastilver/java-bin)

> Binary wrapper for java


## CLI

```
$ npm install --global java-bin
```

```
$ java --help
```


## API

```
$ npm install --save java-bin
```

```js
const execFile = require('child_process').execFile;
const java = require('java-bin');

execFile(java, ['--version'], (err, stdout) => {
	console.log(stdout);
});
```


## License

MIT © [Thomas Sileghem](http://mastilver.com)
