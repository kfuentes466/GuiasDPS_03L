import { Injectable } from '@angular/core';

//Firebase 
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

//Model
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //traer los datos de firebase
  productList: AngularFireList<any>;

  //Variable temporal para guardar datos seleccionados de tipo Poduct
  selectedProduct: Product = new Product();

  constructor(private firebase: AngularFireDatabase) { }

  //traer todos los datos desde Firebase
  getProducts(){
    return this.productList = this.firebase.list('products');
  }

  //Crear un nuevo producto recibiendo un parametro de tipo Product
  insertProduct(product: Product){
    this.productList.push({
      name: product.name,
      category: product.category,
      location: product.location,
      price: product.price
    });  
  }

  //Actualiza un producto, recibiendo un parametro de tipo Product
  updateProduct(product : Product){
    this.productList.update(product.$key,{
      name: product.name,
      category: product.category,
      location: product.location,
      price: product.price
    });
  }
  //Elimina un producto, recibiendo como parametro la clave, utilizando el metodo remove de firebase
  deleteProduct($key: string){
    this.productList.remove($key);
  }
}
