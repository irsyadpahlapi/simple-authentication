<template>
  <div class="hello">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="jumbotron">
            <h1 style="text-align:center;">registration</h1>
            <div class="form-group">
              <label for="exampleFormControlInput1">Email address
                <span v-if="addpassword.length <= 6 && addpassword.length !== 0" class="notif">email tidak valid</span>
              </label>
              <input type="email" class="form-control" v-model="addemail" id="exampleFormControlInput1" placeholder="name@example.com">
            </div>
            <div class="form-group">
              <label for="password">Password
                <span v-if="addpassword.length <= 6 && addpassword.length !== 0" class="notif">password tidak boleh kurang dari 6</span>
              </label>
              <input type="password" class="form-control" v-model="addpassword" id="password" placeholder="masukan password">
            </div>
            <div class="form-group">
              <label for="repassword">Repasword</label>
              <input type="password" class="form-control" v-model="readdpassword" id="repassword" placeholder="ulangi password">
            </div>

            <button type="button" name="button" class="btn btn-primary" @click="register">Register</button>
          </div>

        </div>

        <div class="col-md-6">
          <div class="jumbotron">
            <h1 style="text-align:center;">Login</h1>
            <div class="form-group">
              <label for="exampleFormControlInput1">Email</label>
              <input type="email" v-model="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" class="form-control" v-model="password" id="password" placeholder="masukan password">
            </div>
            <button type="button" name="button" class="btn btn-primary" @click="login">Login</button>
            <div class="col-md-12">
              <p v-show="token" class="lead">{{token}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      addemail: '',
      addpassword: '',
      readdpassword: '',
      email: '',
      password: '',
      token: ''
    }
  },
  methods: {
    register () {
      axios.post('http://localhost:3000/signup/', {
        email: this.addemail,
        password: this.addpassword
      }).then(response => {
        this.addemail = ''
        this.addpassword = ''
        this.readdpassword = ''
      })
    },
    login () {
      axios.post('http://localhost:3000/signin/', {
        email: this.email,
        password: this.password
      }).then(response => {
        this.email = ''
        this.password = ''
        this.token = response.data.token
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.notif{
  color: red;
}
</style>
