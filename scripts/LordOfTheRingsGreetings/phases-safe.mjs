console.log('=== ФАЗЫ EVENT LOOP В NODE.JS (БЕЗОПАСНАЯ ВЕРСИЯ) ===\n');

// 1. TIMER PHASE - setTimeout, setInterval
console.log('1. TIMER PHASE (setTimeout, setInterval)');
setTimeout(() => {
  console.log('   ⏰ Timer Phase - setTimeout выполнен');
}, 0);

// Безопасный setInterval - останавливаем после первого выполнения
let intervalCount = 0;
const intervalId = setInterval(() => {
  intervalCount++;
  console.log(`   ⏰ Timer Phase - setInterval выполнен (${intervalCount})`);
  if (intervalCount >= 1) {
    clearInterval(intervalId);
  }
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

console.log('\n=== ОБЪЯСНЕНИЕ ФАЗ ===');
console.log('1. Timer Phase - обрабатывает setTimeout и setInterval');
console.log('2. Pending Callbacks - отложенные системные callbacks');
console.log('3. Idle, Prepare - внутренние операции Node.js');
console.log('4. Poll - получение новых I/O событий, выполнение I/O callbacks');
console.log('5. Check - выполнение setImmediate callbacks');
console.log('6. Close - обработка событий закрытия (socket.close, etc.)');
console.log('\nМикрозадачи выполняются ПОСЛЕ каждой фазы!');

console.log('\n=== ДЕТАЛЬНОЕ ОПИСАНИЕ КАЖДОЙ ФАЗЫ ===');
console.log('\n📋 TIMER PHASE:');
console.log('   - Выполняет callbacks от setTimeout() и setInterval()');
console.log('   - Проверяет, истекло ли время для выполнения');
console.log('   - Минимальная задержка setTimeout = 1ms (не 0!)');

console.log('\n📋 PENDING CALLBACKS PHASE:');
console.log('   - Выполняет I/O callbacks, отложенные на следующую итерацию');
console.log('   - Обрабатывает некоторые системные ошибки');

console.log('\n📋 IDLE, PREPARE PHASE:');
console.log('   - Внутренние операции Node.js');
console.log('   - Подготовка к следующей фазе');

console.log('\n📋 POLL PHASE:');
console.log('   - Получает новые I/O события');
console.log('   - Выполняет I/O callbacks (fs.readFile, http запросы)');
console.log('   - Может блокироваться, если нет других задач');

console.log('\n📋 CHECK PHASE:');
console.log('   - Выполняет setImmediate() callbacks');
console.log('   - Происходит сразу после Poll Phase');

console.log('\n📋 CLOSE CALLBACKS PHASE:');
console.log('   - Обрабатывает события закрытия (socket.on("close"))');
console.log('   - Очистка ресурсов');


