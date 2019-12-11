class Registry {
  private store: {[index: string]: any} = {};

  public register(key: string, value: any) {
    this.store[key] = value;
  }

  public lookup(key: string) {
    return this.store[key];
  }
}

export default Registry;
