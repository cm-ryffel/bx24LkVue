<script setup>

</script>

<template>
      <header class="mb-5">
        <nav class="navbar fixed-top navi bg-secondary">
          <div class="container-fluid">
            <div class="logo">
              <img src="https://static.tildacdn.com/tild3664-3366-4366-b831-363135343061/MozgoLOGO-02.png" alt="MOZGOTEKA-Logo">
            </div>
            <button class="navbar-toggler bg-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Переключить навигацию">
              <span class="navbar-toggler-icon"></span>
            </button>
              <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Меню</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Закрыть"></button>
              </div>
              <div class="offcanvas-body">
                <ul class="navbar-nav justify-content-end">
                  <li class="nav-item w-100 m-2">
                    <div class="nav-elem col bg-secondary text-light rounded p-3">
                      Задачи
                  </div>
                    </li>
                  <li class="nav-item w-100 m-2">
                    <div class="nav-elem col bg-secondary text-light rounded p-3">
                      Cчета и документы
                  </div>
                    </li>
                  <li class="nav-item w-100 m-2">
                    <div class="nav-elem col bg-secondary text-light rounded p-3">
                      Список проектов
                    </div>
                  </li>
                  <li class="nav-item w-100 m-2">
                    <div class="nav-elem col bg-secondary text-light rounded p-3">
                      Пакеты ТП
                    </div>
                  </li>
                  <li class="nav-item w-100 m-2">
                    <div class="nav-elem col bg-secondary text-light rounded p-3">
                      Лицензии Битрикс24
                    </div>
                  </li>
                  <li class="nav-item w-100 m-2">
                    <div class="nav-elem col bg-secondary text-light rounded p-3">
                      FAQ
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>

</template>


<style scoped>
    .logo img {
    max-height: 70px;
}
    .navigation {
    padding-top: 20px;
  }
  .nav-elem {
    cursor: pointer;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1) !important;
    transition: all 0.3s ease-in-out !important;
    font-size: 24px;
  }
  .nav-elem:hover {
    transform: translateY(-5px) !important; 
  }
</style>