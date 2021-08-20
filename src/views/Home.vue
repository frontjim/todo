<template>
	<AddTask v-show="showaddtask" @add-task="AddTask"/>
    <Tasks @toggle-reminder="togglereminder" @delete-task="deleteTask" :tasks="tasks" />
</template>

<script>
import Tasks from '../components/Tasks'
import AddTask from '../components/AddTask'
export default {
	name: 'Home',
	props:{
		showaddtask: Boolean
	},
	components: {
		Tasks,
		AddTask,
	},
	data () {
		return{
			tasks: []
		}
	},
	methods: {
      async AddTask(task) {
        const res = await fetch('api/tasks', {
          method: 'POST',
          headers:{
            'Content-type': 'application/json',
          },
          body: JSON.stringify(task)
          
          }
          )

        const data = await res.json()

        this.tasks = [...this.tasks, data]
      },
      async deleteTask(id) {
        if (confirm('Sgr re mlka?')) {
        const res = await fetch(`api/tasks/${id}`,{
          method: 'DELETE'
        })
          res.status === 200 ? (this.tasks = this.tasks.filter((task) => task.id !== id)) : alert('ERROR')
          
        }
      },
      async togglereminder(id) {
        const tasktotoggle = await this.fetchtask(id)

        const updt={...tasktotoggle, reminder: !tasktotoggle.reminder}

        const res = await fetch(`api/tasks/${id}`, { 
          method: 'PUT',
          headers:{
            'Content-type':'application/json'
          },
          body: JSON.stringify(updt)

        })

        const data = await res.json()

        this.tasks = this.tasks.map((task) => task.id === id ? {...task, reminder : data.reminder} : task )
      },
      async fetchtasks() {
        const res = await fetch('api/tasks')

        const data = await res.json()
        return data
      },
      async fetchtask(id) {
        const res = await fetch(`api/tasks/${id}`)

        const data = await res.json()
        return data
      },
    },
    async created() {
      this.tasks = await this.fetchtasks()
  }
}
</script>