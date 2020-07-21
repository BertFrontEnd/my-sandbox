// эмуляция обращения клиента к серверу и получения данных
// минус подхода - использование функций callback внутри других функций callback
console.log('Request data...');

setTimeout(() => {
  console.log('Preparing data...');
  const backendData = {
    server: 'aws',
    port: 2000,
    status: 'working...',
  };

  setTimeout(() => {
    backendData.modified = true;
    console.log('Data received', backendData);
  }, 2000);
}, 2000);
