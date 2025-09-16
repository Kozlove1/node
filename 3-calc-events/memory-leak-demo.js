const EventEmitter = require('events');

console.log('=== ДЕМОНСТРАЦИЯ УТЕЧЕК ПАМЯТИ ===\n');

const emitter = new EventEmitter();

// ПЛОХОЙ ПРИМЕР - утечка памяти
console.log('1. ПЛОХОЙ ПРИМЕР (с утечками):');
let badCounter = 0;
emitter.on('bad-event', () => {
  badCounter++;
  console.log(`   Плохой слушатель вызван ${badCounter} раз`);
  // Слушатель НЕ удаляется!
});

// ХОРОШИЙ ПРИМЕР - без утечек
console.log('\n2. ХОРОШИЙ ПРИМЕР (без утечек):');
let goodCounter = 0;
const goodHandler = () => {
  goodCounter++;
  console.log(`   Хороший слушатель вызван ${goodCounter} раз`);
  // Удаляем слушатель после выполнения
  emitter.removeListener('good-event', goodHandler);
};
emitter.on('good-event', goodHandler);

// Демонстрация
console.log('\n--- Первый вызов ---');
emitter.emit('bad-event');
emitter.emit('good-event');

console.log('\n--- Второй вызов ---');
emitter.emit('bad-event');
emitter.emit('good-event');

console.log('\n--- Третий вызов ---');
emitter.emit('bad-event');
emitter.emit('good-event');

console.log('\n--- Проверяем количество слушателей ---');
console.log(`Плохих слушателей: ${emitter.listenerCount('bad-event')}`);
console.log(`Хороших слушателей: ${emitter.listenerCount('good-event')}`);

// Очистка
console.log('\n--- Очистка ---');
emitter.removeAllListeners();
console.log(`После очистки - плохих: ${emitter.listenerCount('bad-event')}, хороших: ${emitter.listenerCount('good-event')}`);

console.log('\n=== КОГДА УБИВАТЬ СЛУШАТЕЛИ ===');
console.log('1. После выполнения задачи');
console.log('2. При ошибках');
console.log('3. При завершении программы');
console.log('4. При замене слушателей');
console.log('5. При очистке ресурсов');
