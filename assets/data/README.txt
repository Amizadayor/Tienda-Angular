//TODO: PASO 1, HACER LA DATA O ARCHICHO JSON
//TODO: PASO 2, HACER LA INTERFAZ
//TODO: PASO 3, HACER EL SERVICIO  ng g s (nombre de la carpeta)/(nombre del servicio) --skipTests=true
        colocar private http: HttpClient dentro del constructor para poder usarlo
        colocar las sentencia para obtener los datos, en este caso es
        getProductos() {
           return this.http.get<Producto[]>('assets/data/productos.json');
        }
//TODO: PASO 4, Probar que todo funcione bien