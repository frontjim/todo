<template>
	<div>
		<input type="email" placeholder="Email" v-model="email" />
		<input type="password" placeholder="Password" v-model="password"/>
		<br />
		<button @click="signup">Login</button>
	</div>
</template>

<script>
import firebase from 'firebase'
export default {
	data(){
		return {
			email:'',
			password:''
		}
	},
	methods: {
		signup() {
			firebase
        	.auth()
        	.createUserWithEmailAndPassword(this.email, this.password).then(cred =>{
				firebase.firestore().collection(cred.user.uid).add({
					text: '',
					day:'',
					reminder: false
				})

			})
			this.$router.push('/')
		}
	}
}
</script>