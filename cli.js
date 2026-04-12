import enquirer from "enquirer";

export default class Cli {
  print(text) {
    console.log(text);
  }

  async getAge() {
    const prompt = new enquirer.Input({
      name: "age",
      message: "年齢を入力してください（1以上の半角数字）",
      validate(value) {
        if (!/^[1-9][0-9]*$/.test(value)) {
          return "不正な値です。";
        }
        return true;
      },
    });

    return await prompt.run();
  }

  async getWakeUpTime() {
    const prompt = new enquirer.Input({
      name: "time",
      message: "起床時間を入力してください（1-24の半角数字）",
      validate(value) {
        if (!/^[1-9][0-9]*$/.test(value) || value > 24) {
          return "不正な値です。";
        }
        return true;
      },
    });

    return await prompt.run();
  }

  async getNapTime(age) {
    if (age > 5) return 0;

    const prompt = new enquirer.Input({
      name: "time",
      message: "お昼寝時間の長さを入力してください（1-24の半角数字）",
      validate(value) {
        if (!/^[1-9][0-9]*$/.test(value) || value > 24) {
          return "不正な値です。";
        }
        return true;
      },
    });
    return await prompt.run();
  }
}
