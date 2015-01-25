#lice

An open source license generator and license viewer.

[![NPM](https://nodei.co/npm/lice.png)](https://nodei.co/npm/lice/)

[![Build status](https://travis-ci.org/superkhau/lice.svg?branch=master)](https://travis-ci.org/superkhau/lice)

![](/data/lice.png)

##Installation
```
npm install -g lice
```

##Usage

```
lice
# follow the prompts
```

##CLI mode

```
Usage:
  lice [options]

Options:
  -h, --help     Display the help menu
  -g, --generate Generate a license [default `true`]
  -l, --license  The type of license to generate, [default `mit`]
  -n, --name     The name of the generated license, [default `LICENSE`]
  -p, --path     License generation file path, [default `current working dir`]
  -s, --show     Show the contents of a license
  -u, --user     The name to use in the generated license
  -v, --version  Display the version
  -y, --year     Year placeholder [default `current year`]

Available licenses:
  isc ISC License (ISC)
  mit The MIT License (MIT) [default]
```

##Example

Let's say you want an MIT license for your project. Switch to the directory you
want the license generated, run `lice` and follow the prompts:

```
cd /your/project/dir
lice
#follow the prompts, your license will be generated in /your/project/dir
```

Or if you prefer CLI mode:

```
lice -g -l mit -u 'John Doe' # see above for flag definitions or run `lice -h`
```

###Note
You can also provide a path to where you want the license generated via the `-p`
option.
