export default defineNuxtPlugin(nuxtApp => {
    if (process.client) {
      const script = document.createElement('script');
      script.src = 'https://consent.cookiebot.com/uc.js';
      script.setAttribute('data-cbid', 'dba55119-2993-41ec-beb7-fb4a29465089');
      script.setAttribute('data-blockingmode', 'auto');
      script.type = 'text/javascript';
      document.head.appendChild(script);
    }
  });
  