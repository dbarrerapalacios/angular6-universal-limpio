import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class RequestsProvider {
  private url:string = "http://api.miweb.com";
  //private url:string = "http://localhost:8741";
  private key:string = "123456789";
 

  constructor(public http: HttpClient) {   }
  
/*
metodo para obtener informacion del api
parametros
data: object{ -> datos que requiere la peticion para funcionar
    url:string  -> ruta relativa a donde se quiere consultar,
    params:object  -> parametros que van por la peticion que sirven para filtrar la consulta, como page
}
callback:function -> respuesta que da la operacion
*/
  
      public get(data: any, callback: any){
        let options:any = {observe: 'response'};
        if(data.params){
          options.params = data.params;
        }
      //  if(this.storage.get('sesion')){
       //   options.headers = {'x-access-token': this.storage.get('token')};
     //   }
     if(typeof(localStorage.getItem("token"))==="string"){
        options.headers = {'x-access-token': localStorage.getItem("token")};
     }
            this.http.get(this.url+"/"+data.url, options)
          .subscribe(data => {
           return callback(data["body"], null, data["headers"]);
          }, error =>{
            return callback(null, error, null)
          });
      }
/*
metodo para caragar informacion del api
parametros
data: object{ -> datos que requiere la peticion para funcionar
    url:string  -> ruta relativa a donde se quiere consultar,
    body:object  -> parametros que van a insertar
}
callback:function -> respuesta que da la operacion
*/
public post(data: any, callback: any){
  let options:any = {};
  //if(this.storage.get('sesion')){
  //  options.headers = {'x-access-token': this.storage.get('token')};
  //}
  if(typeof(localStorage.getItem("token"))==="string"){
    options.headers = {'x-access-token': localStorage.getItem("token")};
 }
      this.http.post(this.url+"/"+data.url, data.body ,options)
    .subscribe(data => {
     return callback(data, null);
    }, error =>{
      return callback(null, error)
    });
}
     /*
metodo para actualizar informacion del api
parametros
data: object{ -> datos que requiere la peticion para funcionar
    url:string  -> ruta relativa a donde se quiere consultar,
    body:object  -> parametros que van a actualizar
}
callback:function -> respuesta que da la operacion
*/
public put(data: any, callback: any){
  let options:any = {};
  //if(this.storage.get('sesion')){
  //  options.headers = {'x-access-token': this.storage.get('token')};
  //}
  if(typeof(localStorage.getItem("token"))==="string"){
    options.headers = {'x-access-token': localStorage.getItem("token")};
 }
      this.http.put(this.url+"/"+data.url,data.body, options)
    .subscribe(data => {
     return callback(data, null);
    }, error =>{
      return callback(null, error)
    });
}

 /*
metodo para eliminar informacion del api
parametros
data: object{ -> datos que requiere la peticion para funcionar
    url:string  -> ruta relativa a donde se quiere consultar
}
callback:function -> respuesta que da la operacion
*/

public delete(data: any, callback: any){
  let options:any = {};
  //if(this.storage.get('sesion')){
  //  options.headers = {'x-access-token': this.storage.get('token')};
  //}
  if(typeof(localStorage.getItem("token"))==="string"){
    options.headers = {'x-access-token': localStorage.getItem("token")};
 }
      this.http.delete(this.url+"/"+data.url, options)
    .subscribe(data => {
     return callback(data, null);
    }, error =>{
      return callback(null, error)
    });
}


 /*
metodo para eliminar informacion del api
parametros
data: object{ -> datos que requiere la peticion para funcionar
    url:string  -> ruta relativa a donde se quiere consultar
}
callback:function -> respuesta que da la operacion
*/

public postImage(data: any, file:any ,callback: any){
  let options:any = {};
  if(typeof(localStorage.getItem("token"))==="string"){
    options.headers = {'x-access-token': localStorage.getItem("token")};
 }
 const formData = new FormData();
        formData.append('media', file, file.name);

      this.http.post(this.url+"/"+data.url, formData ,options)
    .subscribe(data => {
     return callback(data, null);
    }, error =>{
      return callback(null, error)
    });
}

}

