### SECCIÓN 3: PREGUNTAS TEÓRICAS


- #### Pregunta 1: Arquitectura de Backend
El documento sugiere usar Node.js con los frameworks Express o NestJS. ¿Cuáles son las
principales diferencias arquitectónicas entre Express y NestJS, y en qué tipo de proyectos o
escenarios recomendarías utilizar uno sobre el otro?

    - la diferencia clave esta en su enfoque de arquitectura, Nestjs estandariza las buenas prácticas dentro del entorno de su arquitectura a seguir, facilitando varias opciones de acoplamiento y optimización. Express es más ligero, libre, sin flujo predefinido de arquitectura, Nestjs también se tiene la opcion de seguir alguna arquitectura de negocio, no esta limitada. Express se utiliza mas para entornos con menor lógica y volumen de peticiones, Nestjs destaca por incluir paquetes oficiales y de la comunidad para no hacerlo robusto y tener mejor optimización. Esto nos permite ahorrar tiempo de configuración y gestión de dependencias ya que con Express se requieren más configuraciones. Una principal diferencia es la integración de su propio OMR con Nestjs, mientras que en Express es necesario instalar dependencias adicionales y configuraciones.
    

- #### Pregunta 2: Bases de Datos (SQL vs NoSQL)
Para la persistencia de datos, la prueba da la opción de elegir entre MongoDB (usando
Mongoose) o PostgreSQL (usando TypeORM). Explica las diferencias teóricas clave entre un
motor de base de datos relacional y uno no relacional. ¿Qué factores tomarías en cuenta para
elegir la base de datos ideal para una aplicación de tareas a gran escala?

    - Bases de datos relacionales (TypeORM): La arquitectura de las tablas relacionadas te ofrece una mayor disponibilidad y mapeo de datos de gran escala, integrando factores clave como triggers, procedimientos almacenados, bitácoras, indices, subconsultas, mapeo de funciones condicionales, etc. Esto las hace altamente factibles para entornos productivos de grandes cantidades de datos, al tener registros con identificadores y relacionados se tiene una mejor estandarización de información y control.
    - Bases de datos NoSQL: esquema de clave y valor (JSON), son muy utilizadas cuando se requiere agilizar el mapeo de informacion y almacenamiento es muy comun utilizarlas para entornos en tiempo real, consultas y analitica frecuentemente, apezar de ser NoSQL se tiene un identificador por registro.
    - Estrategia: entornos de gran escala se podria tener ambos tipos de bases de datos (hibrido), para optimizar el rendimiento. Principalmente, tendria una base de datos  realacionales con typeORM por su solida escalabilidad, eficiencia en consultas y la garantia de integridad en los datos relacionados. 


- #### Pregunta 3: Seguridad y Middlewares
Se solicita proteger las rutas de la API mediante un middleware de autenticación. Describe
teóricamente cómo funciona el ciclo de vida de una petición HTTP que pasa por un middleware
de autenticación. Además, explica brevemente el flujo de trabajo de la autenticación basada en
JWT (JSON Web Tokens) y por qué es preferida en APIs RESTful.

    - el cliente realiza una peticion https al servidor (bakend), dentro de los encabezados (headers), se envian las credenciales o la seccion, tambien conocido como cookie en el navegador, el servidor mediante un middleware se validan dicha información de autodentificación,antes de procesar la solicitud, de ser exitoso continua con dicha petision de lo contrario se le notifica al cliente.
    - JWT : realiza la validacion de autentificación mediante un algoritmo criptografico, dentro de un JSON se tiene dos objectos el header donde se indica el tipo de algoritmo, payload datos personalizados acorde al entorno de negocio, al autodentificarse se tiene una firma o sello, una llave publica para el navegar, el servidor tiene la llave privada, lo que permite validar en cada petición si el tocken esta vigente o si ha sido alterado.
    
- #### Pregunta 4: Gestión del Estado Global en Frontend
En el desarrollo del frontend con Vue (Nuxt 3), se requiere explícitamente el uso de Pinia para
manejar el estado global de la aplicación. ¿Qué problemas arquitectónicos resuelve un gestor
de estado global como Pinia en comparación con pasar props y emitir eventos de forma
tradicional entre múltiples componentes anidados?
    
    - Hasta donde tengo entendido, el uso de pina junto con nuxt facilita el desarrollo y optimiza el uso de los recursos. factibles para gestionar el estado global de aplicativo.

- #### Pregunta 5: Estrategias de Renderizado
El ejercicio de la interfaz de usuario específica que el candidato puede crear una SPA (Single
Page Application) o una SSR (Server-Side Rendering). Define teóricamente ambos conceptos e
indica cuáles son las ventajas y desventajas de utilizar SSR con Nuxt 3, haciendo especial
énfasis en el impacto sobre el SEO y el rendimiento (First Contentful Paint).
    
    - SSR:
        - ventajas: 
            - velocidad de carga inicial, el servidor entrega un html ya renderizado
            - al tener un texto plano de htnml incial el SEO es mejor
        - Desventajas:
            - puede llegar a tener mas consumos de recursos
    - SPA:
        - ventajas:
            - menor carga de trabajo para el servidor solo entrega la estrutura base y los recursos estaticos
            - Despues de la carga inicial, la fluidez es mas rapida
        - desventajas:
            - el cliente debera de esperar para que se descargue todo el paquete y dependencias, antes de ver el contenido por primera vez
            - al tener que esperar la carga del aplicativo, el SEO no es favorable