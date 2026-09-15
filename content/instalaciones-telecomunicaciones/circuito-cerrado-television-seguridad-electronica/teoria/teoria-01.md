# Introducción a los sistemas de seguridad electrónica y normativa

**Circuito cerrado de televisión y seguridad electrónica**  
2.º CFGM Instalaciones de Telecomunicaciones

---

Un **sistema de seguridad electrónica** reúne dispositivos capaces de captar una situación, comunicarla a una unidad de control y producir una respuesta prevista. Puede avisar de un incendio, detectar la apertura de una puerta, registrar imágenes de un acceso o impedir el paso a quien no tenga autorización. La tecnología cambia según el riesgo, pero la protección siempre depende de la relación entre sus componentes: un detector sin comunicación, una cámara sin grabación o una central sin alimentación pueden dar una falsa impresión de seguridad.

La instalación comienza por definir qué se quiere proteger y frente a qué situación. Después se decide qué información hay que captar, dónde se procesará, cómo se avisará y qué sucederá si falla un componente. No es lo mismo detectar humo en un almacén que vigilar un pasillo o controlar la entrada a un laboratorio. La selección de equipos y la normativa aplicable dependen de esa finalidad y del entorno.

<figure class="study-figure"><img src="../img/cadena-funcional.svg" alt="Cadena desde la captación de un evento hasta la transmisión, el control, el aviso, el registro y la supervisión" loading="lazy"><figcaption>La supervisión de averías y la alimentación sostienen la capacidad del sistema para detectar y responder.</figcaption></figure>

La **captación** transforma una condición física en información: una cámara obtiene imágenes, un contacto magnético indica apertura y un detector de humo reconoce un fenómeno asociado al fuego. La **transmisión** lleva esa información a la **unidad de control**, que la interpreta según su programación. La salida puede ser una sirena, una luz, un relé, una comunicación remota o una grabación. El **registro** conserva los eventos necesarios y la **supervisión** informa de cortes, averías, sabotajes o fallos de alimentación. La respuesta debe ser coherente con el riesgo y con el proyecto.

> **Ejemplo razonado — una alarma que parece funcionar**
>
> Un contacto de puerta cambia de estado al abrirse, pero el cable que lo une a la central está cortado. Si la línea está supervisada, la central mostrará una avería o un sabotaje aunque nadie abra la puerta. Si no vigila la integridad de la línea, el fallo puede pasar inadvertido. La diferencia no está en el contacto, sino en el diseño del circuito y en la programación de la central.

## 1. Clasificación de los sistemas de seguridad electrónica

La clasificación más útil atiende a la finalidad. En un mismo edificio pueden coexistir detección de incendios, intrusión, videovigilancia y control de accesos; compartir canalizaciones o una interfaz de gestión no convierte sus requisitos en equivalentes. Cada subsistema identifica fenómenos distintos y obedece a reglas técnicas y legales propias.

| Sistema | Situación que capta | Respuesta habitual |
|---|---|---|
| Incendios | Humo, temperatura, llama o aviso manual. | Alarma, señalización y maniobras previstas en el proyecto. |
| Gases | Concentración de un gas o deficiencia de oxígeno. | Aviso y, si procede, ventilación o corte de suministro. |
| Intrusión | Apertura, movimiento, rotura o intento de acceso. | Alarma local y transmisión para verificación. |
| CCTV | Imágenes de una zona definida. | Visualización, grabación o verificación de un evento. |
| Control de accesos | Credencial y estado de una puerta. | Autorizar, denegar o registrar el paso. |

La tabla no permite intercambiar componentes. Un detector de humo, una cámara y un sensor PIR pueden parecer pequeños dispositivos de techo o pared, pero realizan funciones diferentes. Incluso dentro de una misma familia hay que comprobar la compatibilidad con la central, la alimentación y las condiciones de montaje.

### 1.1. Detección y alarma de incendios

