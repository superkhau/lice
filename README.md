# lice

An open source license generator and license viewer.

[![NPM](https://nodei.co/npm/lice.png)](https://nodei.co/npm/lice/)

[![Build status](https://travis-ci.org/superkhau/lice.svg?branch=master)](https://travis-ci.org/superkhau/lice)

![lice logo](/data/lice.png)

## Installation
You probably want to install this globally, so you can easily add `LICENSE`
files to all your open source projects.

```
npm install -g lice
```

## Usage
```
lice
# follow the prompts
```

## Non-interactive mode

```
Usage:
  lice [options]

Options:
  -h, --help      Display the help menu
  -g, --generate  Generate a license [default `true`]
  -l, --license   The type of license to generate, [default `mit`]
  -n, --name      The name of the generated license, [default `LICENSE`]
  -p, --path      License generation file path, [default `current working dir`]
  -s, --show      Show the contents of a license
  -u, --user      The name to use in the generated license [default `$LICE_USER`]
  -v, --version   Display the version
  -y, --year      Year placeholder [default `current year`]

Available licenses:
  aal             Attribution Assurance License (AAL)
  afl-3.0         Academic Free License 3.0 (AFL-3.0)
  apl-1.0         Adaptive Public License (APL-1.0)
  agpl-3.0        Affero GNU Public License 3.0 (AGPL-3.0)
  apache-2.0      Apache License, Verison 2.0 (Apache-2.0)
  apsl-2.0        Apple Public Source License (APSL-2.0)
  artistic-2.0    Artistic License (Artistic-2.0)
  bsd-2-clause    BSD 2-Clause "Simplified" or "FreeBSD" License (BSD-2-Clause)
  bsd-3-clause    BSD 3-Clause "New" or "Revised" License (BSD-3-Clause)
  bsl-1.0         Boost Software License (BSL-1.0)
  catosl-1.1      Computer Associates Trusted Open Source License 1.1 (CATOSL-1.1)
  cddl-1.0        Computer Associates Trusted Open Source License 1.0 (CDDL-1.0)
  cecill-2.1      CeCILL License (CECILL-2.1)
  cpal-1.0        Common Public Attribution License 1.0 (CPAL-1.0)
  cua-opl-1.0     CUA Office Public License Version 1.0 (CUA-OPL-1.0)
  ecl-2.0         Educational Community License, Version 2.0 (ECL-2.0)
  entessa         Entessa Public License Version 1.0 (Entessa)
  eudatagrid      EU Datagrid Software License (EUDatagrid)
  eupl            European Union Public License v. 1.2
  gpl-3.0         GNU General Public License 3.0 (GPL-3.0)
  isc             ISC License (ISC)
  mit             The MIT License (MIT) [default]
  mpl-2.0         Mozilla Public License Version 2.0 (MPL-2.0)
  ms-pl           Microsoft Public License (MS-PL)
  onur_dev        onur_dev license (onur_dev license)
  tosdr_facebook  Terms of Service Didn"t Read Facebook License (tosdr_facebook)
  transcopyright  Transcopyright License (Transcopyright)
  copyright       Copyright license (Copyright)
  w3c             The W3C SOFTWARE NOTICE AND LICENSE (W3C)
  zlib-libpng     The zlib/libpng License (Zlib)
```

## Example
Let's say you want an MIT license for your project. Switch to the directory
where you want the license generated, run `lice` and follow the prompts:

```
cd /your/project/dir
lice
#follow the prompts, your license will be generated in /your/project/dir
```

Or if you prefer non-interactive mode:

```
lice -g -l mit -u 'John Doe' # see above for flag definitions or run `lice -h`
```

### Note
You may provide a path to where you want the license generated via the `-p`
option.

## Contributing
Please help add more licenses! Submit a PR and I will get it merged ASAP.

1. Add a text file with your license content in the [licenses dir](/licenses).
2. Edit [licenses.js](/lib/licenses.js)
3. Update the `Available licenses` section in [README.md](/README.md)
4. Update the help file `Available licenses` section in [help.txt](/data/help.txt)

A good place to find licenses to add is the
[Open Source Initiative license page](http://opensource.org/licenses/alphabetical)

## Thanks, related projects
- [AudreyFeldroy/Choosea License](https://github.com/audreyfeldroy/choosealicense): Choose a License is a Cookiecutter plugin for selecting an open-source license.
- [Bisaloo/Licenses_Talk](https://github.com/Bisaloo/licenses_talk): How to choose a license for an academic project?
- [Composer/Spdx Licenses](https://github.com/composer/spdx-licenses): Tools for working with the SPDX license list and validating licenses.
- [ClaudiuCeia/Licensor Cli](https://github.com/ClaudiuCeia/licensor-cli): 📜 Easily choose an Open Source license for your awesome project
- [Daald/Dpkg Licenses](https://github.com/daald/dpkg-licenses): A command line tool which lists the licenses of all installed packages in a Debian-based system (like Ubuntu)
- [Nevir/Readable-Licenses](https://github.com/nevir/readable-licenses): Make your open source license text more pleasant to read.
- [Onur/Cargo License](https://github.com/onur/cargo-license): Cargo subcommand to see license of dependencies
- [Open Source Initiative](http://opensource.org/) for providing the license content.
- [Ufal/Public License Selector](https://github.com/ufal/public-license-selector): Tool that will help you select the right open license for your data or software
