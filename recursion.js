function factorial(num) {
    if (num === 1) {
      return num;
    } else {
      let hitung = num * factorial(num - 1);
      console.log(hitung);
      return num * factorial(num - 1);
    }
  }
  
  factorial(4);