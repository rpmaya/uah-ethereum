# PEC 1

## Ejercicio 2

> Primero intento acceder a la adress con
```
eth.coinbase
```
> Pero obtengo error en web3 (con el full node el error es "etherbase must be explicity especified"), por lo que prosigo con
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

> Obtenemos información acerca de los nodos y, posteriormente, sus alturas máxima de bloque con
```
> admin.peers
```
![Img122](./img/peers.png)

```
> eth.getBlock(<head>)
```

![Img123](./img/getBlock.png)
