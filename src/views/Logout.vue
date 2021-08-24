<template>
	<button @click.prevent="logout">Log Out</button>
</template>

<script>
import firebase from 'firebase'
export default {
	methods:{
		logout() {
			firebase.auth().signOut().then(() =>{
				this.$router.push('/')
			})
		}
	}
}
</script>