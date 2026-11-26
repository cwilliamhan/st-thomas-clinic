/* 최소 서비스 워커: 안드로이드 원탭 설치 버튼(beforeinstallprompt)이 뜨려면
   서비스 워커 + fetch 핸들러가 필요하다. 캐시는 안 하고 모든 요청을 네트워크로 통과시킨다. */
self.addEventListener("install",()=>{self.skipWaiting();});
self.addEventListener("activate",()=>{self.clients.claim();});
self.addEventListener("fetch",ev=>{ev.respondWith(fetch(ev.request));});
