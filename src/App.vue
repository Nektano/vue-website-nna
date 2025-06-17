<script>
export default {
  name: "SiteFooter",
  data() {
    return {
      email: "",
      currentYear: new Date().getFullYear(),
    };
  },
  methods: {
    subscribe() {
      console.log("Subscribed with:", this.email);
      this.email = "";
    },
  },
};
</script>

<template>
  <header>
    <div class="LogoContainer">
      <img src="@/assets/logo.png" alt="Пятигорская бронза" />
    </div>
    <nav>
      <RouterLink to="/" class="Link">Главная</RouterLink>
      <RouterLink to="/catalog" class="Link">Каталог товаров</RouterLink>
      <RouterLink to="/" class="Link">Доставка</RouterLink>
      <RouterLink to="/mailform" class="Link">Написать нам</RouterLink>
      <RouterLink to="/" class="Link">Отзывы</RouterLink>
      <RouterLink to="/" class="Link">FAQ</RouterLink>
    </nav>
  </header>

  <RouterView />

  <footer class="site-footer">
    <div class="footer-container">
      <div class="footer-column">
        <h4 class="footer-title">О компании</h4>
        <ul class="footer-list">
          <li><a href="/about">О нас</a></li>
          <li><a href="/contacts">Контакты</a></li>
          <li><a href="/reviews">Отзывы</a></li>
          <li><a href="/blog">Блог</a></li>
        </ul>
      </div>

      <div class="footer-column">
        <h4 class="footer-title">Покупателям</h4>
        <ul class="footer-list">
          <li><a href="/delivery">Доставка и оплата</a></li>
          <li><a href="/guarantee">Гарантия</a></li>
          <li><a href="/returns">Возврат</a></li>
          <li><a href="/faq">FAQ</a></li>
        </ul>
      </div>

      <div class="footer-column">
        <h4 class="footer-title">Контакты</h4>
        <div class="footer-contacts">
          <p><a href="tel:+79054456224">+7 (905) 445-62-24</a></p>
          <p>
            <a href="mailto:antilopagold@yandex.ru">antilopagold@yandex.ru</a>
          </p>
          <div class="social-links">
            <a href="#" class="social-icon"><i class="fab fa-vk"></i></a>
            <a href="#" class="social-icon"><i class="fab fa-telegram"></i></a>
            <a href="#" class="social-icon"><i class="fab fa-whatsapp"></i></a>
          </div>
        </div>
      </div>

      <div class="footer-column">
        <h4 class="footer-title">Подписаться на новости</h4>
        <form class="newsletter-form" @submit.prevent="subscribe">
          <input
            type="email"
            v-model="email"
            placeholder="Ваш e-mail"
            required
            class="newsletter-input"
          />
          <button type="submit" class="newsletter-button">Подписаться</button>
        </form>
        <p class="footer-text">Будьте в курсе наших акций и новинок</p>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="footer-copyright">
        &copy; {{ currentYear }} Название компании. Все права защищены.
      </div>
      <div class="footer-links">
        <a href="/privacy">Политика конфиденциальности</a>
        <a href="/agreement">Пользовательское соглашение</a>
      </div>
    </div>
  </footer>
</template>

<style>
.LogoContainer {
  display: flex;
  justify-content: center;
  width: 600px;
}
img {
  height: 7vh;
}
header {
  display: flex;
  justify-content: last baseline;
  align-items: center;
  width: 100%;
  height: 90px;
}
nav {
  display: flex;
  justify-content: flex-end;
  margin: 30px;
  gap: 30px;
  align-items: center;
  width: 100%;
}
.Link {
  background-color: #bc271f;
  padding: 10px 20px;
  border-radius: 25px;
  color: #ffffff;
  text-decoration: none;
  font-family: var(--sans-serif);
  font-size: 18px;
  font-weight: 600;
}
.Link:hover {
  filter: brightness(70%);
}
.site-footer {
  background-color: #f5f5f5;
  color: #333;
  padding: 40px 0 20px;
  font-family: "Arial", sans-serif;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 15px;
}

.footer-column {
  flex: 1;
  min-width: 200px;
  margin-bottom: 30px;
  padding: 0 15px;
}

.footer-title {
  font-size: 18px;
  margin-bottom: 20px;
  color: #222;
}

.footer-list {
  list-style: none;
  padding: 0;
}

.footer-list li {
  margin-bottom: 10px;
}

.footer-list a {
  color: #555;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-list a:hover {
  color: #000;
}

.footer-contacts p {
  margin-bottom: 10px;
}

.footer-contacts a {
  color: #555;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-contacts a:hover {
  color: #000;
}

.social-links {
  display: flex;
  gap: 15px;
  margin-top: 15px;
}

.social-icon {
  color: #555;
  font-size: 20px;
  transition: color 0.3s;
}

.social-icon:hover {
  color: #000;
}

.newsletter-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.newsletter-input {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.newsletter-button {
  padding: 10px;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.newsletter-button:hover {
  background-color: #555;
}

.footer-text {
  font-size: 14px;
  color: #777;
  margin-top: 10px;
}

.footer-bottom {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 15px 0;
  border-top: 1px solid #ddd;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.footer-copyright {
  color: #777;
  font-size: 14px;
}

.footer-links {
  display: flex;
  gap: 20px;
}

.footer-links a {
  color: #777;
  font-size: 14px;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: #333;
}

@media (max-width: 768px) {
  .footer-column {
    flex: 100%;
    margin-bottom: 20px;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }

  .footer-links {
    flex-direction: column;
    gap: 5px;
  }
}
</style>
