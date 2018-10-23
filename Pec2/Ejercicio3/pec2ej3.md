# PEC 2

## Ejercicio 3 - SWARM

> Arrancamos "ganache-cli" y desplegamos con "truffle migrate", como hacemos habitualmente para test en local.

> Sincronizamos con la testnet Rinkeby, como hicimos en el ejercicio 1:

![Img231](./img/rinkeby.png)

> Instalamos SWARM siguiendo estas [instrucciones](https://swarm-guide.readthedocs.io/en/latest/installation.html)

> Inicializamos SWARM

![Img232](./img/swarm.png)


> Subimos el contenido a SWARM (src + build/contracts) en build:

![Img233](./img/swarmUpload.png)

> Donde el hash del raíz de la aplicación es "20206c0c6aeefcd31d39b7ea308470effbc01a0e30df8af7ab8aa6f0fbd7cbd3"

> A continuación, modificamos el contenido para nuestro nombre: "psric.test" para que apunte a este hash:

![Img234](./img/ens.png)

> Accedemos a la aplicación a través de SWARM a través del ENS "rictok.test":

![Img235](./img/psric.png)
