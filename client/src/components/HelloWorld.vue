<template>
  <div class="hello">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="jumbotron">
            <div class="alert alert-success" role="alert" v-show="succes">
              register succes
            </div>
            <div class="alert alert-danger" role="alert" v-show="error">
              register gagal
            </div>
            <h1 style="text-align:center;">registration</h1>
            <div class="form-group">
              <label for="exampleFormControlInput1">Email address
                <!-- <span  class="notif">email tidak valid</span> -->
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
              <label for="repassword">Repasword
                <span v-if="addpassword !== readdpassword && readdpassword !== ''" class="notif">password is different</span>
              </label>
              <input type="password" class="form-control" v-model="readdpassword" id="repassword" placeholder="ulangi password">
            </div>

            <button type="button" name="button" class="btn btn-primary" @click="register">Register</button>
          </div>

        </div>

        <div class="col-md-6">
          <div class="jumbotron">
            <div class="alert alert-success" role="alert" v-show="lgsucces">
              register succes
            </div>
            <div class="alert alert-danger" role="alert" v-show="lgerror">
              register gagal
            </div>
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
      token: '',
      succes: false,
      error: false,
      lgsucces: false,
      lgerror: false
    }
  },
  methods: {
    register () {
      let err = this.addpassword.length <= 6
      if (err) {
        this.error = true
      }else{
        axios.post('http://localhost:3000/signup/', {
          email: this.addemail,
          password: this.addpassword
        }).then(response => {
          this.succes = true
          this.addemail = ''
          this.addpassword = ''
          this.readdpassword = ''
        }).catch(err => {
          this.error = true
        })
      }
    },
    login () {
        axios.post('http://localhost:3000/signin/', {
          email: this.email,
          password: this.password
        }).then(response => {
          this.lgsucces = true
          this.email = ''
          this.password = ''
          this.token = response.data.token
        }).catch(err => {
          this.lgerror = true
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
