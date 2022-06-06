<template>
  <div class="home">
    <h2>Ciudades</h2>
    <div class="container">
      <div class="row">
        <div class="col">
          <ul class="list-group">
            <li
              v-for="item in ciudadesPrincipales"
              :key="item.id"
              class="list-group-item d-flex justify-content-between align-items-center"
            >
            {{item.name}} - {{item.pais}}
              <span class="badge badge-primary badge-pill">
                <router-link
                  :to="{ path: `/ciudades/${item.id}` }"
                  class="btn btn-primary mx-2"
                  >Editar</router-link
                >
                <a href="#" class="btn btn-danger" @click="borrarCiudad(item.id)">Borrar</a>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ciudadesColRef from "../firebase";
import { getDocs, doc, deleteDoc } from "firebase/firestore";
export default {
  name: "HomeView",
  data() {
    return {
      ciudadesPrincipales: [],
    };
  },
  methods: {
    async fetchCiudades() {
      let ciudadesCapturar = await getDocs(ciudadesColRef);
      let ciudades = [];
      ciudadesCapturar.forEach((ciudad) => {
        let ciudadData = ciudad.data();
        ciudadData.id = ciudad.id;
        ciudades.push(ciudadData);
      });
      console.log(ciudades);
      this.ciudadesPrincipales = ciudades;
    },
    async borrarCiudad (ciudadId){
      let ciudadRef = doc (ciudadesColRef, ciudadId)
      await deleteDoc (ciudadRef)
      alert("Ciudad Borrada Existosamente")
      this.$router.go()
    }
  },
  created() {
    this.fetchCiudades();
  },
};
</script>
