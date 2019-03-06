/*
 * NodeJS Http соединение с сервером 
 */

 //Первый импорт модуля HTTP,
 const http = require('http');

 http.createServer((request, response) => {
     //Скажите браузеру, что все в порядке (код состояния 200), и данные в виде простого текста:
     response.writeHead(200, {
         'Content-Type': 'text/plain'
     });
     //Запишите объявленный текст в тело страницы:
     response.write('Hello World \n');
     //Сообщите серверу, что все заголовки и тело ответа отправлены:
     response.end();

// Сообщает серверу, какой порт должен быть: 
 }).listen(1337);  // ( В браузере, визит http://127.0.0.1:1337 или localhost:1337)
 