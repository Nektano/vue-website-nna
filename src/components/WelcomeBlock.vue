<script setup></script>
<template>
  <div>
    <img class="background_image" src="@/assets/bg.jpg" />
    <div class="center_text">
      <h1 class="welcome_text">
        Пятигорская бронза: уникальные<br />сувениры для вас
      </h1>
      Мы предлагаем эксклюзивные фигурки и брелоки из бронзы, созданные с
      душой<br />и мастерством.<br /><br />
      <RouterLink to="/catalog" class="Link">Купить сейчас</RouterLink>
    </div>
  </div>
</template>
<style scoped>
.background_image {
  filter: brightness(60%);
  width: 100%;
  height: auto;
}
.center_text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-family: var(--sans-serif);
  font-size: 18px;
}
.welcome_text {
  font-family: var(--sans-serif);
  font-weight: bold;
  font-size: 36px;
  color: #ffffff;
}
.Link {
  width: 250px;
  margin: 0;
  padding: 0;
  color: #ffffff;
  background-color: #8c271f;
  border: 1px solid #8c271f;
  border-radius: 30px;
  font-size: 18px;
  font-weight: 600;
  font-family: var(--sans-serif);
  padding: 16px 30px;
}
</style>
