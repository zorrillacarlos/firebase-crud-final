<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <form @submit.prevent="actualizarCiudad()">
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Nombre"
              v-model="infoCiudad.name"
            />
          </div>
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Pais"
              v-model="infoCiudad.pais"
            />
          </div>
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Ciudad"
              v-model="infoCiudad.ciudad"
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Actualizar Ciudad
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import ciudadesColRef from "../firebase";
import { getDoc, doc, setDoc } from "firebase/firestore";
export default {
  name: "EditCity",
  data() {
    return {
      ciudadElegida: {},
      ciudadIDEdit: null,
      docRef: null,
      infoCiudad: {
        name: null,
        pais: null,
        ciudad: null,
      },
    };
  },
  methods: {
    async obtenerCiudad() {
      let ciudadRef = doc(ciudadesColRef, this.ciudadIDEdit);
      this.docRef = ciudadRef;
      let ciudad = await getDoc(this.docRef);
      let ciudadData = ciudad.data();
      this.infoCiudad.name = ciudadData.name;
      this.infoCiudad.pais = ciudadData.pais;
      this.infoCiudad.ciudad = ciudadData.ciudad;
    },
    async actualizarCiudad() {
      await setDoc(this.docRef, this.infoCiudad);
      alert(
        `Ciudad con el id ${this.ciudadIDEdit} fue actualizada exitosamente`
      );
      this.$router.push("/");
    },
  },
  created() {
    let ciudadIDRouter = this.$route.params.ciudadID;
    this.ciudadIDEdit = ciudadIDRouter;
    this.obtenerCiudad();
  },
};
</script>

<style></style>
