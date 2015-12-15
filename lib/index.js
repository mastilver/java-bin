'use strict';
var path = require('path');
var BinWrapper = require('bin-wrapper');
var decompressTarxz = require('decompress-tarxz');

var BASE = 'http://download.oracle.com/otn-pub/java/jdk/8u65-b17/jre-8u65-';

var binWrapper = new BinWrapper()
	.src(BASE + 'windows-x64.tar.gz', 'win32')
	.src(BASE + 'linux-i586.tar.gz', 'linux')
	.src(BASE + 'macosx-x64.tar.gz', 'darwin')
	.dest(path.join(__dirname, '../vendor'))
	.configureDownload(function (download) {
		download.addTransform(decompressTarxz({strip: 1}));
	})
	.configureDownload(function (download) {
		download.opts.headers = {
			cookie: 'oraclelicense=accept-securebackup-cookie'
		};
	})
	.use(process.platform === 'win32' ? 'bin/java.exe' : 'bin/java');

module.exports = binWrapper;
