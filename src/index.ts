class Hello {
  constructor(private helloMessage: string) {}
  log() {
    Logger.log(this.helloMessage);
  }
}

function main() {
  const hello: Hello = new Hello("Hello, World!");
  hello.log();
}
