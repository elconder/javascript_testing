describe('MainCtrl', function () {

  var todoInputBox = element(by.css('[ng-model="todo"]'));
  var addTodoButton = element(by.css('input.btn-primary'));


  beforeEach(function () {
    browser.get('http://localhost:88/AngularJS/yeoman/app/#/');
  });

  it('Should add an item to the TODO list', function () {
    todoInputBox.sendKeys('Hi this is my First TODO!');
    addTodoButton.click();
    todoInputBox.sendKeys('Hi this is my Second TODO!');
    addTodoButton.click();

    element.all(by.css('div.ui-sortable p')).then(function (items) {
      expect(items.length).toBe(2);
    });
  });

  it('Should add and delete one item', function () {
    todoInputBox.sendKeys('This is an item that will be removed!');
    addTodoButton.click();
    element.all(by.css('button.btn-danger')).then(function (btns) {
      btns[0].click();
      element.all(by.css('div.ui-sortable p')).then(function (items) {
        expect(items.length).toBe(0);
      });
    })
  });

});

describe('TestOneController', function () {

  var greeting = element(by.id('greeting'));
  var textInputBox = element(by.css('[ng-model="newText"]'));
  var changeGreetingButton = element(by.css('.btn-default'));

  beforeEach(function () {
    browser.get('http://localhost:88/AngularJS/yeoman/app/#/one');
  });

  it('initially has a greeting', function () {
    expect(greeting.getText()).toEqual('Hello, World!');
  });

  it('clicking the button changes the greeting if text is inputed', function () {
    textInputBox.sendKeys('Hi!');
    changeGreetingButton.click();
    expect(greeting.getText()).toEqual('Hi!');
  });

  it('clicking the button does not change the greeting if text is not inputed', function () {
    textInputBox.sendKeys('');
    changeGreetingButton.click();
    expect(greeting.getText()).toEqual('Hello, World!');
  });

});

describe('TestTwoController', function () {

  var total = element(by.tagName('p'));
  var numberInputBox = element(by.css('[ng-model="newItem"]'));
  var changeTotalButton = element(by.css('.btn-default'));

  beforeEach(function () {
    browser.get('http://localhost:88/AngularJS/yeoman/app/#/two');
  });

  it('initially has a total', function () {
    expect(total.getText()).toEqual('6');
  });

  it('updates the `total` when a value is added', function () {
    numberInputBox.sendKeys(7);
    changeTotalButton.click();
    numberInputBox.clear();
    expect(total.getText()).toEqual('13');
    numberInputBox.sendKeys(7);
    changeTotalButton.click();
    expect(total.getText()).toEqual('20');
    numberInputBox.clear();
    numberInputBox.sendKeys(-700);
    changeTotalButton.click();
    expect(total.getText()).toEqual('-680');
  });

  it('does not update the `total` when an empty value is added', function () {
    numberInputBox.sendKeys('');
    changeTotalButton.click();
    expect(total.getText()).toEqual('6');
    numberInputBox.sendKeys('hi!');
    changeTotalButton.click();
    expect(total.getText()).toEqual('6');
  });

});

describe('TestThreeController', function () {

  var modalNumber = element.all(by.css('.modal-body span')).get(1);
  var modalButton = element(by.css('[bs-modal="modal"]'));
  var iterateButton = element(by.css('[ng-click="changeModalText()"]'));
  var hideButton = element(by.css('[ng-click="$hide()"]'));
  var justSomeText = element(by.tagName('h2'));

  beforeEach(function () {
    browser.get('http://localhost:88/AngularJS/yeoman/app/#/three');
  });

  it('initially has a modalNumber', function () {
    modalButton.click();
    expect(modalNumber.getText()).toEqual('1');
  });

  it('updates the `modalNumber` when a value is added', function () {
    modalButton.click();
    iterateButton.click();
    expect(modalNumber.getText()).toEqual('2');
    iterateButton.click().click().click();
    expect(modalNumber.getText()).toEqual('5');
    hideButton.click();
    expect(justSomeText.getText()).toEqual('Just a modal');
  });
});

describe('TestFourController', function () {

  var loadButton = element(by.css('[ng-click="loadRepos()"]'));
  var ul = element.all(by.tagName('ul'));
  var li = element.all(by.tagName('li'));

  beforeEach(function () {
    browser.get('http://localhost:88/AngularJS/yeoman/app/#/four');
  });

  it('updates the DOM when the button is clicked', function () {
    expect(ul.count()).toEqual(1);
    expect(li.count()).toEqual(5);
    loadButton.click();
    expect(ul.count()).toEqual(101);
    expect(li.count()).toEqual(105);
  });

});
