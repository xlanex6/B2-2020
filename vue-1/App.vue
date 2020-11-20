<template>
  <div class="container">

    <!-- <img :src="imgUrl" alt=""> -->


    <h1>LOGIN APP</h1>
    <div class="form-input">
      <label for="email">Email</label>
      <input type="text" v-model="email">
    </div>
    <div class="form-input">
      <label for="password">Password</label>
      <input type="password" v-model="password">
    </div>
    <div class="form-input">
      <label for="firstName">firstName</label>
      <input type="text" v-model="firstName"> <span :hidden="fieldsAreBlank">{{firstName.length }}</span>
    </div>
    <div class="form-input">
      <label for="age">Age</label>


      <input type="number" v-model.number="age">


    </div>
 {{ ageDouble}}
      <p v-if="isMajor" class="majeur">
      vous etes majeur
      </p>
      <p v-else class="mineur"> vous etes mineur</p>

    <div class="form-input">
      <button :disabled="fieldsAreBlank" @click.prevent="displayAlert()">Sign up</button>
      <button @click="resetAllFields">RESET</button>

      <Cta url="https://hp01.eduservices.org/Annecy02/enseignant?identifiant=sSjJws9XSdABNKeH" text="google" />
      <Cta url="https://www.fwsfdef.fre" text="mon site " />


    </div>
  </div>
</template>

<script>
import Cta from './components/Cta'

export default {
  name: 'Login',
  components: {
  //   //  === Cta
    Cta
  },
  data() {
    return {
      email: '',
      password: '',
      firstName: '',
      age: 0,
      imgUrl: 'https://web2.hirez.com/paladins//wp-content/uploads/2018/02/paladins-new-store.jpg'
    };
  },
  methods: {
    resetAllFields(){
      this.email= '',
      this.password= '',
      this.firstName= '',
      this.age= 0
    },
    displayAlert() {
      alert(`INFOS === EMAIL: ${this.email} === MDP:${this.password} `)
    },
  },
  computed: {
    isMajor() {
      return this.age > 17 ? true : false
    },
    ageDouble() {
      return this.age * 2
    },
    fieldsAreBlank(){
      return (this.firstName && this.email && this.password) === '' ? true : false
    }
  },
  watch: {
    age(value){
      if (value < 0) {
        this.age = 0
      }
    }
  }
};
</script>

<style scoped>
.container {
  width: 978px;
  margin: auto;
  text-align: center;
}

.form-input {
  margin-bottom: 20px;
}
.form-input label {
  margin-right: 10px;
}

.majeur {
  background-color: green;
  color: white;
}
.mineur {
  background-color: red;
  color: white;
}
</style>
