# Introducción a los sistemas de seguridad electrónica y normativa

**Circuito cerrado de televisión y seguridad electrónica**  
2.º CFGM Instalaciones de Telecomunicaciones

---

La **seguridad electrónica** comprende el conjunto de medios electrónicos destinados a detectar, identificar, transmitir, registrar o comunicar situaciones que pueden afectar a personas, bienes, instalaciones o procesos. Dentro de este ámbito se incluyen sistemas muy diferentes entre sí —detección de incendios, detección de gases, intrusión, videovigilancia, control de accesos o seguimiento—, pero todos comparten una misma idea básica: transformar una situación física del entorno en información útil para tomar una decisión y, cuando proceda, generar una respuesta.

Un sistema de seguridad profesional no puede analizarse únicamente por el número de detectores o cámaras que incorpora. Su eficacia depende de la coordinación entre varios subsistemas: **captación, transmisión, procesamiento, señalización, actuación, alimentación, registro y supervisión**. Un fallo en cualquiera de ellos puede reducir o anular la protección proporcionada por el conjunto.

Esta unidad introduce seis bloques: clasificación de los sistemas de seguridad electrónica, elementos que los constituyen, medios de comunicación entre componentes, grados de seguridad, ejecución y mantenimiento, y normativa. Su estudio está pensado para unas diez horas de teoría; los contenidos permiten después profundizar en incendios, intrusión, CCTV y control de accesos sin confundir sus requisitos técnicos ni legales.

