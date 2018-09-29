# PEC 1

## Ejercicio 2

> Primero intento acceder a la adress con
```
eth.coinbase
```
> Pero obtengo error en web3 (con un light node el error es "not supported", y con un full node es "etherbase must be explicity especified"), por lo que prosigo con
```
> admin.nodeinfo
> eth.getBlock(<genesis>)
```

![Img121](./img/getGenesis.png)

> Obtenemos la cantidad de peers a los que estamos conectados con
```
> net.peerCount
5
```

> Obtenemos información acerca de los nodos
```
> admin.peers
```
![Img122](./img/peers.png)

> Y, posteriormente, sus alturas máximas de bloque con
```
> eth.getBlock(<head>)
```
![Img123](./img/getBlock.png)
