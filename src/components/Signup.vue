<template>
    <div class="vue-tempalte">
        <form>
            <h3>Sign Up</h3>

            <div class="form-group">
                <label>Full Name</label>
                <input type="text" class="form-control form-control-lg"/>
            </div>

            <div class="form-group">
                <label>Email address</label>
                <input type="email" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control form-control-lg" />
            </div>

            <button type="submit" class="btn btn-dark btn-lg btn-block">Sign Up</button>

            <p class="forgot-password text-right">
                Already registered 
                <router-link :to="{name: 'login'}">sign in?</router-link>
            </p>
        </form>
    </div>
</template>

<script>
    export default {
       data() {
    return {
      form: {
        name: "",
        email: "",
        password: " "
      }
    };
  },


  methods: {
      signup: function () {
        let info = {
          name: this.name,
          email: this.email,
          password: this.password
        }

        this.$store.dispatch('signup', info).then(() => this.$router.push('/login'))

      }
    }
  }


  

    
</script>