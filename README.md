#lice

An open source license generator.

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

##Flags

- -v, --view $license_shortname <string>
- -y, --year The year to use. Example 2014
- -n, --fullname John Doe
- -p, --project The name of the project
- -e, --extension The file extension to use for the license (defaults to no // extension
- -p, --path where to generate the license (maybe no arg)

```
//check if all require cli arguments provided
//  yes
//    check if each provided value is valid
//      if invalid, spit error
//      if valid generate the file accordingly
//if command line arguments provided
```
