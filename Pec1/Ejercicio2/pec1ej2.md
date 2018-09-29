# PEC 1

## Ejercicio 2

> Primero intento acceder a la adress con
```
eth.coinbase
```
> Pero obtengo error de web3, por lo que prosigo con
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
![Img121](./img/peers.png)

```
> eth.getBlock(<head>)
``
![Img121](./img/getBlock.png)
