Vue.component('mytitle', {
    props: ['titleurl'],
    template: '<h1>Форма учета посещаемости студентов</h1>'
})
Vue.component('mycomponent', {
    data: function() {
        return {
            students: [],
            name: "",
            surname: ""
        };
    },
    methods: {
        onClick: function(msg, event) {
            if (event) {
                event.preventDefault()
            }
            this.students.push(this.fullName);
        }
    },
    computed: {
        // a computed getter
        fullName: function() {
            // `this` points to the vm instance
            return this.name + " " + this.surname
        }
    },
    template: `
    <div>
    <form id="myform">
    <div class="form-group">
      <label for="name">Имя</label>
      <input type="text" id="name" name="name" required class="form-control" placeholder="Введите имя" v-model="name">
    </div>
    <div class="form-group">
      <label for="surname">Фамилия</label>
      <input type="text" id="surname" required name="surname" class="form-control" placeholder="Введите фамилию" v-model="surname">
    </div>
    <button type="submit" class="btn btn-primary" v-on:click.prevent="onClick">Добавить</button>
  </form>
  <template v-if="students.length">
  <ul>
    <li v-for="student in students" :key="student">{{student}}</li>
  </ul>
  </template>
  <template v-else>
    <p>Добавьте запись</p>
  </template>
  </div>
  `
})

var app = new Vue({
    el: '#vueapp',
    data: {
        titleurl: "/"
    },

})