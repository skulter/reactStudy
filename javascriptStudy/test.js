const promise = new Promise((resolve, reject) => {
    const num = 10;
    if (num < 10) {
      reject("숫자가 10미만이 아닙니다");
    }
    resolve(num);
  });
