<template>
  <div id="teamGrid">
            <div class="user" v-for="user in users" :key="user.id">
              <h3>
                {{ user.name }}
              </h3>
              <div class="user-email">
                {{user.email}}
              </div>
              <div class="user-zipcode">
                {{user.address.zipcode}}
              </div>
            </div>

  </div>
</template>

<script>
// import users from '~/data/users.json'
export default {
  name: "teamGrid",
  data() {
      return {
        users : []
      }
  },
  methods: {
    async fetchUsers() {
        const api = 'https://jsonplaceholder.typicode.com/users'

        const response = await fetch(api);
        // Vue.teamgrid.data.users = await response.json()
        this.users = await response.json()
        
    }
  },
  mounted(){
    this.fetchUsers()
  }
}
</script>

<style lang="scss" scoped>

#teamGrid {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(4, 25%) ;
  grid-template-rows: auto;
  justify-content: center;
}

.user {
  height: 200px;
  background-color: $gray;
  border-radius:5px;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
    h3 {
        font-size: 25px;

      }

  &-email {
    font-size: 18px
  }
  &-zipcode {
    flex: 0 0 20%;;
    font-size: 16px;
    justify-self: flex-end;
  }
}


</style>
