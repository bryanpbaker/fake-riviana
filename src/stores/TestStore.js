import { observable, action } from 'mobx';

class TestStore {
  @observable testProp = 'hello world!';

  // prettier-ignore
  @action changeTitle = newTitle => {
    this.testProp = newTitle;
  };
}

export default TestStore;
