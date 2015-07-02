# edu.uoc.cordova.plugins.openAPI
==========================================

Plugin Cordova para acceder a la openAPI

---------------
## Instalación

    $ cordova plugin add XXXXX

----------------------
## Plataformas soportadas

- Android

----------------------
## Skeleton

El objeto `openAPI`, expuesto en `edu.uoc.openAPI`, provee ....

-----------
### Métodos

- echo

--------------------------------------------------------
#### Skeleton.echo(String, callback)

Devuelve al callback el String que se le pasa por parametro.

##### Parámetros

- __callback__ (Función) Función que recibe la respuesta de llamar a la parte nativa.

##### Uso

```javascript
    function debugCallback(str) {
        console.log('Resultado: ' + str);
    }

    Skeleton.echo('Texto de prueba' , debugCallback);
```

##### Plataformas soportadas

- Android
- iOS
