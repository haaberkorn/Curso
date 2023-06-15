/*
    Crea un objeto llamado productos, que contenga 5 propiedades, tecnologia,hogar,alimentos,salud,ropa.
    - tecnologia, debe ser un objeto con 2 propiedades:
        * computadoras: debe tener un objeto con 4 propiedades: tipo:[laptop,escritorio], ram:[4gb,8gb,16gb], almacenamiento:[128gb,256gb,512gb,1tb], procesador:[Intel,AMD].
        * celulares: debe tener un objeto con 3 propiedades: marca:[samsumg,lg,xiaomi,poco], ram[4gb,6gb,8gb,12gb,16gb], almacenamiento(32gb,64gb,128gb,256gb),
    
    - hogar, debe ser un objeto con 2 propiedades:
        * electrodomesticos: debe tener un objeto con 2 propiedades: tipo:[tv,parlante,licuadora,lavadora], color:[blanco,gris,negro]
        * muebles: debe tener un objeto con 3 propiedades: tipo:[silla,mesa,gabetero], material:[madera,plastico,metal], color:[blanco,beige,gris,negro]
        

    - alimentos, debe tener un objeto con 4 propiedadess:
        * carnes: debe tener un objeto con 1 propiedad: animal:[pollo,res,cerdo]
        * viveres: debe tener un objeto con 3 propiedades: harina:[trigo,maiz], aceite:[girasol,oliva,maiz], leche:[completa,soya,almendra,descremada]
        * fruver: debe tener un objeto con 2 propiedades: frutas:[manzana,pera,uva,fresa,piña], vegetales:[lechuga,zanahoria,cebolla,rabano,calabaza]
        * aseo: debe tener un objeto con 2 propiedades: personal:[shampoo,acondicionador,jabon,crema dental,desodorante], hogar[cloro,desinfectante,jabon,paños]
        * 
        
    - salud, debe tener un objeto con 2 propiedades:
        * medicamentos: debe tener un objeto con 2 propiedades:
            ° con_prescripcion: debe tener un objeto con 2 propiedades: jarabe:[Clonazepan, Tramadol, Cloperastina, Terbutalina], comprimidos:[Losartan, Enalapril, Ácido valproico, Metformina]
            ° de_venta_libre: debe tener un objeto con 2 propiedades: jarabe:[Acetaminofén, Loratadina, Nitazoxanida, Ambroxol], comprimidos:[Cetirizina, Albendazol, Trimebutina, Omeprazol]
        * primeros_auxilios: debe tener un objeto con 3 propiedades: proteccion_personal:[mascarillas,lentes protectores], curas_y_vendajes:[vendas,tijeras,curitas], suministros_para_heridas:[algodon,compresas]


    - ropa, debe tener un objeto con 3 propiedades:
        * damas: debe tener un objeto con 3 propiedades: prenda:[vestido,jean,blusa,ropa interior,calzado], temporada:[invierno,primavera,verano,otoño], importado:[true,false]
        * caballeros: debe tener un objeto con 3 propiedades: prenda:[short,jean,camisa,ropa interior,calzado], temporada:[invierno,primavera,verano,otoño], importado:[true,false]
        * niños: debe tener un objeto con 3 propiedades: prenda:[vestido,short,jean,camisa,blusa,ropa interior,calzado], temporada:[invierno,primavera,verano,otoño], importado:[true,false]
        

    Resultados estimados:
        console.log(productos.tecnologia.computadoras.procesador[0]); //intel
        console.log(productos.alimentos.viveres.leche[2]); //almendra
        console.log(productos.salud.medicamentos.con_prescripcion.comprimidos[0]); //Losartan
        console.log(productos.hogar.electrodomesticos.tipo[2]); //licuadora
        console.log(productos.ropa.damas.temporada[0]); //invierno
*/

let productos = {
    tecnologia:{
        computadoras:{tipo:["lapto","computadora"], ram:["4gb","8bg","16gb"], almacenamiento:["128gb","256gb","512gb","1tb"], procesador:["Intel","AMD"]}, 
        
        celulares:{marca:["samsung","lg","xiaomi","poco"], ram:["4gb","6gb","8bg","12gb","16gb"], almacenamiento:["32gb","64gb","128gb","256gb"]}
},
    hogar:{
        electrodomestico:{tipo:["tv","parlante","licuadora","lavadora"], color:["blanco","gris","negro"]},

        muebles:{tipo:["silla","mesa","gabatero"], material:["madera","plastico","metal"], color:["blanco","beige","gris","negro"]}
},

    alimentos:{
        carnes:{animal:["pollo","res","cerdo"]}, 
        viveres:{harina:["trigo","maiz"], aceite:["girasol","oliva","maiz"], leche:["completa","soya","almendra","descremada"]},
        frutas:{frutas:["manzana","pera","uva","fresa","pina"], vegetales:["lechuga","zanahoria","cebolla","rabano","calabaza"]},
        aseo:{personal:["shampoo","acondicionador","jabon","crema dental","desodorante"], hogar:["cloro","desifectante","jabon","panos"]}
    },

    salud:{
        medicamentos:{con_prescripcion:{jarabe:["clonazepan","tramadol","cloperastina","terbutalina"], comprimidos:["losartan","Enalapril","acido valproico","Metformina"]}, de_venta_libre:{jarabe:["acetaminofen","loratadina","nitazoxanida","ambroxol"], comprimidos:["cetirizina","albenadozol","trimebutina","omeprazol"]}},

        primeros_Auxilios:{proteccion_personal:["mascarillas","lentes","protectores"], curas_y_vendajes:["vendas","tijeras","curitas"], suministro_para_heridas:["algodon","compresas"]}
    },

    ropa: {
        damas:{prenda:["vestido","jean","blusa","ropa interior","calzado"], temporada:["invierno","primera","verano","otono"], importado:["true","false"]},

        caballeros:{prenda:["short","jean","camisa","ropa","interior","calzado"], temporada:["invierno","primera","verano","otono"], importado:["true","false"]},

        ninos:{prenda:["vestido","short","jean","camisa","blusa","ropa interior","calzado"], temporada:["invierno","primera","verano","otono"], importado:["true","false"]}
    }


};
console.log(productos.tecnologia.computadoras.procesador[0]);
console.log(productos.hogar.electrodomestico.tipo[2]);
console.log(productos.alimentos.viveres.leche[2]);
console.log(productos.salud.medicamentos.con_prescripcion.comprimidos[0]);
console.log(productos.ropa.damas.temporada[0])