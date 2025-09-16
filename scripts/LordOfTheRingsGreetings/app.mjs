console.log('=== ДЕМОНСТРАЦИЯ МИКРОЗАДАЧ И МАКРОЗАДАЧ ===\n');

console.log('1. Синхронный код - начало');

// Макрозадача
setTimeout(() => {
  console.log('4. Макрозадача - setTimeout');
}, 0);


// Макрозадача
setTimeout(() => {
  console.log('5. Макрозадача - setTimeout');
}, 0);

const intervalId = setInterval(() => {
  console.log('6. Макрозадача - setInterval');
  // Останавливаем после первого выполнения
  clearInterval(intervalId);
}, 0);

// Макрозадача
setImmediate(() => {
  console.log('8. Макрозадача - setImmediate');
});

// Микрозадача
Promise.resolve().then(() => {
  console.log('2. Микрозадача - Promise.then');
});

// Микрозадача
queueMicrotask(() => {
  console.log('3. Микрозадача - queueMicrotask');
});

// Еще одна микрозадача
Promise.resolve().then(() => {
  console.log('6. Микрозадача - еще один Promise.then');
});

console.log('7. Синхронный код - конец');

// Демонстрация вложенных микрозадач
setTimeout(() => {
  console.log('\n--- Внутри макрозадачи ---');
  
  Promise.resolve().then(() => {
    console.log('Микрозадача внутри setTimeout');
  });
  
  queueMicrotask(() => {
    console.log('queueMicrotask внутри setTimeout');
  });
  
  console.log('Синхронный код внутри setTimeout');
}, 100);