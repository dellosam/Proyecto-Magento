
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';


@Injectable()
export class BbddServiceProvider {

  private db: SQLiteObject;
 
  private sql_table = 'CREATE TABLE IF NOT EXISTS'+
                     ' users ( EMAIL text,'+
                     ' password text)';
  constructor(private storage: SQLite) 
  {
   
  }

  iniciarDb(){
    this.storage = new SQLite()//si no ha sido abierta se crea una instancia del plugin
    this.storage.create({name: "data.db", location: "default"}).then((res)=>{//se crea la bd
      this.db = res; //ejecutar sentencias sql si vistes?this voy hacer ese cambio aqui para ejecutaroki
      this.CrearTabla().then(data=>{
        alert('se ha creado la tabla exitosamente '+data);
      }).catch(err=>{
        alert('erro al crear la tabla '+err); //aqui si--pero los msj q me mandaste son diferentes.uno de no existe la variable y otro de error al crear
      }) //para acceder a la bd
    }).catch((error)=>{
      console.log(error);//no hay especio
      alert('erro al crear la db'+error); //esto te permitira ver en la table si sucedio un error asi no trabajas a ciegas*jajaja gracias
    })

  }

  CrearTabla(){
    return this.db.executeSql(this.sql_table,[])
  }
  //lo que sigue es guardaroki vamos ainvocar esta funcion 
  //si quieres la llamas en login y le pasas los parametros
  CreateUser(email: string, password: string){//recibe los parametros, insertar
    return new Promise ((resolve,reject) =>{//retornar promesa porque cuando se guarda se desa confirmar si los datos se guardaron exitosamente
      let sql = "INSERT INTO users (email, password) VALUES (?,?)";//declarar variable y sentencia sql
      this.db.executeSql(sql, [email, password]).then((data)=>{//si fue exitoso
        resolve(data);//se retorna q los datos se guardaron exitoso
        alert('se guardo el registro')
      }, (error) =>{//sino un error
        reject(error);
        alert('error al crear el registro')
      });
    });
  }

  GetAllUsers(){
    return new Promise ((resolve, reject)=>{
      this.db.executeSql("SELECT * FROM users", []).then((data)=>{
        let arrayUsers = [];
        alert('query '+data.length);
        if (data.rows.length > 0){
          for (var i = 0; i < data.rows.length; i++){
            arrayUsers.push({
              email: data.rows.item(i).email,
              password: data.rows.item(i).password,

            });

          }

        }
        resolve (arrayUsers);
      },(error)=>{
        alert('error de consulta');
        reject(error);
      })
    })
  }

  /*initDatabase(){
    this.sQLite.create({
      name: "data.db",
      location: "default"
    })
     
    .then( data =>{
        console.log("Base de datos disponible");      
        this.db = data;
        //el storage.get('') consulta la vairbale 
        this.storage.get ("dbExists")
        .then(data=>{
        
          if(data==null){//si data es igual a null es porque la variable no se creo 
            console.log("No existe variable");
            this.createTable()
            .then(
                data1 =>{
                  console.log("Tabla creada");
                  this.storage.set("dbExists","1")//como no se creo que crea la dicha variable
                    .then (data=>{
                      console.log("Variable Añadida");
                    })
              })
            .catch(error =>{
                console.log("Error Añadiendo tabla a la base de datos");  
            })

          }else{
            console.log("Existe variable "+data);
            // this.dbExiste = data;//si no entonces la variable si existe y se almacena es la variable global que creaste

          }
        })

    })
    .catch(error =>{
        console.log("Error Abriendo la base de datos");  

    })
  }
  createTable(){
    let sql = "CREATE TABLE IF NOT EXISTS user(email STRING, password STRING)";
    return this.db.executeSql(sql, []);
  }
 
  insert (user:any){
    let sql ="INSERT INTO user(email, password) VALUES(?,?)";
    return this.db.executeSql(sql,[user.email, user.password])
  }

  getAll(){
    let sql ="SELECT * FROM user";
    return this.db.executeSql(sql,[])
    .then(

        response =>{
          let user = [];
          for (let index=0;index<response.rows.length; index++){
              user.push(response.rows.item(index));
          }
          return Promise.resolve(user);
        }

    )
    .catch(
      error => Promise.reject(error)
    )
  }

  delete (email:any){
    let sql ="DELETE FROM user WHERE email=?";
    return this.db.executeSql(sql,[email])
  }

*/
}
