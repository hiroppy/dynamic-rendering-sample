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

### Performance 

The rendertron server scales to 10 pods. Also, this example page is heavy because it uses d3.js. https://observablehq.com/@d3/hierarchical-edge-bundling

#### For users

```shell
ᐅ wrk -t12 -c20 -d30s http://127.0.0.1:8080
Running 30s test @ http://127.0.0.1:8080
  12 threads and 20 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    11.32ms    4.49ms  83.83ms   72.04%
    Req/Sec    88.59     20.75   333.00     71.62%
  31842 requests in 30.10s, 30.06MB read
Requests/sec:   1057.83
Transfer/sec:      1.00MB
```

#### For bots

```shell
ᐅ wrk -t12 -c30 -d30s --timeout 10 http://127.0.0.1:8080
Running 30s test @ http://127.0.0.1:8080
  12 threads and 30 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     8.86s     1.19s    9.91s    90.00%
    Req/Sec     0.54      1.95    10.00     95.83%
  48 requests in 30.08s, 22.12MB read
  Socket errors: connect 0, read 0, write 0, timeout 38
Requests/sec:      1.60
Transfer/sec:    753.06KB
```

```shell
ᐅ wrk -t12 -c15 -d30s --timeout 10 http://127.0.0.1:8080
Running 30s test @ http://127.0.0.1:8080
  12 threads and 15 connections  Thread Stats   Avg      Stdev     Max   +/- Stdevbind: address already in
    Latency     6.36s     1.09s    9.44s    79.17%
    Req/Sec     0.00      0.00     0.00    100.00%
  49 requests in 30.10s, 22.58MB read
  Socket errors: connect 0, read 0, write 0, timeout 1
Requests/sec:      1.63
Transfer/sec:    768.12KB
```

with chorme options to improve performance

```shell
ᐅ wrk -t12 -c30 -d30s --timeout 10 http://127.0.0.1:8080
Running 30s test @ http://127.0.0.1:8080
  12 threads and 30 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     7.82s     1.23s    9.80s    57.14%
    Req/Sec     0.45      1.88    10.00     96.08%
  51 requests in 30.06s, 23.04MB read
  Socket errors: connect 0, read 0, write 0, timeout 30
Requests/sec:      1.70
Transfer/sec:    784.83KB
```

```shell
ᐅ wrk -t12 -c15 -d30s --timeout 10 http://127.0.0.1:8080
Running 30s test @ http://127.0.0.1:8080
  12 threads and 15 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     4.85s     1.57s    9.13s    80.00%
    Req/Sec     0.00      0.00     0.00    100.00%
  65 requests in 30.10s, 29.95MB read
Requests/sec:      2.16
Transfer/sec:      0.99MB
```

## Debug

```sh
$ git clone git@github.com:hiroppy/dynamic-rendering-sample.git
$ cd dynamic-rendering-sample
$ docker-compose up --build
$ open http://localhost:8080
```