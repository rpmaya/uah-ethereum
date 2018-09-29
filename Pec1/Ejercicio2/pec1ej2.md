# PEC 1

## Ejercicio 2

> Primero intento acceder a la adress con
```
eth.coinbase
```
> Pero obtengo error en web3 (con light, con full node el error es "etherbase must be explicity especified"), por lo que prosigo con
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

```
> eth.getBlock(<head>)
```

> Y, posteriormente, sus alturas máximas de bloque con
![Img123](./img/getBlock.png)
