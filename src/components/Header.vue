<template>
	<header>
		<h1>{{title}}</h1>
		<Button v-show="homepage" @btn-click="$emit('toggle-add')" :text="showaddtask ? 'kleisto to gamidi' : 'anoikse to gamidi'" :color="showaddtask ? 'red' : 'green' "/>
	</header>

</template>

<script>
import Button from './Button'

export default {
	name: 'Header',
	props: {
		title: String,
		showaddtask :Boolean
	},
	components: {
		Button
	},
	computed: {
		homepage() {
			if(this.$route.path === '/') {
				return true
			} else {
				return false
			}
		}
	}
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>