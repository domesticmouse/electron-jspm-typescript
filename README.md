# EJT

EJT (Electron jspm TypeScript) is a boileplate of building apps with Electron, jspm and TypeScript.

## What's New

* V 0.1 Hello World

## Getting Started

### Configure Your Environment

1. Install Node.js from the [official site](http://nodejs.org) or from
[nvm](https://github.com/creationix/nvm).

2. Install jspm via npm and configure

    $ npm install jspm -g

	$ jspm registry config github

	Following the jspm prompt to enter your GitHub credential. Make sure jspm is 0.16+.

3. Install Electron via npm

	$ npm install eletron-prebuilt -g


### Build and Run

1. Clone a local copy of the code:

    $ git clone https://github.com/yysun/electron-jspm-typescript.git

    $ cd electron-jspm-typescript

2. Restor jspm packages

    $ npm install
    
    $ jspm install

3. If everything worked out, run

    $ electron .


## Roadmap

* Menus and Commands
* Branding
* Application Installation
* Auto Update
* Localization

## License

MIT