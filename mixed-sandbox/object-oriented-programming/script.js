const cpu = {
  producer: 'AMD',
  amount: 250,
  percent: 5,
  family: 'Ryzen 7',
  name: 'Ryzen 7 3700X',
  image: './assets/img/ryzen.png',
  getAmount() {
    const discount = this.amount - this.amount * (this.percent / 100);
    return discount;
  },
};

const memory = {
  producer: 'Hynix',
  amount: 60,
  memory: 2048,
  name: 'Hynix DDR4-2666',
  family: 'DDR4',
  image: './assets/img/hynix.png',
  __proto__: cpu,
};

console.log(cpu.getAmount());
console.log(memory);
