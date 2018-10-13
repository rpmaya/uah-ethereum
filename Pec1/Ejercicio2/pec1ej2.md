# PEC 1

## Ejercicio 2

> Primero ejecutamos:

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

> Y, posteriormente, sus alturas máximas de bloque (number) con
```
> eth.getBlock(<head>)
```
![Img123](./img/getBlock.png)
