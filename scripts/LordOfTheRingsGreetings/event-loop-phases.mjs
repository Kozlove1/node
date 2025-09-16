console.log('=== ФАЗЫ EVENT LOOP В NODE.JS ===\n');

// 1. TIMER PHASE - setTimeout, setInterval
console.log('1. TIMER PHASE (setTimeout, setInterval)');
setTimeout(() => {
  console.log('   ⏰ Timer Phase - setTimeout выполнен');
}, 0);

setInterval(() => {
  console.log('   ⏰ Timer Phase - setInterval выполнен');
  clearInterval(this); // Останавливаем после первого выполнения
}, 0);

// 2. PENDING CALLBACKS PHASE - I/O callbacks отложенные на следующую итерацию
console.log('2. PENDING CALLBACKS PHASE (отложенные I/O callbacks)');
// Эта фаза обрабатывает некоторые системные операции

// 3. IDLE, PREPARE PHASE - внутренние операции Node.js
console.log('3. IDLE, PREPARE PHASE (внутренние операции)');
// Эта фаза используется Node.js для внутренних операций

// 4. POLL PHASE - получение новых I/O событий
console.log('4. POLL PHASE (получение I/O событий)');
// Здесь Node.js получает новые события I/O

// 5. CHECK PHASE - setImmediate callbacks
console.log('5. CHECK PHASE (setImmediate)');
setImmediate(() => {
  console.log('   ✅ Check Phase - setImmediate выполнен');
});

// 6. CLOSE CALLBACKS PHASE - закрытие соединений
console.log('6. CLOSE CALLBACKS PHASE (закрытие соединений)');
// Эта фаза обрабатывает события закрытия (например, socket.on('close'))

console.log('\n=== ДЕМОНСТРАЦИЯ ПОРЯДКА ФАЗ ===');

// Микрозадачи выполняются между фазами
Promise.resolve().then(() => {
  console.log('🔄 Микрозадача - Promise.then (между фазами)');
});

queueMicrotask(() => {
  console.log('🔄 Микрозадача - queueMicrotask (между фазами)');
});

console.log('\nСинхронный код выполняется первым');

// Демонстрация с I/O операцией
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Создаем временный файл для демонстрации I/O
fs.writeFileSync('temp.txt', 'Hello World');

fs.readFile('temp.txt', (err, data) => {
  console.log('\n--- В I/O КОНТЕКСТЕ ---');
  
  setTimeout(() => {
    console.log('⏰ setTimeout в I/O контексте');
  }, 0);
  
  setImmediate(() => {
    console.log('✅ setImmediate в I/O контексте (обычно первым!)');
  });
  
  // Очищаем временный файл
  fs.unlinkSync('temp.txt');
});

console.log('\n=== ОБЪЯСНЕНИЕ ФАЗ ===');
console.log('1. Timer Phase - обрабатывает setTimeout и setInterval');
console.log('2. Pending Callbacks - отложенные системные callbacks');
console.log('3. Idle, Prepare - внутренние операции Node.js');
console.log('4. Poll - получение новых I/O событий, выполнение I/O callbacks');
console.log('5. Check - выполнение setImmediate callbacks');
console.log('6. Close - обработка событий закрытия (socket.close, etc.)');
console.log('\nМикрозадачи выполняются ПОСЛЕ каждой фазы!');


