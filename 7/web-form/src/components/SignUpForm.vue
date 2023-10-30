<template>
  <form @submit.prevent="handleSubmit">
    <!-- eslint-disable vue/no-multiple-template-root -->
    <label>Email</label>
    <input type="email" required v-model="email">

    <label>Password</label>
    <input type="password" required v-model="password">
    <div v-if="passwordError" class="error">{{ passwordError }}</div>

    <label>Role:</label>
    <select v-model="role">
        <option value="developer">Web Developer</option>
        <option value="designer">Web Designer</option>
    </select>

    <label>Skills</label>
    <input type="text" v-model="tempSkill" @keyup.alt="addSkill">

    <!-- :key="skill make it unique for every skill in list" -->
    <div v-for="skill in skills" :key="skill" class="pill"> 
        <span @click="deleteSkill(skill)"> {{ skill }} </span>
    </div>

    <div class="terms">
        <input type="checkbox" v-model="terms" required>
        <label>Accept terms and conditions</label>
    </div>
        
    <div class="submit">
        <button>Create An Account</button>
    </div>


    <div>
        <input type="checkbox" value="Valerii" v-model="names">
        <label>Valerii</label>
    </div>
    <div>
        <input type="checkbox" value="Oliver" v-model="names">
        <label>Oliver</label>
    </div>
    <div>
        <input type="checkbox" value="Winston" v-model="names">
        <label>Winston</label>
    </div>

    
    

  </form>
  <p>there is your e-mail: {{ email }}</p>
  <p>there is your password: {{ password }}</p>
  <p>there is your role: {{ role }}</p>
  <p>terms accepted: {{ terms }}</p>
  <p>names: {{ names }}</p>
  <p>skills: {{ skills }}</p>
</template>

<script>
// CHALLENDGE
//  - when a user cliks on a skill , delete this skill

export default {
    data() {
        return {
            email: '',
            password: '',
            role: 'designer',
            terms: false,
            names: [],
            tempSkill: '',
            skills: [],
            passwordError: ''
        }
    },
    methods: {
        addSkill(e) {
            console.log(e)
            if (e.key === ',' && this.tempSkill) {
                if (!this.skills.includes(this.tempSkill)) {
                    this.skills.push(this.tempSkill)
                }
                this.tempSkill = ''
            }
        },
        deleteSkill(skill) {
            this.skills = this.skills.filter((item) => {
                return skill!== item
            })
        },
        handleSubmit() {
            console.log("form submitted")
            // password validation
            this.passwordError = this.password.length > 5 ? 
                '' : 'Password must be more than 5 charakters'

            if (!this.passwordError) {
                // make request to database to save user
                console.log('email: ', this.email)
                console.log('password: ', this.password)
                console.log('role: ', this.role)
                console.log('skills: ', this.skills)
                console.log('terms accepted: ', this.terms)
            }
        }
    }
}
</script>

<style>
form {
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
  }
  label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
  }
  input, select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
  }
  input[type="checkbox"] {
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px;
  }
  .pill {
    display: inline-block;
    margin: 20px 10px 0 0;
    padding: 6px 12px;
    background: #eee;
    border-radius: 20px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
    color: #777;
    cursor: pointer;
  }
  button {
    background: #0b6dff;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
  }
  .submit {
    text-align: center;
  }
  .error {
    color: #ff0062;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;
  }
</style>