const pattern1 = () => {
  for (let i = 0; i < 5; i++) {
    let str = "";

    for (let j = 0; j <= 5; j++) {
      str += "*";
    }

    console.log(str);
  }
};

const pattern2 = () => {
  for (let i = 0; i < 5; i++) {
    let str = "";

    for (let j = 0; j <= i; j++) {
      str += "*";
    }

    console.log(str);
  }
};

const pattern3 = () => {
  for (let i = 0; i < 5; i++) {
    let str = "";

    for (let j = 0; j <= i; j++) {
      str += j + 1;
    }

    console.log(str);
  }
};

const pattern4 = () => {
  for (let i = 0; i < 5; i++) {
    let num = i + 1;
    let str = "";

    for (let j = 0; j <= i; j++) {
      str += num;
    }

    console.log(str);
  }
};

const pattern5 = () => {
  for (let i = 0; i < 5; i++) {
    let str = "";

    for (let j = 0; j < 5 - i; j++) {
      str += "*";
    }

    console.log(str);
  }
};

const pattern6 = () => {
  for (let i = 0; i < 5; i++) {
    let str = "";

    for (let j = 0; j < 5 - i; j++) {
      str += j + 1;
    }

    console.log(str);
  }
};

const pattern7 = (n: number) => {
  for (let row = 1; row <= n; row++) {
    let numberOfSpace = n - row;
    let str = "";

    for (let spaces = 0; spaces < numberOfSpace; spaces++) {
      str += " ";
    }

    for (let col = 0; col < row; col++) {
      str += "* ";
    }

    console.log(str);
  }
};

pattern7(5);
