<script setup>
import { ref } from 'vue';
let baseUrl = 'https://jsonplaceholder.typicode.com/users/1/todos'
const tasks = ref([])

fetch(baseUrl)
      .then(response => response.json())
      .then(json => tasks.value = json)

</script>

<template>
            <div id="tasks" class="menu-content">
                <div class="tasks-container">
                    <h1 class="title">Мои задачи</h1>
                
                <!--надо сделать один единый item-компонент для карточки задачи -->   

                    <div class="task-list">
                      <div class="task-elem" v-for="task in tasks" :key="task.id">
                        <h2 class="task-title">Название: {{ task.title }}</h2>
                        <p class="time">Затраченное время: {{task.time}}</p>
                        <p class="deadline">Крайний срок: Today</p>
                        <p class="status">Статус: {{ task.completed }}</p>
                      </div>
                    </div>    
                </div>
            </div>

</template>

<style scoped>
      .tasks-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    border-radius: 20px;
    margin-top: 15px;
    margin-bottom: 15px;
    background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
    position: relative;
}
  
  .title {
    margin-bottom: 20px;
  }
  
  .task-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px;
  }
  
  .task-elem {
    background-color: #f2f2f2;  
    width: 100%;
    border-radius: 15px;
    box-shadow: 0px 2px 4px rgba(0,0,0,0.2);    
    padding: 20px;
    transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;
  }

  .task-elem:hover {
    box-shadow: 0px 6px 10px rgba(0,0,0,0.3);
    transform: translateY(-5px)  }
  
  .task-title {
    font-size: 18px;
    margin-bottom: 10px;
  }
  
  .time, .deadline, .status {
    margin-bottom: 10px;
  }
  
  .time span, .deadline span, .status span {
    font-weight: bold;
  }
  
  .status {
    display: flex;
    align-items: center;
  }
  
  .status span {
    margin-right: 5px;
  }
  
  .status .completed {
    color: green;
  }
  
  .status .in-progress {
    color: orange;
  }
  
  .status .not-started {
    color: red;
  }

  .back-link {
    display: block;
    margin-bottom: 20px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
    text-decoration: none;
  }
  
  .back-link:hover {
    color: #666;
  }
  
  
  /* Стили для мобильных устройств */
  @media (max-width: 767px) {
    .task-list {
      grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
      gap: 10px;
    }
  
    .task-item {
      margin-bottom: 10px;
      padding: 10px;
      width: calc(100% - 20px);
    }
  }
</style>