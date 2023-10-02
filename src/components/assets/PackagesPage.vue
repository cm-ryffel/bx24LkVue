<script setup>

</script>

<template>
              <div id="packages" class="menu-content">
                <div class="support-container">
                  <h1 class="title">Выберите подходящий тариф</h1>
                  <div class="dashboard">
                    <div class="dashboard-item">
                      <h2>ПОЧАСОВОЙ</h2>
                      <p>Подойдет, если небольшая компания и в основном справляетесь самостоятельно.</p>
                    </div>
                    <div class="dashboard-item" id="tech-support-link">
                      <h2>ИНДИВИДУАЛЬНЫЙ</h2>
                      <p>Подойдет, если вам необходим полный спектр услуг по технической поддержке Битрикс 24, адаптированный под уникальные потребности вашего бизнеса.</p>
                    </div>
                    <div class="dashboard-item">
                      <h2>ТАРИФ HELP</h2>
                      <p>Подойдет для небольших команд до 10 человек на облаке без сложных интеграций. Например, если у вас только отдел продаж, внедрена телефония и простая автоматизация.</p>
                    </div>
                    <div class="dashboard-item">
                      <h2>ТАРИФ SUPPORT</h2>
                      <p>Подойдет, если Битрикс24 - это инструмент для всей компании и вы используете бизнес-процессы или развиваете функционал</p>
                    </div>
                    <div class="dashboard-item">
                      <h2>ТАРИФ М</h2>
                      <p>Наш тариф M предлагает полный спектр технической поддержки и интеграции CRM. Наши эксперты помогут вам эффективно внедрить систему CRM и обеспечат надежную поддержку на протяжении всего периода использования.</p>
                    </div>
                    <div class="dashboard-item">
                      <h2>ТАРИФ L</h2>
                      <p>Тариф L - это расширенная программа технической поддержки и интеграции CRM. Мы предоставляем глубокий анализ вашей бизнес-модели и настраиваем CRM под ваши потребности. Наша команда экспертов всегда готова помочь вам решить любые возникающие вопросы.</p>
                    </div>
                    <div class="dashboard-item">
                      <h2>ТАРИФ XL</h2>
                      <p>Если вам требуется высококлассная техническая поддержка и сложная интеграция CRM, то наш тариф XL идеально подходит для вас. Мы предоставляем персонального менеджера проекта, который будет следить за вашими потребностями и обеспечивать безупречную работу системы CRM.</p>
                    </div>
                    <div class="dashboard-item">
                      <h2>ТАРИФ XXL</h2>
                      <p>Наш флагманский тариф XXL предлагает максимальный уровень технической поддержки и интеграции CRM. Мы разработаем индивидуальную стратегию для вашего бизнеса, а также предоставим эксклюзивные решения и высокопрофессиональную поддержку.</p>
                    </div>
                  </div>
                </div>
              </div>

</template>

<style scoped>
.support-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 20px;
  margin-top: 15px;
  margin-bottom: 15px;
  background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
  opacity: .9; 
}

.dashboard {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
}

.dashboard-item {
  width: 100%; 
  background-color: #f2f2f2;
  color: #333;
  padding: 20px;
  margin-bottom: 2rem;
  border-radius: 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 18px;

  transition: all 0.3s ease-in-out; 
}

.dashboard-item:hover {
  transform: translateY(-5px); 
}

.dashboard-item h2 {
  margin-bottom: 10px;
}

  /* Стили для мобильных устройств */
  @media (max-width: 767px) {
    .dashboard {
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