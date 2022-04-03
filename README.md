# guess-number-game-nodejs
Консольная игра "угадай число" в архитектуре клиент-сервер. Связь на TCP-сокетах, средствами модуля net (Nodejs)

## Правила
1. Запускается сервер - создается число (в диапазоне 0 - 100) \
2. При запуске клиента, создается подключение и передается подозреваемое число
3. Если число угадывается, то клиент оповещается и создается новое
4. Иначе, сервер подсказывает "больше" или "меньше"

## Запуск
Сервер
```
node server
```

Клиент
```
node client guess {number}
```

## Логи
Утилитой tcpdump можно записать логи в файл
```
sudo tcpdump -i lo -w logs.pcap
```
Потом прочитать из файла
```
sudo tcpdump -r logs.pcap
```
