const plantas = {
  el_cactus_cacahuete: {
    nombre: "El Cactus Cacahuete",
    descripcion: "Un pequeño cactus de tallos segmentados, similares a pequeños cacahuetes, muy decorativo y fácil de cultivar. Ideal para colecciones por su rareza y aspecto simpático.",
    archivo: "cactus-cacahuete",
    energia: "alegría, renovación, vitalidad",
    short: "Cactus pequeño de tallos segmentados como cacahuetes.",
    imagen: "cactus-cacahuete.jpg"
  },
  graptosedum_california_sunset: {
    nombre: "Graptosedum 'California Sunset'",
    descripcion: "Suculenta híbrida muy apreciada por sus hojas en roseta que pueden tomar tonos rosados y anaranjados con buena luz. De fácil cultivo y crecimiento rápido.",
    archivo: "graptosedum",
    energia: "transformación, flexibilidad, belleza interior y exterior",
    short: "Hojas en roseta con tonos rosados y anaranjados.",
    imagen: "graptosedum.jpg"
  },
  huernia: {
    nombre: "Huernia",
    descripcion: "Género de suculentas conocidas por sus llamativas flores en forma de estrella, a menudo con texturas y colores exóticos. Requieren pocos cuidados y son ideales para colecciones.",
    archivo: "huerniaojodedragon",
    energia: "protección, intuición, percepción",
    short: "Flores estrelladas y exóticas, fáciles de cuidar.",
    imagen: "huerniaojodedragon.jpg"
  },
  callisia_navicularis: {
    nombre: "Callisia Navicularis",
    descripcion: "Planta rastrera suculenta con hojas pequeñas y carnosas en forma de barco. Se expande fácilmente y es perfecta como cubresuelos o en macetas colgantes.",
    archivo: "callisianavicularis",
    energia: "resiliencia, protección, equilibrio",
    short: "Hojas carnosas en forma de barco, planta rastrera.",
    imagen: "callisianavicularis.jpg"
  },
  cactus_coral: {
    nombre: "\"Cactus Coral\" o \"Cactus Arroz\"",
    descripcion: "Cactus de aspecto ramificado, similar a ramas de coral o granos de arroz. Muy decorativo, requiere poca agua y mucho sol.",
    archivo: "cactuscoral-2",
    energia: "adaptabilidad, conexión, ligereza",
    short: "Ramas que parecen coral o arroz, ideal para sol.",
    imagen: "cactuscoral-2.jpg"
  },
  madreperla: {
    nombre: "Madreperla",
    descripcion: "Suculenta de rosetas compactas con hojas gruesas de tonos perlados y rosados. Muy apreciada en jardinería ornamental por su belleza y resistencia.",
    archivo: "madreperla-2",
    energia: "belleza interior, protección, suavidad",
    short: "Roseta de hojas perladas y rosadas, resistente.",
    imagen: "madreperla-2.jpg"
  },
  mammillaria_vetula: {
    nombre: "Mammillaria vetula",
    descripcion: "Pequeño cactus globoso cubierto de espinas blancas y finas, que puede formar colonias densas. Produce pequeñas flores en tonos rosados o amarillos.",
    archivo: "mammillariavetula",
    energia: "protección, suavidad, crecimiento interior",
    short: "Cactus globoso con espinas blancas y flores pequeñas.",
    imagen: "mammillariavetula.jpg"
  },
  mammillaria_prolifera: {
    nombre: "Mammillaria prolifera",
    descripcion: "Cactus pequeño que forma grupos mediante hijuelos, con espinas blancas y delicadas flores amarillas. Muy fácil de propagar y ideal para principiantes.",
    archivo: "mammillariaprolifera",
    energia: "abundancia, multiplicidad, comunidad",
    short: "Cactus que forma grupos, flores amarillas suaves.",
    imagen: "mammillariaprolifera.jpg"
  },
  echeveria_elegans: {
    nombre: "Echeveria elegans",
    descripcion: "Suculenta mexicana de rosetas perfectas, hojas azuladas o plateadas y flores rosadas. Famosa por su simetría y resistencia.",
    archivo: "echeveria-elegans-2",
    energia: "armonía, belleza, perfección",
    short: "Rosetas azuladas, simétricas y muy ornamentales.",
    imagen: "echeveria-elegans-2.jpg"
  },
  crassula_expansa_subsp_fragilis: {
    nombre: "Crassula expansa subsp. fragilis",
    descripcion: "Suculenta de porte bajo, tallos finos y hojas diminutas. Muy delicada al tacto pero resistente, ideal para macetas pequeñas.",
    archivo: "crassulafragilis",
    energia: "delicadeza, adaptación, flexibilidad",
    short: "Suculenta pequeña de tallos finos y hojas diminutas.",
    imagen: "crassulafragilis.jpg"
  },
  opuntia_monacantha_monstruosa: {
    nombre: "Opuntia monacantha fma. variegada monstruosa",
    descripcion: "Cactus de segmentos anchos, variegados y deformes, con crecimiento inesperado. Muy llamativo en colecciones y de fácil cuidado.",
    archivo: "monstruosa",
    energia: "originalidad, fortaleza, sanación",
    short: "Segmentos anchos y deformes, cactus variegado.",
    imagen: "monstruosa.jpg"
  },
  pachyphytum_compactum: {
    nombre: "Pachyphytum compactum",
    descripcion: "Es una planta que deslumbra por las líneas que se pueden observar en sus hojas, las cuales les dan una apariencia como si fueran pequeños cristales. Nativa de México, específicamente de los estados de Hidalgo y Querétaro, pertenece a la familia Crassulaceae. Las hojas de este Pachyphytum son pequeñas, muy gorditas de color verde grisáceo o verde brillante (según condiciones de cultivo) y forman rosetas muy compactas. Sus tallos suelen ramificarse desde la base y, en general, esta plantita puede llegar a alcanzar una altura de 15 centímetros y, si no le realizamos podas, estos tallos al crecer más se descolgarán convirtiendo al Pachyphytum en una planta colgante.",
    archivo: "pachyphytum_compactum",
    energia: "claridad, belleza, arraigo, equilibrio",
    short: "Pequeñas rosetas de hojas gorditas con líneas cristalinas.",
    imagen: "pachyphytum_compactum.jpg"
  },
  sedum_rubrotinctum: {
    nombre: "Sedum rubrotinctum",
    descripcion: "Conocido como 'dedos de niño' o 'planta de gominola', es una suculenta originaria de México, caracterizada por sus hojas cilíndricas y carnosas que cambian de color de verde a rojo cuando se exponen a la luz solar. Es una planta rastrera que puede alcanzar hasta 20 cm de altura, con tallos delgados y ramificados que se inclinan con el peso.",
    archivo: "sedum_rubrotinctum",
    energia: "alegría, transformación, vitalidad, protección",
    short: "Hojas cilíndricas verdes que se tornan rojizas al sol.",
    imagen: "sedum_rubrotinctum.jpg"
  },
  echeveria_setosa: {
    nombre: "Echeveria Setosa",
    descripcion: "Una planta suculenta conocida por sus hojas carnosas cubiertas de pelos blancos que le dan una apariencia suave y peluda. Originaria de las montañas del estado de Puebla, en México.",
    archivo: "echeveria_setosa",
    energia: "suavidad, protección, renovación, ternura",
    short: "Hojas carnosas con finos pelos blancos.",
    imagen: "echeveria_setosa.jpg"
  },
  opuntia_microdasys: {
    nombre: "Opuntia microdasys",
    descripcion: "Conocido comúnmente como cactus orejas de conejo o nopal de lunares. Este cactus se caracteriza por sus segmentos en forma de almohadilla cubiertos de gloquidios amarillos o blancos, que parecen pequeños pelos suaves. A diferencia de otras especies de Opuntia, no tiene espinas.",
    archivo: "opuntia_microdasys",
    energia: "protección, alegría, adaptabilidad, ligereza",
    short: "Segmentos aplanados como orejas de conejo, sin espinas.",
    imagen: "opuntia_microdasys.jpg"
  },
  corpuscularia_lehmannii: {
    nombre: "Corpuscularia lehmannii",
    descripcion: "Conocida como 'Planta de Hielo', es una suculenta notable originaria de Sudáfrica. Presenta hojas carnosas de color gris-verde, compactas y dispuestas en pares opuestos a lo largo de los tallos, apilándose a medida que crece. Es compacta y de rápido crecimiento, formando grupos y extendiéndose una vez establecida. Puede alcanzar hasta 20 cm de altura y 30 cm de ancho. Produce flores pequeñas parecidas a margaritas, de color blanco a amarillo pálido, que aparecen en verano y otoño.",
    archivo: "corpuscularia_lehmannii",
    energia: "frescura, expansión, equilibrio, adaptabilidad",
    short: "Hojas compactas gris-verde en pares opuestos.",
    imagen: "corpuscularia_lehmannii.jpg"
  },
  senecio_articulatus: {
    nombre: "Senecio articulatus",
    descripcion: "Conocido como 'Planta de Vela' o 'Cactus Salchicha'. Esta suculenta destaca por sus tallos cilíndricos y segmentados, que se asemejan a salchichas unidas o candelabros. Presenta hojas lobuladas y carnosas, a veces con tonos púrpura bajo luz intensa. Las hojas son caducas y pueden caer en épocas secas o frías. Originaria de Sudáfrica, está adaptada a condiciones secas, requiere poca agua y prefiere luz brillante, aunque debe protegerse de heladas.",
    archivo: "senecio_articulatus",
    energia: "adaptabilidad, resiliencia, transformación, ligereza",
    short: "Tallos segmentados como salchichas o candelabros.",
    imagen: "senecio_articulatus.jpg"
  }
};