<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <form @submit.prevent="crearCiudad()">
          <div class="mb-3">
            <input type="text" class="form-control" placeholder="Nombre" v-model="name"/>
          </div>
          <div class="mb-3">
            <input type="text" class="form-control" placeholder="Pais" v-model="pais" />
          </div>
          <div class="mb-3">
            <input type="text" class="form-control" placeholder="Ciudad" v-model="ciudad"/>
          </div>
          <button type="submit" class="btn btn-primary">Crear Ciudad</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import ciudadesColRef from "../firebase"
import {addDoc} from "firebase/firestore"
export default {
    name:"AddCity",
    data (){
        return{
            name:null,
            pais:null,
            ciudad:null,
        }
    },
    methods:{
        async crearCiudad (){
            console.log ("Creando la ciudad")
            const agregarDoc = await addDoc (ciudadesColRef, this.$data)
            alert ("Ciudad agregada exitosamente")
            console.log (agregarDoc);
            this.$router.push("/")
        }
    }

};
</script>

<style></style>
