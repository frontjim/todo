<template>
	<div>
		<input type="email" placeholder="Email" v-model="email" />
		<input type="password" placeholder="Password" v-model="password"/>
		<br />
		<button @click="login">Login</button>
	</div>
</template>

<script>
import firebase from 'firebase'
export default {
	name : 'Login',
	data() {
		return {
			email:"",
			password:""
		}
	},
	methods: {
		login () {
		firebase.auth().signInWithEmailAndPassword(this.email, this.password ).then(
			user => {
				
				console.log(user.data)
				this.$router.push('/')
			},
			err => {
				alert(err);
			}
		)
		var uid = user.uid
		}
	}
}
</script>

<style scoped>

</style>