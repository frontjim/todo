<template>
  <AddTask v-show="showAddTask" @add-task="addTask" />
  <Tasks
    @toggle-reminder="toggleReminder"
    @delete-task="deleteTask"
    :tasks="tasks"
  />
</template>

<script>
import Tasks from '../components/Tasks'
import AddTask from '../components/AddTask'
import firebase from 'firebase'
import Login from './Login'
import Signup from './Signup'
export default {
  name: 'Home',
  props: {
    showAddTask: Boolean,
    
  },
  components: {
    Tasks,
    AddTask,
    Login,
    Signup
  },
  data() {
    return {
      tasks: [],
      myId:''
    }
  },
  methods: {
    addTask(task) {
      this.tasks.push(task)
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          //const ref = firebase
          //.firestore()
          //.collection(user.uid)
          //.doc();
          //self.myId = ref.id
          //console.log(myId);
          firebase
          .firestore()
          .collection(user.uid)
          .add(task)
        }      
      
      })
    },
    async deleteTask(id) {
      if (confirm('Are you sure?')) {
        const res = await fetch(`api/tasks/${id}`, {
          method: 'DELETE',
        })

        res.status === 200
          ? (this.tasks = this.tasks.filter((task) => task.id !== id))
          : alert('Error deleting task')
      }
    },
    async toggleReminder(id) {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          firebase.firestore().collection(user.uid).get().then((querySnapshot) =>{
            querySnapshot.forEach((doc)=> {
            doc.ref.update({reminder: !doc.data().reminder })
            this.tasks = this.tasks.map((task) =>
              task.id === id ? { ...task, reminder: doc.data().reminder } : task)
              })
          })
  
        }
     })
    },
    async fetchTasks() {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          var uid = user.uid
          firebase.firestore().collection(uid).get().then((querySnapshot) => {
            querySnapshot.forEach((doc)=>{
            this.tasks = [...this.tasks, doc.data()]
             })
          })
        }
      })
    }
  },
    async fetchTask(id) {
      const res = await fetch(`api/tasks/${id}`)

      const data = await res.json()

      return data
    },
  async created() {
    this.fetchTasks()
    
  }
}
</script>
