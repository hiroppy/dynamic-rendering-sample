# A minimum sample of Dynamic Rendering

This project uses [rendertron](https://github.com/GoogleChrome/rendertron) for dynamic rendering. 

## Infrastructure

![infra](./assets/infra.png)

## Result

When users access to this repo, this repo will return this html

![res-users](./assets/res-users.png)

but when bots access the same url, this html will be this.

![res-bots](./assets/res-bots.png)

It means if you use dynamic rendering, SEO will be safety and OGP will enable, even if you don't write Node.js code.

Also, this output is like this.

![](./assets/output.png)

This code using d3.js is too huge but rendertron was able to render as SSR.

![](./assets/network.png)

## Debug

```sh
$ git clone git@github.com:hiroppy/dynamic-rendering-sample.git
$ cd dynamic-rendering-sample
$ docker-compose up --build
$ open http://localhost:8080
```