# Portfolio v2 for Krzysztof Kozlowski

You can access the site on [krzysztof.se](https://krzysztof.se).

If that page hosts a newer verison of the portfolio you can probably still access it by specifying the subdomain [v2.krzysztof.se](https://v2.krzysztof.se). 

> Preview of the portfolio:

![preview of the portfolio](preview.jpg)

## Tech and choices

| Tech/Package   | Description | Reason |
| -------------- | ----------- | ------ |
| [Astro](https://astro.build/) 
| [LenisJS](https://lenis.darkroom.engineering/) 
| [AnimeJS](https://animejs.com/) 



## How to install and run

The easiest way to get the project running is with method 1 but this does not the developer tooling. Method 2 uses devcontainers with vscode which containerizes the application and also installs all developer extensions automatically. 

>Method 2 is recommended if you dont want to polute your regular vscode with extensions only needed for this project. 

### Method 1

1. Clone the project.
2. Open a terminal in the project root and run the command below.

```bash 
npm run dev
```

### Method 2

1. Clone the project and open it with vscode
2. Follow [this](https://code.visualstudio.com/docs/devcontainers/tutorial) tutorial on how to install docker devcontainers in vscode. If you already have docker installed on your system you should only have to go into the extensions tab and install the [Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extension.
3. Open the project in the devcontainer. The devcontainer should now have installed every extension and dependency thats needed.
4. Open a terminal in the project root and run the first command below to start a localhost instance or the second command below to see all runnable options.

> FIX NOT CORRECT BECAUSE DOCKER NETWORK ISSUES

```bash 
npm run dev
```

```bash 
npm run
```