La detección de incendios busca reconocer lo antes posible fenómenos asociados al fuego y avisar a las personas o a otros sistemas. Puede combinar detectores automáticos, pulsadores manuales, una central de control, dispositivos acústicos y ópticos, alimentación principal y batería. La central también debe indicar estados de fallo, como pérdida de comunicación o alimentación defectuosa.

**Detectar** no es **extinguir**. El detector o pulsador informa; un sistema de extinción intenta controlar el fuego mediante otro equipamiento. Algunas instalaciones coordinan maniobras sobre puertas, ventilación u otros equipos, pero estas deben estar previstas en el diseño. No todo aviso implica automáticamente cortar la electricidad o activar una extinción. Para comprobar las obligaciones de instalación y mantenimiento se consulta el [Reglamento de instalaciones de protección contra incendios (RIPCI)](https://www.boe.es/buscar/act.php?id=BOE-A-2017-6606), no las reglas de una alarma de intrusión.

### 1.2. Detección de gases

Un detector de gases mide una magnitud del ambiente y la compara con los umbrales establecidos para un riesgo concreto. Puede advertir de una sustancia inflamable o tóxica, de una fuga vinculada a un proceso o de una atmósfera con falta de oxígeno. La **ubicación** resulta decisiva: la densidad del gas, la ventilación, la geometría del recinto y las fuentes probables de fuga determinan dónde conviene medir. Montar todos los detectores a la misma altura por costumbre puede dejar sin vigilancia la zona donde se acumula el gas.

La señal debe llegar a una unidad capaz de advertir a las personas y, cuando esté previsto, activar ventilación o interrumpir un suministro. Esta respuesta necesita coordinación con el proyecto. Un detector que mide una concentración no convierte por sí solo un recinto en seguro ni sustituye el mantenimiento de la instalación que puede originar la fuga.

### 1.3. Intrusión, robo y atraco

Un sistema de **intrusión** intenta reconocer un acceso no autorizado antes o durante su entrada en la zona protegida. Se estudian los recorridos probables, los cerramientos y los puntos vulnerables; después se combinan detectores adecuados. Un contacto magnético vigila la apertura de una puerta o ventana, un detector PIR observa cambios de radiación infrarroja compatibles con movimiento y una barrera activa reconoce la interrupción de un haz. La protección depende tanto de su colocación como de la reacción ante averías o sabotajes.

El aviso de **robo o atraco** responde a una situación diferente: puede comenzar por la activación voluntaria de un dispositivo de aviso cuando una persona está amenazada. Por eso no se trata la señal de atraco como si fuese un detector de movimiento. La forma de verificación y comunicación a una central receptora está regulada en el ámbito de la seguridad privada.

<figure class="content-photo"><img src="../img/detector-pir.jpg" alt="Detector PIR desmontado, con lente de Fresnel en el frontal y circuito electrónico detrás" loading="lazy"><figcaption>La lente segmenta el campo observado por el sensor. Un PIR es pasivo: detecta cambios de radiación infrarroja, no emite un haz de vigilancia. Fotografía: <a href="https://commons.wikimedia.org/wiki/File:PIR_Motion_Detector.jpg">oomlout, CC BY-SA 2.0</a>.</figcaption></figure>

> **Ejemplo razonado — cobertura y falsas alarmas**
>
> Un PIR orientado hacia una ventana soleada puede responder a variaciones del entorno que no corresponden a una intrusión. Cambiar la sensibilidad sin revisar la ubicación quizá reduzca los avisos, pero también puede crear una zona sin detección. Primero se analiza la causa, la cobertura y el ambiente; después se decide si hay que reubicar, cambiar o ajustar el detector.

### 1.4. Circuito cerrado de televisión

Un **circuito cerrado de televisión (CCTV)** capta imágenes destinadas a un grupo limitado de usuarios autorizados. La instalación puede permitir observación en directo, grabación, consulta posterior o verificación de alarmas. Sus bloques básicos son cámara y óptica, transmisión, alimentación, grabador o servidor, almacenamiento e interfaz de visualización. Ver imagen en un monitor no demuestra que el disco esté grabando ni que conserve los archivos.

En un sistema **analógico**, la cámara entrega una señal de vídeo al grabador mediante un enlace apropiado, habitualmente coaxial. En uno **IP**, la cámara codifica imágenes y las comunica por la red; puede obtener alimentación mediante PoE si todos los equipos implicados lo admiten. Existen soluciones híbridas y formatos de alta definición sobre coaxial, de modo que la denominación comercial del grabador no basta para describir la arquitectura. La [introducción técnica de Axis a la videovigilancia](https://newsroom.axis.com/blog/video-surveillance) permite distinguir cámara, red y grabador.

<figure class="content-photo"><img src="../img/camaras-ip-domo.png" alt="Dos cámaras IP de tipo domo, una de mayor tamaño y otra compacta con cable de red" loading="lazy"><figcaption>La forma «domo» describe la carcasa, no una prestación única. La ficha técnica indica óptica, resolución, interfaz, alimentación y condiciones ambientales. Fotografía: <a href="https://commons.wikimedia.org/wiki/File:Axis_ip_dome_cameras.png">Bungle, CC BY-SA 4.0</a>.</figcaption></figure>

La imagen de una persona identificada o identificable es un dato personal. Una cámara técnicamente viable puede no ser admisible en el lugar o con el encuadre elegido. Antes de fijar su posición se analiza la finalidad, la zona realmente necesaria, quién accederá a las imágenes y cómo se informará a las personas. Estos límites se desarrollan en el apartado de protección de datos.

### 1.5. Accesos, presencia y seguimiento

El **control de accesos** decide si se autoriza el paso por una puerta o a una zona. Combina habitualmente lector, credencial, controladora, elemento de cierre y contacto que informa del estado de la puerta. La autorización no equivale al movimiento físico: la orden de apertura puede haberse emitido y la puerta seguir cerrada por una avería. Por ello se interpretan conjuntamente los eventos de control y las señales de estado.

El **control de presencia** registra entradas, salidas o permanencia según una finalidad concreta. El seguimiento de objetos o vehículos puede utilizar RFID, redes móviles o posicionamiento. Aunque todos identifican o registran eventos, no comparten automáticamente legitimación, equipamiento ni plazos de conservación de datos.

## 2. Elementos que constituyen una instalación

Un esquema profesional relaciona cada **bloque funcional** con un elemento real. Debe incluir una leyenda, identificadores de equipos y conexiones para seguir el recorrido de la señal y de la energía. Un símbolo aislado no basta: una «C» puede representar una cámara o una central según el plano. La leyenda y las conexiones eliminan esa ambigüedad.

### 2.1. Unidad de control y alimentación

La **central de control** recibe señales, las interpreta y gobierna salidas. Comprende electrónica de proceso, memoria de programación, entradas, salidas, interfaz de usuario y fuente de alimentación. En grandes instalaciones puede comunicarse con otros equipos o con software de supervisión, pero sigue siendo necesario identificar qué dispositivo toma cada decisión. En CCTV la gestión puede residir en un DVR, un NVR o un servidor de vídeo; no se llama «central de alarmas» a cualquiera de ellos.

Una central diferencia reposo, alarma, avería y sabotaje. La programación define qué hacer ante cada estado. La apertura autorizada de una puerta puede quedar registrada sin activar sirena, mientras que una apertura no autorizada durante el cierre sí genera alarma. Si la batería sostiene el funcionamiento después de perder alimentación de red, el fallo de red debe aparecer como incidencia.

<figure class="content-photo"><img src="../img/central-incendios.jpg" alt="Central de detección de incendios instalada en pared con indicadores luminosos y controles frontales" loading="lazy"><figcaption>Una central procesa estados y permite operación; no es solo un punto de conexión. La imagen ilustra el bloque funcional, no la conformidad del producto con normas españolas. Fotografía: <a href="https://commons.wikimedia.org/wiki/File:Fire_alarm_control_panel_VERS-PK_2.jpg">Georg Pik, CC0 1.0</a>.</figcaption></figure>

La **alimentación principal** suministra la energía ordinaria. La **alimentación de respaldo**, si el sistema la requiere, mantiene los bloques esenciales durante una interrupción. Una batería instalada no garantiza autonomía: se comprueban su estado, capacidad, cargador, consumo y periodicidad de pruebas. Una caída de tensión en un tendido largo también puede impedir el funcionamiento aunque la fuente entregue la tensión nominal. El cálculo y la ficha técnica prevalecen sobre una regla universal de «12 V para todo».

### 2.2. Detectores, pulsadores y zonas

Los **detectores** convierten una magnitud física o un cambio de estado en una señal interpretable. Pueden observar humo, temperatura, movimiento, apertura o rotura; cada principio exige una ubicación adecuada. Un **pulsador manual** permite que una persona genere deliberadamente un aviso. Ambos son entradas, pero su significado operativo difiere: una activación manual no se explica por los mismos factores que una respuesta automática al ambiente.

Una **zona** agrupa señales que la central interpreta de forma conjunta o identificable. Esta división ayuda a localizar el evento y organizar la respuesta. Un sistema de incendios puede emplear lazos y direccionamiento según su tecnología; uno de intrusión puede supervisar un circuito mediante resistencia de fin de línea para distinguir reposo, alarma, corte y cortocircuito. La **resistencia de fin de línea** permite vigilar la integridad de un circuito compatible y bien configurado; no «mejora» por sí sola el detector.

### 2.3. Actuadores, avisos e interfaces

Los **actuadores** realizan una acción física, como gobernar un relé, una cerradura o una maniobra prevista en el proyecto. Los dispositivos de **señalización** comunican una condición mediante sonido, luz o pantalla. Una sirena de intrusión, una alarma de incendio y una baliza de estado pueden compartir principios electrónicos, pero sus funciones y requisitos de ubicación no son iguales.

Los teclados, lectores, paneles repetidores y aplicaciones de operación son **interfaces**. Permiten autorizar, consultar, programar o reconocer estados; no sustituyen ni la central ni el sensor. La documentación debe indicar quién puede operar cada función y qué ocurre si la interfaz queda fuera de servicio.

### 2.4. Central receptora de alarmas

La **Central Receptora de Alarmas (CRA)** presta un servicio remoto de recepción, verificación y gestión de señales procedentes de instalaciones conectadas. No debe confundirse con la central situada en el edificio: una gestiona procedimientos y avisos a distancia; la otra detecta y gobierna elementos locales. Una señal transmitida no se comunica automáticamente a las Fuerzas y Cuerpos de Seguridad. La [Orden INT/316/2011](https://www.boe.es/buscar/act.php?id=BOE-A-2011-3170) establece métodos y condiciones de verificación cuando corresponde.

La **verificación por vídeo** puede ayudar a interpretar una señal de intrusión si las imágenes corresponden a la zona afectada y se tratan de acuerdo con protección de datos. El enlace hacia la CRA también necesita supervisión: la pérdida de red no prueba que haya un intruso, pero puede dejar la instalación sin aviso exterior.

> **Ejemplo razonado — tres fallos diferentes**
>
> «Zona 2: corte» señala un problema en el circuito de detección; «batería baja» afecta a la alimentación de respaldo; «pérdida de enlace» afecta a la comunicación exterior. Los tres requieren comprobaciones distintas y no se agrupan bajo la etiqueta genérica de «alarma».

## 3. Medios de comunicación entre componentes

El medio de transmisión transporta señales o datos entre equipos. Elegirlo exige considerar distancia, volumen de información, interferencias, canalización disponible, supervisión del enlace, mantenimiento y coste. «Cableado» no significa infalible y «inalámbrico» no significa que nunca se necesite cable: la alimentación y la comunicación exterior pueden seguir teniendo conexiones físicas.

### 3.1. Cable, coaxial, par trenzado y fibra

Los **conductores multipolares** se emplean para zonas, alimentación, buses o contactos auxiliares. Su continuidad puede vigilarse con circuitos adecuados, pero un tendido mal identificado o próximo a interferencias complica el mantenimiento. Hay que respetar la sección, longitud y condiciones establecidas por fabricante y normativa aplicable.

El **coaxial** fue habitual para vídeo analógico y sigue presente en instalaciones existentes y soluciones de alta definición sobre coaxial. El **par trenzado** se utiliza en Ethernet y puede llevar vídeo IP y alimentación PoE en una misma infraestructura compatible. La **fibra óptica** permite enlaces largos y evita interferencias electromagnéticas en el trayecto óptico, pero requiere interfaces y terminaciones apropiadas. Ninguno se elige solo por su apariencia: se comprueban tipo, conectores, especificación, pérdidas y compatibilidad.

<figure class="content-photo"><img src="../img/cables-ethernet-coaxial.jpg" alt="Dos cables de conexión empaquetados, uno con conectores de red y otro de tipo coaxial" loading="lazy"><figcaption>El marcaje y la inspección de ambos extremos son más fiables que el color de la cubierta. La foto permite comparar medios físicos, no deducir protocolo o calidad de señal. Fotografía: <a href="https://commons.wikimedia.org/wiki/File:Ethernet_Cat5E_RJ45_cable_%26_coaxial_cable.jpg">Kent Madsen, CC BY-SA 2.0</a>.</figcaption></figure>

### 3.2. Enlaces inalámbricos

Un enlace **inalámbrico** evita parte de la canalización y facilita ampliaciones, pero depende de propagación radio, alimentación y compatibilidad. Muros, metal, interferencias y cambios en el entorno modifican la cobertura. La batería requiere supervisión y sustitución planificada. La señal se comprueba en la ubicación final y se ensaya el estado que indica la central si se pierde un dispositivo.

La radio está sujeta a condiciones de espectro y compatibilidad electromagnética. La frecuencia y el equipo se verifican en la ficha del producto y en el marco vigente. La protección frente a sabotajes requiere saber qué ocurre si se interfiere el canal o se abre el equipo.

### 3.3. Red IP, PoE y continuidad

Una cámara o controladora **IP** necesita una dirección y una red configuradas. El vídeo sale de la cámara como datos, atraviesa conmutadores y llega al grabador o servidor. La red puede fallar aunque la cámara tenga alimentación; también puede ocurrir lo contrario si un conmutador PoE deja de suministrarla. **Power over Ethernet (PoE)** une datos y energía en un cable compatible, pero el presupuesto de potencia del conmutador ha de alcanzar para los dispositivos conectados.

<figure class="study-figure"><img src="../img/arquitecturas-cctv.svg" alt="Comparación entre cámara analógica enlazada por coaxial a DVR y cámara IP enlazada por Ethernet, conmutador y NVR" loading="lazy"><figcaption>Son recorridos simplificados; en ambos se comprueban alimentación, transmisión y almacenamiento. Una arquitectura híbrida combina partes de los dos.</figcaption></figure>

> **Ejemplo razonado — imagen en directo sin grabación**
>
> Se ve la cámara IP en pantalla, pero el disco del NVR está averiado. Captación y enlace funcionan; falla el registro. Comprobar solo que aparece imagen en directo daría un resultado incorrecto. La puesta en servicio y el mantenimiento deben probar también una grabación y su recuperación.

Este vídeo presenta cámaras analógicas e IP y varios tipos de grabador. Permite reconocer el recorrido de la señal y de la energía en una instalación real.

https://www.youtube.com/watch?v=vjfVl5hZujw

## 4. Detección de intrusión y niveles de seguridad

Una instalación de intrusión intenta detectar accesos no autorizados y comunicar un aviso verificable. La protección no depende de un único detector: intervienen la delimitación de las zonas, la central, la alimentación de respaldo, la transmisión y la respuesta prevista. La posición de un sensor debe derivarse del recorrido probable de entrada y de las condiciones del lugar; colocar muchos detectores sin estudiar el entorno no garantiza una detección mejor.

En España, los **grados de seguridad** de los sistemas de alarma de intrusión se relacionan con el riesgo y con las características exigidas a los equipos y a la instalación. La [Orden INT/316/2011](https://www.boe.es/buscar/act.php?id=BOE-A-2011-3170) regula su aplicación en el ámbito de seguridad privada. No son una escala para clasificar cámaras de CCTV, centrales de incendios ni todas las instalaciones electrónicas por igual.

| Grado | Riesgo de intrusión previsto | Idea de diseño |
| --- | --- | --- |
| 1 | Bajo | Protección básica frente a intentos poco preparados. |
| 2 | Bajo o medio | Se prevé que el intruso conozca el sistema y disponga de herramientas corrientes. |
| 3 | Medio o alto | Se requieren equipos y comunicaciones adecuados frente a intentos más preparados. |
| 4 | Alto | Se contempla una amenaza especialmente organizada y recursos superiores. |

La tabla resume el concepto de riesgo, pero **no sustituye las obligaciones legales ni la ficha de cada componente**. Un detector con unas prestaciones determinadas no convierte por sí solo toda la instalación en un sistema de ese grado. También cuentan central, comunicación, protección frente a manipulación, supervisión, instalación y mantenimiento. Antes de especificar equipos se identifica la actividad, el nivel exigible y las condiciones ambientales del emplazamiento.

### 4.1. Zonas, sabotaje y falsas alarmas

Una **zona** agrupa una parte del edificio o un conjunto de dispositivos para poder localizar el origen de una señal. «Alarma» informa de una detección; «avería» indica que algo impide funcionar correctamente; «sabotaje» informa, por ejemplo, de la apertura o manipulación de un equipo protegido. Deben poder distinguirse, porque la respuesta no es la misma.

Una **falsa alarma** es una señal de alarma sin la intrusión que se pretendía detectar. Puede surgir por un sensor mal situado, corrientes de aire, animales, vibraciones, una puerta con holgura, cambios térmicos, interferencias o una configuración inadecuada. También hay avisos causados por errores de uso. Para diagnosticarla se conservan hora, zona, estado de armado y registro de eventos; después se reproduce la situación y se comprueba la instalación. Anular el detector para silenciar el problema deja una zona sin protección.

> **Ejemplo razonado — una alarma repetida en un almacén**
>
> Una zona se dispara siempre al abrir el portón de carga, incluso cuando el sistema está armado y no entra nadie. El registro apunta al mismo detector. Antes de cambiar la central, se revisan el ángulo del sensor, el movimiento de la puerta, posibles corrientes y el cableado. Una prueba controlada permite separar una detección real de un defecto de montaje o ajuste.

## 5. De la planificación al funcionamiento verificable

El montaje comienza con una necesidad concreta: qué se desea detectar, registrar o comunicar y en qué condiciones debe funcionar. El **replanteo** contrasta el plano con el edificio real. Permite comprobar accesos, alturas, canalizaciones, alimentación, cobertura, iluminación, puntos de red y espacios para mantenimiento. Si una cámara prevista queda a contraluz o un detector apunta a una fuente de calor, se corrige su posición antes de tender cable.

Durante la ejecución se identifican los circuitos, se separan las canalizaciones cuando corresponde y se respetan las instrucciones de los equipos. La fijación debe soportar el peso, la exposición y las condiciones del emplazamiento. En los sistemas alimentados desde red, los trabajos eléctricos se realizan con las medidas de protección y por personal competente; la urgencia por terminar el montaje no justifica trabajar sobre partes energizadas.

<figure class="content-photo"><img src="../img/rack-cctv.jpg" alt="Armario cerrado de una instalación CCTV, con equipos, cableado y canalización visibles" loading="lazy"><figcaption>En un armario se debe poder identificar cada conexión, acceder a los equipos y comprobar su alimentación sin desordenar el cableado. Fotografía: <a href="https://commons.wikimedia.org/wiki/File:CCTV_Installation.jpg">Support gigates, CC BY 4.0</a>.</figcaption></figure>

### 5.1. Puesta en servicio y documentación

La **puesta en servicio** comprueba la instalación completa, no solo que los aparatos encienden. Se ensayan las zonas de alarma, la indicación de avería y sabotaje, los avisos de la central, las comunicaciones y la autonomía prevista. En CCTV se verifica el campo de visión, la imagen de día y de noche cuando procede, la fecha y hora, el registro, la recuperación de grabaciones y los permisos de acceso. Una prueba debe dejar constancia de resultado, fecha y condiciones; un fallo se corrige y se vuelve a ensayar.

La documentación final recoge ubicación y referencia de los equipos, esquema real de conexiones, configuración relevante, resultados de pruebas, instrucciones de uso y plan de mantenimiento. Esta información permite que otra persona encuentre una avería sin adivinar cómo quedó instalada la red. La [norma del título y del módulo 0364](https://www.boe.es/buscar/doc.php?id=BOE-A-2009-18404) incluye interpretación de documentación técnica, montaje, verificación y trabajo conforme a seguridad y calidad.

### 5.2. Mantenimiento y diagnóstico

El **mantenimiento preventivo** revisa de forma planificada componentes que pueden degradarse: alimentación de respaldo, fijaciones, limpieza, conectores, eventos, calidad de imagen, capacidad de almacenamiento y comunicación. El **correctivo** restablece un equipo tras una avería. Las comprobaciones y sustituciones se ajustan a manuales y, en instalaciones reguladas, a las obligaciones aplicables; no existe una periodicidad universal válida para cualquier sistema.

Diagnosticar exige localizar el bloque donde se pierde la función. Si una cámara no aparece en pantalla, se comprueba primero alimentación, enlace, dirección o señal, equipo de registro y visualización, según su arquitectura. Si la imagen existe pero no se guardan grabaciones, se revisan disco, espacio, programación y permisos. El multímetro, un comprobador de cable, una fuente de prueba o las herramientas de red ayudan cuando se emplean en el punto correcto y con seguridad.

> **Ejemplo razonado — dos síntomas, dos recorridos**
>
> Tras un corte eléctrico, una central sigue encendida pero ya no envía avisos. La batería ha mantenido la central; puede haber fallado el equipo o el enlace de comunicaciones. En otro edificio, la central está apagada y tampoco hay avisos: la comprobación comienza por la alimentación y su respaldo. El mismo resultado visible para el usuario no implica la misma causa.

## 6. Normativa vigente y protección de los datos

Una **ley o reglamento** establece obligaciones jurídicas; una **norma técnica** describe requisitos y métodos de ensayo; un **manual de fabricante** concreta la instalación y el uso de un producto. Se complementan, pero no tienen la misma función. La exigencia aplicable depende del tipo de sistema, de la actividad, del emplazamiento y de la fecha de la instalación. Por eso una referencia normativa de un libro o catálogo antiguo debe contrastarse con su texto vigente.

En intrusión conectada con el ámbito de seguridad privada son referencias principales la [Ley 5/2014, de Seguridad Privada](https://www.boe.es/buscar/act.php?id=BOE-A-2014-3649) y la [Orden INT/316/2011](https://www.boe.es/buscar/act.php?id=BOE-A-2011-3170). En detección y alarma de incendios se aplica, cuando corresponde, el [Reglamento de instalaciones de protección contra incendios, aprobado por el Real Decreto 513/2017](https://www.boe.es/buscar/act.php?id=BOE-A-2017-6606), junto con las normas técnicas a las que remite. No se debe utilizar para una instalación nueva el antiguo reglamento de 1993 como si siguiera siendo el marco general vigente.

### 6.1. Videovigilancia responsable

Una cámara no solo capta una escena: puede tratar **datos personales** si las imágenes permiten identificar a alguien. Antes de instalarla se define finalidad, responsable, zonas necesarias, acceso a grabaciones y plazo de conservación. El encuadre debe limitarse a lo imprescindible y evitar captar espacios ajenos; la vía pública solo se graba en los supuestos permitidos. Se informa de la existencia de videovigilancia mediante el distintivo correspondiente y se protege el acceso a las imágenes. La [guía de videovigilancia de la AEPD](https://www.aepd.es/areas-de-actuacion/videovigilancia) desarrolla estos criterios y las excepciones.

En una red IP, además, se cambian credenciales por defecto, se asignan permisos según funciones, se actualizan equipos cuando procede y se evita exponer cámaras directamente a Internet. Una instalación puede producir buena imagen y, sin embargo, ser deficiente si cualquiera puede consultar las grabaciones. La prueba de funcionamiento incluye privacidad y seguridad de acceso, no solo calidad de vídeo.

> **Ejemplo razonado — cámara en la entrada de un taller**
>
> Si la finalidad es proteger el acceso, se ajusta la cámara para registrar la puerta y la zona necesaria, no toda la calle ni el interior de viviendas próximas. Se comprueba quién puede ver las imágenes, dónde se guardan y cuándo se eliminan. Una mejora técnica de resolución no autoriza a ampliar la captación sin motivo.

## 7. Seguridad laboral e impacto ambiental del montaje

La prevención comienza por reconocer la tarea y sus peligros antes de trabajar. El riesgo eléctrico aparece al intervenir en alimentación, cuadros o equipos averiados; el de caída, al montar cámaras o detectores en altura; el mecánico, al taladrar, cortar o manejar herramientas; y el de exposición ambiental, al desechar baterías y equipos. Las medidas se eligen para cada situación y se priorizan las que eliminan o reducen el riesgo en origen sobre la mera confianza en un equipo de protección individual.

El [Real Decreto 614/2001](https://www.boe.es/eli/es/rd/2001/06/08/614) establece disposiciones mínimas frente al riesgo eléctrico. Antes de intervenir se identifica el circuito, se asegura la desconexión y se verifica la ausencia de tensión con instrumentos y procedimientos adecuados. El [vídeo del INSST sobre las cinco reglas de oro](https://www.insst.es/documentacion/material-divulgativo-y-audiovisual/videos/riesgo-electrico-cinco-reglas-de-oro-ano-2019) explica por qué desconectar un interruptor, por sí solo, no basta para declarar segura una instalación.

Para los trabajos en altura se planifican el acceso y la estabilidad: la posición de montaje, el estado de la escalera o plataforma, las herramientas y la zona inferior. Al perforar se comprueba la posible presencia de conducciones ocultas y se controla el polvo. Señalizar la zona evita que otras personas entren en el área de caída o tropiecen con cables durante el montaje. Estas precauciones forman parte de la ejecución, no de una revisión posterior.

Los equipos retirados no se abandonan ni se mezclan indiscriminadamente con residuos ordinarios. El [Real Decreto 110/2015 sobre residuos de aparatos eléctricos y electrónicos](https://www.boe.es/buscar/act.php?id=BOE-A-2015-1762) regula su gestión; las baterías requieren también el cauce de recogida que corresponda. Antes de entregar un grabador o soporte de almacenamiento para tratamiento se protege la información que pudiera contener. Reutilizar un equipo funcional, cuando resulta seguro y compatible, puede evitar residuos, pero no justifica conservar aparatos inseguros u obsoletos en una instalación crítica.

<figure class="content-photo"><img src="../../../../assets/img/electronic-waste.jpg" alt="Acumulación de aparatos electrónicos desechados" loading="lazy"><figcaption>El final de vida de cámaras, centrales, grabadores y fuentes de alimentación también forma parte de la instalación. Fotografía: <a href="https://commons.wikimedia.org/wiki/File:Basura_electr%C3%B3nica.jpg">Dolapeart, CC BY-SA 4.0</a>.</figcaption></figure>

## Síntesis de la unidad

Un sistema de seguridad electrónica se entiende siguiendo una cadena de funciones: detectar o captar, transmitir, procesar, avisar o registrar y responder. Cada bloque tiene condiciones de alimentación, comunicación y mantenimiento que deben comprobarse por separado y en conjunto. El diseño parte del riesgo y del uso real del edificio; la puesta en servicio documenta lo que efectivamente funciona; y la normativa, la privacidad, la seguridad laboral y la gestión ambiental delimitan cómo se instala y se utiliza.