En relación con el [currículo oficial del módulo 0364](https://www.boe.es/buscar/doc.php?id=BOE-A-2009-18404), aquí se trabaja **una parte del RA1**: interpretar la normativa, reconocer tipos y bloques funcionales de instalaciones, y describir equipos de transmisión y sus funciones. También se inicia **una parte del RA8**: identificar riesgos de montaje y mantenimiento y relacionarlos con medidas de prevención y protección ambiental. Esta introducción no acredita por sí sola todos los criterios de evaluación de ambos resultados; el reconocimiento de equipos sobre esquemas reales, la selección técnica y la aplicación práctica de medidas se desarrollarán en otras unidades y actividades.

> **Pregunta inicial**
>
> Una cámara que graba, pero cuyo disco está averiado, y una alarma que detecta una apertura, pero no transmite el aviso, presentan fallos distintos. ¿Qué bloque funcional falla en cada caso y cómo podría detectarse antes de un incidente?

---

## 1. Concepto de sistema de seguridad electrónica

Un **sistema de seguridad electrónica** puede definirse como el conjunto organizado de equipos, dispositivos, medios de transmisión y procedimientos destinado a detectar una condición de riesgo o un evento relevante, procesar la información asociada y generar una respuesta conforme a una lógica previamente establecida.

La finalidad concreta depende de la aplicación. Un sistema de intrusión pretende detectar una entrada no autorizada; uno de incendios, reconocer fenómenos compatibles con un fuego; uno de CCTV, captar y gestionar imágenes; y uno de control de accesos, autorizar o denegar el paso de personas o vehículos. Sin embargo, el funcionamiento general puede expresarse mediante una cadena común:

**detección o captación → transmisión → procesamiento → decisión → aviso o actuación → registro y supervisión**

### 1.1. Detección

La primera función consiste en obtener información del entorno. Para ello se emplean sensores, detectores, cámaras, lectores, pulsadores u otros dispositivos de entrada.

Un detector no “comprende” por sí mismo el riesgo. Lo que hace es medir o reconocer una determinada magnitud o condición: radiación infrarroja, humo, temperatura, apertura de un contacto, vibración, imagen, concentración de un gas, presencia de una credencial, etc. El sistema de control interpreta después esa información.

### 1.2. Transmisión

La información generada por los dispositivos debe llegar a la unidad que la procesa. Esta transmisión puede realizarse mediante:

- conductores eléctricos;
- buses de comunicación;
- cable coaxial;
- par trenzado;
- redes Ethernet;
- fibra óptica;
- radiofrecuencia;
- Wi‑Fi;
- redes móviles;
- otros enlaces específicos.

El medio elegido afecta a la fiabilidad, el alcance, la velocidad, la inmunidad frente a interferencias, el coste de instalación, el mantenimiento y la posibilidad de sabotaje.

### 1.3. Procesamiento

La **unidad de control** recibe las señales, determina su significado y ejecuta la lógica programada. Dependiendo del sistema, esta función puede realizarla:

- una central de intrusión;
- una central de detección de incendios;
- un DVR o NVR;
- un servidor de vídeo;
- un controlador de acceso;
- un software de gestión;
- una plataforma integrada.

La unidad de control debe diferenciar, cuando proceda, entre estados de reposo, alarma, avería, sabotaje, desconexión, fallo de alimentación o pérdida de comunicación.

### 1.4. Señalización y actuación

Una vez procesada la información, el sistema puede:

- activar una sirena;
- encender una señal luminosa;
- bloquear o liberar una puerta;
- transmitir una alarma;
- iniciar una grabación;
- mostrar una cámara en un monitor;
- enviar una notificación;
- accionar un relé;
- registrar un evento;
- generar una maniobra sobre otro sistema.

No todas las instalaciones deben actuar del mismo modo. La respuesta debe corresponder al riesgo, a la normativa aplicable y al diseño previsto.

### 1.5. Supervisión

La supervisión permite detectar fallos del propio sistema. Esta función es esencial en seguridad porque una instalación puede parecer operativa y haber perdido realmente parte de su capacidad de protección.

Entre los estados supervisables se encuentran:

- corte de una línea;
- cortocircuito;
- fallo de alimentación principal;
- batería baja o defectuosa;
- pérdida de comunicación;
- apertura de una envolvente;
- sabotaje de un detector;
- pérdida de vídeo;
- fallo de disco;
- desconexión de un dispositivo.

> **Idea clave**
>
> Un sistema de seguridad debe vigilar tanto el riesgo externo como su propia capacidad para seguir funcionando. La supervisión de averías y sabotajes forma parte de la seguridad, no es una función secundaria.

---

## 2. Clasificación de los sistemas de seguridad electrónica

La clasificación más útil es la que atiende a la **finalidad de protección**. En un mismo edificio pueden coexistir varios sistemas y compartir medios de comunicación, software o infraestructuras, pero cada uno responde a un riesgo diferente.

### Vídeo — Bloques de un sistema de seguridad

Antes de verlo, dibuja una cadena de cuatro bloques entre un detector y una sirena. Durante el vídeo, identifica qué equipos realizan la detección, el control, la comunicación y la actuación. Después, explica qué estado mostraría el sistema si fallase uno de esos enlaces. El ejemplo del fabricante ilustra una arquitectura concreta; no sustituye los requisitos normativos de una instalación real.

https://www.youtube.com/watch?v=BNPs2s6AbCQ

### 2.1. Sistemas de detección y alarma de incendios

Los sistemas de detección y alarma de incendios tienen como objetivo reconocer de forma temprana uno o varios fenómenos asociados a un incendio y comunicar la situación para permitir una respuesta rápida.

Pueden incluir:

- detectores automáticos;
- pulsadores manuales;
- centrales de control e indicación;
- sirenas y dispositivos ópticos;
- módulos de entrada y salida;
- fuentes de alimentación;
- baterías;
- sistemas de transmisión;
- enlaces con otros sistemas de protección.

Los detectores pueden responder a humo, temperatura, radiación de llama u otros fenómenos. La selección depende del tipo de riesgo, de las condiciones ambientales y del comportamiento esperado del incendio.

Debe distinguirse entre **detección y alarma** y **extinción**. La primera identifica o comunica el incendio. La segunda emplea un agente extintor o una instalación específica para controlarlo o apagarlo.

En protección contra incendios, el Reglamento de instalaciones de protección contra incendios —RIPCI— regula, entre otros aspectos, requisitos de diseño, instalación, puesta en servicio, mantenimiento e inspección. La familia **UNE-EN 54** establece requisitos técnicos para numerosos componentes de los sistemas de detección y alarma.

<figure class="content-photo"><img src="../img/central-incendios.jpg" alt="Central de detección de incendios con indicadores y controles en el frontal" loading="lazy"><figcaption>Una central de incendios no es una cámara ni un detector: recibe señales, muestra estados y gobierna respuestas. Identifica en la imagen el frontal de operación y piensa qué información debería comunicar una avería. Fotografía: <a href="https://commons.wikimedia.org/wiki/File:Fire_alarm_control_panel_VERS-PK_2.jpg">Georg Pik, CC0 1.0</a>.</figcaption></figure>

### Vídeo — Detector, central y aviso de incendio

Antes de verlo, distingue detección de extinción. Durante la demostración de esta central convencional, localiza entradas de detección, indicación de estados y salida de aviso. Después, explica por qué una central de incendios debe comunicar también una avería. El vídeo muestra un equipo concreto y no sirve como procedimiento de montaje ni como interpretación completa del RIPCI.

https://www.youtube.com/watch?v=Kpof3brkuyc

### 2.2. Sistemas de detección de gases

La detección de gases persigue identificar concentraciones peligrosas de sustancias en el ambiente.

Los riesgos pueden estar asociados a:

- gases inflamables;
- gases tóxicos;
- falta de oxígeno;
- procesos industriales;
- combustión incompleta;
- fugas en instalaciones.

La ubicación de los detectores depende de la densidad relativa del gas, de las corrientes de aire, de la ventilación, de la geometría del recinto y de la fuente probable de fuga.

Por ello no puede adoptarse una regla universal de montaje. Un gas más ligero que el aire tenderá a ascender, mientras que uno más pesado tenderá a acumularse en zonas bajas, aunque el comportamiento real puede verse modificado por temperatura, ventilación y movimiento del aire.

### 2.3. Sistemas de alarma contra intrusión y robo

Estos sistemas detectan accesos o acciones no autorizadas sobre un espacio protegido.

La protección puede organizarse en varios niveles:

- **perimetral exterior**, antes de que el intruso alcance el edificio;
- **perimetral del edificio**, sobre puertas, ventanas, muros y accesos;
- **volumétrica interior**, para detectar movimiento dentro de un recinto;
- **puntual**, sobre cajas fuertes, vitrinas, equipos o bienes concretos.

Entre los dispositivos habituales se encuentran:

- contactos magnéticos;
- detectores PIR;
- detectores de doble tecnología;
- barreras;
- detectores sísmicos;
- sensores de rotura de cristal;
- pulsadores;
- contactos antisabotaje;
- sirenas;
- transmisores.

La detección por sí sola no garantiza una instalación adecuada. El diseño debe considerar el riesgo, la ubicación, las posibles rutas de acceso, las condiciones ambientales, la posibilidad de sabotaje y la forma de verificar la alarma.

### 2.4. Circuito cerrado de televisión

Un **circuito cerrado de televisión (CCTV)** es un sistema de captación y gestión de imágenes destinado a un conjunto limitado de usuarios autorizados.

Puede incluir:

- cámaras;
- ópticas;
- iluminación auxiliar;
- medios de transmisión;
- grabadores;
- servidores;
- monitores;
- software de gestión;
- almacenamiento;
- analítica;
- acceso remoto.

Según la tecnología empleada puede hablarse de:

- CCTV analógico;
- vídeo de alta definición sobre coaxial;
- CCTV IP;
- sistemas híbridos.

La finalidad puede ser la vigilancia en tiempo real, la grabación de evidencias, la verificación de alarmas, el control de procesos o la supervisión de accesos.

El hecho de que una cámara pueda instalarse técnicamente en un punto no significa que su instalación sea jurídicamente admisible. Cuando se captan personas identificadas o identificables, entra en juego la normativa de protección de datos.

<figure class="content-photo"><img src="../img/camaras-ip-domo.png" alt="Dos cámaras de red tipo domo, una motorizada y otra compacta, con formas y prestaciones diferentes" loading="lazy"><figcaption>El aspecto exterior no basta para identificar todas las prestaciones. Estas dos cámaras IP de tipo domo muestran que hay que consultar óptica, alimentación, interfaz y ficha técnica. Fotografía: <a href="https://commons.wikimedia.org/wiki/File:Axis_ip_dome_cameras.png">Bungle, CC BY-SA 4.0</a>.</figcaption></figure>

> **Ejemplo razonado — cámara, transmisión y grabación**
>
> Una cámara IP puede seguir encendida mientras el NVR deja de recibir imágenes por una avería de red. Ver luz de alimentación no demuestra que exista grabación. Para localizar el bloque afectado habría que contrastar el estado de la cámara, el enlace de red, el grabador y el almacenamiento, en ese orden.

La [introducción técnica de Axis a los sistemas de videovigilancia](https://newsroom.axis.com/blog/video-surveillance) ayuda a distinguir cámara, red y grabador. Como material de fabricante, explica posibilidades técnicas, no determina por sí mismo la legalidad del uso de las imágenes.

### Vídeo — Arquitectura analógica e IP de CCTV

Antes de verlo, diferencia en un esquema la salida de una cámara analógica y la de una cámara IP. Durante el vídeo, localiza DVR, NVR, alimentación y conexión de red; no es necesario seguir todavía toda la configuración. Después, señala qué trayecto seguiría el vídeo desde cada tipo de cámara hasta el almacenamiento y qué averías podrían impedir la grabación.

https://www.youtube.com/watch?v=vjfVl5hZujw

### 2.5. Sistemas de control de accesos

Un sistema de **control de accesos** decide si una persona o vehículo está autorizado a entrar, salir o utilizar un recurso.

Los métodos de identificación pueden basarse en:

- algo que el usuario **tiene**, como una tarjeta o llavero;
- algo que el usuario **sabe**, como un PIN;
- algo que el usuario **es**, como una característica biométrica.

Los sistemas más completos combinan varios factores.

Los bloques habituales son:

**credencial → lector → controlador → decisión → actuador → registro**

El actuador puede ser una cerradura eléctrica, electroimán, torno, barrera u otro elemento.

### 2.6. Sistemas de control de presencia

Aunque pueden utilizar equipos similares a los de control de accesos, su finalidad principal es registrar:

- entrada y salida;
- permanencia;
- fichaje;
- horarios;
- incidencias;
- movimientos autorizados.

El tratamiento de datos personales, y especialmente de datos biométricos cuando se utilicen, exige analizar con cuidado la base jurídica y la proporcionalidad del sistema.

### 2.7. Protección de artículos y seguimiento

Otros sistemas de seguridad se orientan a:

- protección electrónica de artículos;
- seguimiento de rondas;
- localización de activos;
- posicionamiento de personas u objetos;
- supervisión de vehículos;
- gestión de zonas restringidas.

Su arquitectura puede incorporar radiofrecuencia, GNSS, redes móviles, RFID, Bluetooth, UWB u otras tecnologías según la aplicación.

---

## 3. Elementos que constituyen un sistema de seguridad

La forma más rigurosa de estudiar una instalación consiste en identificar sus **bloques funcionales**.

| Bloque funcional | Función |
|---|---|
| Captación o detección | Obtener información del entorno. |
| Control y procesamiento | Interpretar señales y ejecutar la lógica. |
| Transmisión | Transportar señales y datos. |
| Señalización | Informar de estados, alarmas o averías. |
| Actuación | Producir una acción física. |
| Alimentación | Suministrar energía y autonomía. |
| Interfaz | Permitir operación y programación. |
| Registro | Almacenar eventos, vídeo o estados. |
| Comunicación exterior | Enviar información a otros sistemas o centros remotos. |

Para reconocer un esquema no basta con memorizar nombres de aparatos. Hay que **leer su leyenda**, relacionar cada símbolo con un equipo real y seguir la dirección de la señal y de la alimentación. La simbología concreta depende del proyecto y de la norma empleada: un rectángulo rotulado «C» podría representar una central en un plano y una cámara en otro. El rótulo, las conexiones y la leyenda son más fiables que la forma aislada.

> **Ejemplo razonado — lectura de un esquema**
>
> En un plano aparecen una cámara «CAM-01», una línea «UTP», un equipo «SW-01» y un «NVR-01». La cámara es el bloque de captación, el cable y el conmutador forman parte de la transmisión, y el NVR gestiona la grabación. Si faltase la leyenda o no se indicase la alimentación de CAM-01, el plano estaría incompleto para comprobar la instalación.

### 3.1. Sensores y detectores

Un sensor transforma una magnitud física en una señal que puede ser utilizada por el sistema.

Las magnitudes habituales incluyen:

- radiación infrarroja;
- temperatura;
- humo;
- gases;
- vibración;
- sonido;
- apertura;
- movimiento;
- presión;
- imagen.

Los detectores pueden clasificarse también en:

- **activos**, cuando emiten energía y analizan su retorno o interrupción;
- **pasivos**, cuando observan una magnitud existente en el entorno.

Esta clasificación es especialmente útil en intrusión. Un PIR es un detector pasivo porque detecta variaciones de radiación infrarroja sin emitirla como principio de funcionamiento. Una barrera infrarroja activa, en cambio, utiliza un emisor y un receptor.

### 3.2. Contactos de estado

Muchos sistemas emplean contactos eléctricos simples para representar estados.

Pueden configurarse como:

- normalmente abierto (NO);
- normalmente cerrado (NC).

En aplicaciones de seguridad se utilizan además resistencias de fin de línea para supervisar el circuito.

#### 3.2.1. Fin de línea

Una **resistencia de fin de línea (EOL)** permite a la central distinguir estados eléctricos diferentes.

Dependiendo de la configuración pueden diferenciarse:

- reposo;
- alarma;
- corte de cable;
- cortocircuito.

Con configuraciones de doble resistencia puede añadirse información adicional, por ejemplo un estado de sabotaje separado.

La resistencia debe situarse en el extremo real de la línea protegida. Colocarla en la central puede hacer que la central “vea” la resistencia aunque el cable hacia el detector haya sido cortado.

> **Idea clave**
>
> La resistencia de fin de línea no se utiliza para “hacer que funcione” una zona. Su función es permitir la **supervisión eléctrica de la línea**.

### 3.3. Centrales de control

La central realiza funciones como:

- alimentación;
- lectura de entradas;
- supervisión;
- temporización;
- gestión de usuarios;
- tratamiento de alarmas;
- control de salidas;
- registro de eventos;
- comunicación remota.

En función del sistema puede trabajar con zonas convencionales, buses direccionables, dispositivos radio o redes IP.

### 3.4. Zonas

Una **zona** es una agrupación lógica o física de dispositivos cuyo estado es interpretado por la central.

En sistemas convencionales puede corresponder a una línea eléctrica. En sistemas direccionables o digitales, la agrupación puede ser fundamentalmente lógica.

Las zonas permiten:

- identificar el origen aproximado de una alarma;
- programar comportamientos;
- aislar partes de la instalación;
- aplicar tiempos de entrada o salida;
- organizar la supervisión.

### 3.5. Actuadores

Un actuador recibe una orden y produce una acción física.

Ejemplos:

- relés;
- sirenas;
- balizas;
- cerraduras;
- electroimanes;
- motores;
- contactos de salida.

En instalaciones integradas, un sistema puede actuar sobre otro. Por ejemplo, una señal de incendio puede ordenar determinadas maniobras sobre puertas, climatización u otros equipos, siempre que el diseño y la normativa lo contemplen.

### 3.6. Señalización acústica y óptica

La señalización debe ser perceptible en el entorno previsto.

No basta con instalar una sirena potente. Deben considerarse:

- nivel de ruido ambiente;
- distancia;
- compartimentación;
- accesibilidad;
- percepción de personas con discapacidad;
- normativa específica.

En detección de incendios, la documentación de PCI recoge la necesidad de que determinados sistemas puedan incorporar señales visuales además de acústicas cuando sea necesario para garantizar la percepción.

### 3.7. Interfaces de usuario

Los teclados, pantallas y aplicaciones permiten:

- armado y desarmado;
- reconocimiento de estados;
- consulta de eventos;
- programación;
- gestión de usuarios;
- silenciamiento;
- rearme;
- pruebas.

En instalaciones profesionales debe existir control de privilegios: no todos los usuarios deben disponer del mismo nivel de acceso.

---

## 4. Alimentación eléctrica y continuidad de servicio

La alimentación condiciona directamente la fiabilidad del sistema.

### 4.1. Fuente principal

La fuente transforma la energía disponible en los valores requeridos por los equipos.

Deben comprobarse:

- tensión nominal;
- corriente máxima;
- potencia;
- temperatura de funcionamiento;
- protecciones;
- compatibilidad.

### 4.2. Consumo

La suma de consumos no debe superar la capacidad de la fuente.

Un cálculo básico considera:

**I_total = I_1 + I_2 + … + I_n**

Pero en seguridad no basta con sumar consumos nominales. Deben diferenciarse estados de reposo y alarma, porque determinados actuadores pueden consumir mucho más durante una emergencia.

### 4.3. Caída de tensión

En líneas largas, la resistencia de los conductores provoca caída de tensión.

Si un detector necesita una tensión mínima y recibe menos por pérdidas en el cable, puede funcionar de forma inestable.

La caída depende de:

- longitud;
- sección;
- corriente;
- resistividad;
- temperatura.

### 4.4. Alimentación de respaldo

Las baterías permiten mantener funciones esenciales ante un fallo de red.

Para dimensionarlas deben considerarse:

- consumo en reposo;
- consumo en alarma;
- autonomía requerida;
- margen por envejecimiento;
- temperatura;
- capacidad real.

### 4.5. Supervisión de alimentación

Un sistema profesional debe poder indicar estados como:

- fallo de red;
- batería baja;
- batería desconectada;
- fallo de cargador;
- tensión insuficiente.

---

## 5. Medios de comunicación entre componentes

### 5.1. Comunicación cableada

La comunicación cableada utiliza un medio físico.

<figure class="content-photo"><img src="../img/cables-ethernet-coaxial.jpg" alt="Dos cables blancos empaquetados, uno con conectores modulares Ethernet y otro destinado a conexión coaxial" loading="lazy"><figcaption>Los cables pueden parecer similares a simple vista. Para identificarlos conviene leer su marcaje y observar el conector de cada extremo; después se comprueba en la documentación qué señal y alimentación transportan. Fotografía: <a href="https://commons.wikimedia.org/wiki/File:Ethernet_Cat5E_RJ45_cable_%26_coaxial_cable.jpg">Kent Madsen, CC BY-SA 2.0</a>.</figcaption></figure>

#### Conductores multipolares

Se emplean para zonas, alimentación, buses o señales auxiliares.

Ventajas:

- estabilidad;
- facilidad de supervisión;
- menor dependencia de baterías;
- inmunidad relativa frente a determinados ataques radio.

Inconvenientes:

- obra;
- canalización;
- mano de obra;
- dificultad de ampliación;
- riesgo de corte.

#### Cable coaxial

Históricamente fundamental en CCTV analógico y todavía utilizado en sistemas HD sobre coaxial.

Se caracteriza por:

- conductor central;
- dieléctrico;
- pantalla;
- cubierta.

La pantalla ayuda a proteger la señal frente a interferencias.

#### Par trenzado

El trenzado reduce la susceptibilidad frente a interferencias electromagnéticas y constituye la base del cableado Ethernet.

Puede transportar:

- datos;
- vídeo IP;
- alimentación mediante PoE;
- otras señales mediante adaptadores.

#### Fibra óptica

Transmite información mediante luz.

Ventajas:

- gran ancho de banda;
- largas distancias;
- inmunidad electromagnética;
- aislamiento eléctrico.

Limitaciones:

- mayor especialización;
- conectores y equipos específicos;
- sensibilidad mecánica del tendido.

### 5.2. Comunicación inalámbrica

La transmisión radio evita cableado entre determinados componentes.

Ventajas:

- instalación rápida;
- menor obra;
- flexibilidad;
- ampliación sencilla.

Limitaciones:

- interferencias;
- obstáculos;
- alcance variable;
- necesidad de baterías;
- mantenimiento;
- posibilidad de inhibición;
- necesidad de supervisión radio.

### 5.3. Supervisión inalámbrica

Un sistema radio profesional no debería limitarse a “recibir cuando el detector transmite una alarma”.

Puede incorporar:

- mensajes periódicos de presencia;
- supervisión de batería;
- tamper;
- medición de cobertura;
- detección de pérdida de enlace;
- cifrado;
- autenticación.

### 5.4. Redes IP

Las redes IP permiten integrar cámaras, grabadores, controladores y software.

Conceptos fundamentales:

- dirección IP;
- máscara;
- puerta de enlace;
- DNS;
- TCP/UDP;
- puertos;
- Ethernet;
- switch;
- VLAN;
- PoE.

El empleo de IP introduce ventajas de integración y acceso remoto, pero también riesgos de ciberseguridad.

### 5.5. PoE

**Power over Ethernet (PoE)** permite transportar alimentación y datos a través del mismo cable Ethernet.

En CCTV IP reduce cableado y permite centralizar alimentación, pero exige:

- compatibilidad entre equipos;
- presupuesto de potencia;
- límites de distancia;
- calidad de cable;
- switch adecuado.

### 5.6. Redes móviles

Los sistemas de alarma pueden transmitir mediante redes móviles como vía principal o respaldo.

Frente a tecnologías antiguas, las soluciones actuales se apoyan fundamentalmente en comunicaciones de datos.

La existencia de una vía móvil no elimina la necesidad de:

- supervisar cobertura;
- controlar alimentación;
- verificar comunicaciones;
- mantener actualizados los equipos.

---

## 6. Arquitectura de comunicaciones y redundancia

Una instalación puede disponer de una única vía o de varias vías de comunicación.

La redundancia aumenta la disponibilidad si las vías son realmente independientes.

En sistemas conectados a CRA, la normativa contempla escenarios de **doble vía de comunicación** y define condiciones en las que la pérdida de vías combinada con determinadas señales puede confirmar una alarma.

La redundancia solo es efectiva si un mismo fallo no inutiliza simultáneamente ambas vías.

> **Ejemplo razonado**
>
> Dos enlaces que comparten el mismo router, la misma alimentación y la misma canalización no proporcionan el mismo nivel de independencia que dos medios físicamente distintos con respaldo energético diferenciado.

---

## 7. Central receptora de alarmas

Una **Central Receptora de Alarmas (CRA)** presta servicios de recepción, verificación y gestión de señales procedentes de sistemas conectados.

Debe distinguirse de la central instalada en el inmueble:

| Central local | CRA |
|---|---|
| Recibe señales de detectores del edificio. | Recibe comunicaciones de instalaciones remotas. |
| Ejecuta lógica local. | Gestiona señales y procedimientos. |
| Controla sirenas y salidas. | Verifica y comunica alarmas según normativa. |
| Está en la instalación protegida. | Opera de forma centralizada. |

### 7.1. Verificación de alarmas

La Orden INT/316/2011 regula diferentes procedimientos de verificación para sistemas dentro de su ámbito.

Entre ellos se encuentran:

- verificación secuencial;
- verificación mediante vídeo;
- verificación mediante audio;
- verificación personal.

La verificación evita tratar cualquier señal aislada como alarma real sin análisis adicional.

### 7.2. Verificación secuencial

La normativa considera la activación sucesiva de varios elementos de detección dentro de una ventana temporal como uno de los métodos técnicos de confirmación.

El principio técnico consiste en aumentar la confianza combinando eventos independientes.

### 7.3. Verificación por vídeo

El vídeo puede utilizarse para verificar la causa que ha originado una alarma.

Debe distinguirse esta función de un CCTV de grabación permanente: en verificación, el subsistema de vídeo está asociado al evento de intrusión y sujeto a requisitos específicos.

### 7.4. Verificación por audio

La verificación acústica utiliza información sonora asociada a la alarma, dentro de las condiciones normativas aplicables.

### 7.5. Alarma confirmada

La consideración de alarma confirmada depende del procedimiento de verificación establecido.

La normativa contempla también circunstancias específicas para sistemas con doble vía y señales de coacción o atraco.

---

## 8. Grados de seguridad de los sistemas de intrusión

La clasificación por grados se basa en el riesgo y en la capacidad prevista del intruso.

La **UNE-EN 50131-1** establece cuatro grados. La Orden INT/316/2011 los relaciona en España con determinadas aplicaciones.

| Grado | Riesgo | Caracterización general |
|---|---|---|
| **1** | Bajo | Intruso con conocimientos limitados y herramientas sencillas. |
| **2** | Bajo a medio | Riesgo habitual en viviendas y pequeños establecimientos conectados cuando procede. |
| **3** | Medio/alto | Establecimientos con mayores exigencias y medidas de seguridad. |
| **4** | Alto | Riesgos muy elevados, como determinadas infraestructuras críticas o instalaciones especialmente sensibles. |

### 8.1. Significado del grado

El grado no representa únicamente “lo buena que es una alarma”.

Afecta al conjunto del sistema y a aspectos como:

- resistencia al sabotaje;
- supervisión;
- detección;
- señalización;
- alimentación;
- comunicaciones;
- componentes.

### 8.2. Coherencia del sistema

No tendría sentido diseñar un sistema de un determinado grado utilizando un elemento crítico que no cumpla el nivel exigido.

El grado debe considerarse desde el diseño y la selección de producto.

### 8.3. Grado y lugar protegido

La asignación depende de:

- naturaleza del establecimiento;
- obligación normativa;
- riesgo;
- conexión a CRA o centro de control;
- bienes protegidos.

> **Idea clave**
>
> Los grados 1 a 4 pertenecen al ámbito de los sistemas de intrusión y alarma. No deben extrapolarse sin criterio a sistemas de incendios, CCTV o detección de gases, que cuentan con sus propias normas técnicas.

---

## 9. Sabotaje y autoprotección del sistema

Un sistema de seguridad puede ser atacado deliberadamente.

Formas de sabotaje:

- apertura de carcasa;
- arrancado de detector;
- corte de cable;
- cortocircuito;
- anulación de sirena;
- inhibición radio;
- pérdida intencionada de red;
- corte de alimentación;
- manipulación de cámara;
- borrado o destrucción de grabaciones.

Medidas habituales:

- tamper;
- supervisión de línea;
- redundancia;
- baterías;
- detección de pérdida de comunicación;
- carcasas protegidas;
- registros;
- control de usuarios;
- protección de red.

---

## 10. Falsas alarmas

Una **falsa alarma** es una activación que no corresponde a la situación real que se pretendía detectar.

### 10.1. Causas técnicas

- detector averiado;
- cable defectuoso;
- mala alimentación;
- interferencias;
- batería deteriorada;
- humedad;
- suciedad.

### 10.2. Causas de diseño

- sensor inadecuado;
- mala ubicación;
- cobertura incorrecta;
- entorno incompatible;
- falta de doble tecnología cuando sería conveniente.

### 10.3. Causas de instalación

- fijación deficiente;
- cableado incorrecto;
- resistencia mal colocada;
- sensibilidad inadecuada.

### 10.4. Causas de uso

- errores de usuarios;
- tiempos mal configurados;
- desconocimiento del procedimiento;
- entrada sin desarmado.

La reducción de falsas alarmas exige actuar sobre diseño, instalación, mantenimiento y formación.

---

## 11. Ejecución de una instalación de seguridad

La ejecución no comienza conectando cables. Debe seguir una secuencia ordenada.

### 11.1. Análisis de necesidades

Se determina:

- finalidad;
- riesgos;
- zonas;
- usuarios;
- funcionamiento esperado;
- restricciones.

### 11.2. Diseño

Se definen:

- equipos;
- emplazamientos;
- canalizaciones;
- cableado;
- alimentación;
- comunicaciones;
- integración;
- normativa.

### 11.3. Replanteo

El replanteo verifica sobre el terreno que el diseño es viable.

Puede descubrir:

- obstáculos;
- cambios de obra;
- falta de espacio;
- problemas de acceso;
- distancias reales;
- condiciones ambientales no previstas.

### 11.4. Montaje

Incluye:

- canalización;
- tendido;
- fijación;
- conexionado;
- etiquetado;
- programación.

### 11.5. Puesta en servicio

Debe comprobarse:

- cada entrada;
- cada salida;
- señalización;
- alimentación;
- baterías;
- transmisión;
- registros;
- comunicación remota;
- comportamiento ante averías.

### 11.6. Documentación final

Debe quedar constancia de la configuración realmente instalada, no únicamente del proyecto inicial.

---

## 12. Documentación técnica

La documentación permite instalar, mantener, reparar y auditar una instalación.

### 12.1. Planos

Pueden representar:

- ubicación;
- canalizaciones;
- cableado;
- zonas;
- equipos;
- detalles.

### 12.2. Esquemas

Representan relaciones eléctricas o funcionales.

Es importante distinguir:

- esquema de bloques;
- esquema unifilar;
- esquema de conexionado;
- plano de planta.

### 12.3. Manual de instalación

Debe recoger información técnica necesaria para montaje, configuración y puesta en servicio.

### 12.4. Manual de usuario

Debe explicar las funciones que necesita el usuario final.

### 12.5. Manual de mantenimiento

Incluye:

- operaciones;
- periodicidad;
- puntos de revisión;
- criterios de aceptación;
- registros.

### 12.6. Certificados

Según el sistema y la normativa pueden ser necesarios certificados de instalación, puesta en servicio, conformidad o mantenimiento.

---

## 13. Mantenimiento de sistemas de seguridad

### 13.1. Mantenimiento preventivo

Se realiza de forma planificada para reducir la probabilidad de avería.

Ejemplos:

- limpieza;
- prueba funcional;
- inspección;
- comprobación de baterías;
- revisión de fijaciones;
- verificación de comunicaciones.

### 13.2. Mantenimiento correctivo

Tiene como objetivo reparar una avería existente.

Debe seguir una metodología:

1. confirmar el síntoma;
2. consultar historial;
3. formular hipótesis;
4. medir;
5. aislar la causa;
6. reparar;
7. verificar;
8. documentar.

### 13.3. Mantenimiento predictivo

Utiliza tendencias o datos para anticipar fallos.

Puede emplear:

- telemetría;
- registros;
- autodiagnóstico;
- temperaturas;
- estado de baterías;
- contadores;
- estadísticas.

### 13.4. Mantenimiento remoto

Muchos sistemas actuales permiten:

- consultar eventos;
- revisar comunicaciones;
- comprobar estados;
- modificar determinados parámetros;
- actualizar software;
- realizar diagnóstico.

Debe aplicarse con controles de acceso y medidas de ciberseguridad adecuadas.

---

## 14. Marco normativo de la seguridad electrónica

La regulación procede de diferentes ámbitos. Es fundamental no confundir:

- legislación;
- reglamentos;
- órdenes;
- normas técnicas;
- guías.

### 14.1. Ley 5/2014 de Seguridad Privada

La [Ley 5/2014 de Seguridad Privada, en su texto consolidado](https://www.boe.es/buscar/act.php?id=BOE-A-2014-3649), establece el marco general de la seguridad privada en España.

Afecta a servicios y actividades de seguridad privada y delimita funciones que solo pueden ser realizadas por empresas o personal habilitado en los supuestos previstos.

### 14.2. Orden INT/316/2011

La [Orden INT/316/2011, en su texto consolidado](https://www.boe.es/buscar/act.php?id=BOE-A-2011-3170), regula el funcionamiento de sistemas de alarma en el ámbito de la seguridad privada.

Entre otros aspectos desarrolla:

- grados de seguridad;
- características de sistemas;
- conexión a centrales;
- verificación;
- comunicación de alarmas;
- mantenimiento.

Su texto consolidado debe consultarse siempre que se utilice como referencia.

### 14.3. Normas UNE-EN

La Orden INT/316/2011 remite a familias de normas UNE-EN para diferentes subsistemas.

Entre las más importantes aparece la serie **UNE-EN 50131** para sistemas de intrusión.

Las normas técnicas evolucionan; por tanto, debe comprobarse siempre la versión aplicable.

---

## 15. Normativa de protección contra incendios

El [Real Decreto 513/2017, en su texto consolidado](https://www.boe.es/buscar/act.php?id=BOE-A-2017-6606), aprueba el RIPCI.

Su objeto incluye requisitos relativos al:

- diseño;
- instalación;
- puesta en servicio;
- mantenimiento;
- inspección.

El RIPCI ha sido modificado desde su publicación, por lo que debe consultarse su texto consolidado.

### 15.1. UNE-EN 54

La familia UNE-EN 54 regula diferentes componentes y funciones de los sistemas de detección y alarma.

Por ejemplo, existen partes específicas para:

- equipos de control;
- fuentes;
- detectores;
- dispositivos acústicos;
- pulsadores;
- otros componentes.

Un marcado EN 54 en un producto indica conformidad con requisitos aplicables a esa categoría concreta, no una homologación genérica del sistema completo.

---

## 16. Videovigilancia y protección de datos

La [guía de videovigilancia de la AEPD](https://www.aepd.es/areas-de-actuacion/videovigilancia) y sus fichas prácticas son referencias oficiales para estudiar el uso de videocámaras; sus ejemplos permiten diferenciar una vivienda, un establecimiento, una comunidad o un centro educativo sin aplicar a todos la misma solución.

La imagen de una persona identificada o identificable es un dato personal. Por ello la videovigilancia debe cumplir los principios del RGPD y la normativa española aplicable.

### 16.1. Legitimación

Antes de instalar cámaras debe existir una base legítima para el tratamiento.

La seguridad de personas, bienes e instalaciones puede constituir una finalidad legítima, pero no elimina el resto de obligaciones.

### 16.2. Limitación de finalidad

Las imágenes deben utilizarse para el fin que justificó la instalación.

No resulta correcto reutilizarlas libremente para finalidades incompatibles.

### 16.3. Proporcionalidad

La medida debe ser adecuada y no excesiva.

Deben valorarse:

- necesidad real;
- alternativas;
- número de cámaras;
- tipo de cámara;
- zona captada.

### 16.4. Minimización

Solo deben captarse los datos necesarios.

La AEPD señala herramientas como:

- reducción de campo;
- elección del tipo de cámara;
- máscaras de privacidad.

### 16.5. Vía pública

Como regla general, la captación de la vía pública con fines de seguridad corresponde a las Fuerzas y Cuerpos de Seguridad.

En instalaciones privadas puede ser inevitable captar una porción mínima, pero debe limitarse a lo imprescindible.

### 16.6. Privacidad desde el diseño

La protección de datos debe incorporarse desde el proyecto.

No es una comprobación que se añade al final.

Debe influir en:

- ubicación;
- orientación;
- usuarios;
- almacenamiento;
- conservación;
- acceso remoto;
- redes;
- seguridad.

### 16.7. Derecho de información

Debe utilizarse señalización visible en los accesos a las zonas vigiladas y proporcionar la información exigida sobre el tratamiento.

### 16.8. Registro de actividades

El RGPD sustituyó la antigua obligación general de inscripción de ficheros por un enfoque basado en responsabilidad proactiva y, cuando corresponde, registro de actividades de tratamiento.

### 16.9. Conservación

La AEPD recuerda el plazo máximo general de un mes para sistemas de videovigilancia de seguridad, salvo los supuestos en que las imágenes deban conservarse para acreditar hechos relevantes.

### 16.10. Cámaras IP y ciberseguridad

Una cámara IP accesible por red puede convertirse en una brecha de seguridad si mantiene credenciales predeterminadas.

Antes de su puesta en funcionamiento deben controlarse:

- usuarios;
- contraseñas;
- servicios;
- acceso remoto;
- firmware;
- segmentación;
- cifrado cuando proceda.

> **Idea clave**
>
> La seguridad física y la ciberseguridad ya no pueden estudiarse por separado. Una cámara perfectamente orientada puede ser una instalación insegura si cualquier tercero puede acceder a ella a través de Internet.

---

## 17. Prevención de riesgos laborales

La [Ley 31/1995 de Prevención de Riesgos Laborales](https://www.boe.es/buscar/act.php?id=BOE-A-1995-24292) establece el marco básico de protección de las personas trabajadoras. Para el trabajo con equipos eléctricos se aplica además el [Real Decreto 614/2001](https://www.boe.es/eli/es/rd/2001/06/08/614), que debe leerse junto con la evaluación de riesgos y la formación exigida para la tarea.

La prevención debe integrarse en la planificación del trabajo.

### 17.1. Peligro y riesgo

**Peligro:** fuente con capacidad de producir daño.

**Riesgo:** probabilidad y gravedad del daño asociado a la exposición a un peligro.

No deben utilizarse ambos términos como sinónimos.

### 17.2. Evaluación

La evaluación identifica:

- tarea;
- peligro;
- personas expuestas;
- probabilidad;
- gravedad;
- medida preventiva.

### 17.3. Jerarquía preventiva

De forma general se prioriza:

1. evitar;
2. eliminar;
3. reducir en origen;
4. protección colectiva;
5. medidas organizativas;
6. EPI.

---

## 18. Riesgos eléctricos

En este módulo pueden aparecer tensiones de red, fuentes de alimentación y circuitos de baja tensión.

Riesgos:

- contacto directo;
- contacto indirecto;
- arco;
- cortocircuito;
- quemadura;
- incendio.

Buenas prácticas:

- desconexión;
- verificación;
- herramientas adecuadas;
- protección;
- no manipular equipos abiertos energizados sin procedimiento.

El [INSST explica el riesgo eléctrico y el trabajo sin tensión](https://www.insst.es/materias/riesgos/seguridad-en-el-trabajo/riesgo-electrico). Desconectar un equipo no basta si existe otra fuente de alimentación, una batería, un SAI o posibilidad de reconexión. Antes de intervenir hay que identificar las fuentes, seguir el procedimiento establecido por personal autorizado y comprobar la ausencia de tensión con medios adecuados. En esta unidad se reconoce el riesgo; las maniobras reales requieren formación, autorización y supervisión específicas.

### Vídeo del INSST — Las cinco reglas de oro

[Ver el vídeo oficial del INSST sobre trabajo sin tensión](https://www.insst.es/documentacion/material-divulgativo-y-audiovisual/videos/riesgo-electrico-cinco-reglas-de-oro-ano-2019). Antes de verlo, enumera todas las fuentes que podrían alimentar un rack de CCTV. Durante la explicación, anota cómo se evita una reconexión y cómo se verifica la ausencia de tensión. Después, razona por qué no debe iniciarse un trabajo solo porque se haya accionado un interruptor. La secuencia normativa y la cualificación requerida prevalecen sobre cualquier simplificación didáctica.

---

## 19. Riesgos mecánicos y de herramientas

El montaje utiliza:

- taladro;
- brocas;
- destornilladores;
- crimpadoras;
- pelacables;
- alicates;
- herramientas de corte.

Riesgos:

- cortes;
- atrapamientos;
- proyecciones;
- golpes;
- ruido.

El uso seguro exige seleccionar la herramienta correcta y comprobar su estado.

---

## 20. Trabajo en altura

Las cámaras y detectores suelen instalarse a cierta altura.

Riesgos principales:

- caída;
- caída de herramientas;
- pérdida de estabilidad;
- sobrealcance.

Debe utilizarse el medio de acceso adecuado y nunca improvisar con mobiliario.

---

## 21. Perforación y obra

Antes de perforar debe estudiarse:

- posible presencia de cables;
- tuberías;
- estructura;
- material;
- polvo;
- fijación necesaria.

La elección de taco, broca y tornillo forma parte de la seguridad del montaje.

---

## 22. Baterías y acumuladores

Los sistemas de seguridad emplean baterías para respaldo.

Riesgos:

- cortocircuito;
- calentamiento;
- fuga;
- polaridad incorrecta;
- transporte;
- peso.

Deben protegerse los terminales y evitarse herramientas metálicas que puedan unirlos accidentalmente.

---

## 23. EPI y protección colectiva

Los EPI se seleccionan en función de la tarea.

Pueden incluir:

- gafas;
- calzado;
- guantes;
- protección auditiva;
- ropa adecuada.

No debe utilizarse un EPI como sustituto de una medida de protección colectiva que elimine o reduzca mejor el riesgo.

---

## 24. Orden y limpieza

El orden es uno de los primeros factores preventivos.

Reduce:

- caídas;
- pérdidas;
- errores;
- conexiones incorrectas;
- daños.

En seguridad electrónica, además, el etiquetado y orden del cableado facilitan mantenimiento y diagnóstico.

---

## 25. Protección ambiental

El montaje produce residuos:

- cable;
- metal;
- plástico;
- embalajes;
- pilas;
- baterías;
- equipos electrónicos.

La **Ley 7/2022** establece el marco general de residuos y economía circular.

Los equipos eléctricos y electrónicos al final de su vida útil se regulan específicamente mediante el [Real Decreto 110/2015 sobre RAEE](https://www.boe.es/buscar/act.php?id=BOE-A-2015-1762).

<figure class="content-photo"><img src="../../../../assets/img/electronic-waste.jpg" alt="Equipos electrónicos descartados que deben gestionarse como residuos de aparatos eléctricos y electrónicos" loading="lazy"><figcaption>La sustitución de cámaras, grabadores y fuentes genera RAEE: separar, reutilizar cuando proceda y entregar a un canal autorizado forma parte del trabajo técnico. Fotografía: <a href="https://commons.wikimedia.org/wiki/File:Basura_electrónica.jpg">Dolapeart, CC BY-SA 4.0</a>.</figcaption></figure>

### 25.1. RAEE

Pueden convertirse en RAEE:

- cámaras;
- DVR;
- NVR;
- centrales;
- detectores;
- fuentes;
- teclados;
- lectores;
- placas.

No deben eliminarse como residuo ordinario.

### 25.2. Baterías

Las baterías requieren recogida separada.

### 25.3. Jerarquía de residuos

La gestión moderna prioriza:

1. prevención;
2. preparación para reutilización;
3. reciclado;
4. valorización;
5. eliminación.

### 25.4. Reutilización

En un entorno formativo puede ser útil reaprovechar equipos antiguos para aprendizaje, siempre que su estado sea seguro y que no se utilicen como sustitutos de equipos certificados en una instalación real cuando ya no puedan garantizar prestaciones.

---

## 26. Calidad en la instalación

La calidad no consiste únicamente en que la instalación “funcione”.

Debe incluir:

- documentación;
- etiquetado;
- conexiones correctas;
- fijación;
- limpieza;
- pruebas;
- trazabilidad;
- cumplimiento normativo.

Una instalación difícil de mantener o imposible de interpretar no puede considerarse de buena calidad aunque funcione el día de la entrega.

---

## 27. Relación entre seguridad, normativa y tecnología

El técnico debe integrar tres perspectivas:

**tecnología:** qué puede hacer el equipo;

**normativa:** qué puede y debe hacerse;

**riesgo:** qué protección necesita realmente la instalación.

Una solución técnicamente posible puede ser innecesaria, desproporcionada o contraria a normativa. De la misma forma, una instalación legalmente admisible puede ser técnicamente deficiente si la cobertura, alimentación o supervisión son incorrectas.

---

## Síntesis de la unidad

Los sistemas de seguridad electrónica se estructuran mediante bloques de detección, transmisión, control, actuación, alimentación, interfaz, registro y supervisión. Incendios, gases, intrusión, CCTV, accesos y seguimiento constituyen familias diferentes, cada una con riesgos, tecnologías y normas específicas. La transmisión puede ser cableada, inalámbrica o IP, y la fiabilidad depende de la supervisión y, en sistemas críticos, de la redundancia. En intrusión, los grados de seguridad permiten relacionar el riesgo con las prestaciones exigidas. La ejecución de una instalación exige análisis, diseño, replanteo, montaje, puesta en servicio, documentación y mantenimiento. Todo ello debe realizarse dentro del marco de la seguridad privada, la protección contra incendios, la protección de datos y la prevención de riesgos laborales, incorporando además una gestión correcta de los residuos y de los equipos al final de su vida útil. La seguridad profesional no se obtiene acumulando dispositivos: se consigue mediante un sistema coherente, correctamente diseñado, instalado, supervisado, mantenido y documentado.
