const assert = require("power-assert");
const Todo = require("./../../../models/Todo.js");

describe("Todo.create", () => {
  it("メソッド実行時、引数にはtitleプロパティを含むオブジェクトがないとエラーになる", () => {
    const dataList = [{}, { body: "詳細文" }];
    dataList.forEach(data => {
      try {
        Todo.create(data);
        assert.fail();
      } catch (error) {
        assert.equal(error.message, "titleは必須です");
      }
    });
  });
  it("メソッド実行時、引数にはbodyプロパティを含むオブジェクトがないとエラーになる", () => {
    try {
      Todo.create({ title: "タイトル" });
      assert.fail();
    } catch (error) {
      assert.equal(error.message, "bodyは必須です");
    }
  });

  it("メソッド実行時、正しい引数を渡すと新規にTodoデータ作成して,", () => {
    const oldTodos = Todo.findAll();
    const data = {
      title: "dummy title",
      body: "dummy body"
    };
    const createdTodo = Todo.create(data);
    assert.deepEqual(createdTodo, {
      id: createdTodo.id,
      title: data.title,
      body: data.body,
      createdAt: createdTodo.createdAt,
      updatedAt: createdTodo.updatedAt
    });
    const currentTodos = Todo.findAll();
    assert.equal(oldTodos.length + 1, currentTodos.length);
  });
});
