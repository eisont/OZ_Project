export const addData = async (content, setTodoList) => {
  try {
    const res = await fetch('http://localhost:3000/todo', {
      method: 'POST',
      body: JSON.stringify({
        id: Number(new Date()).toString(),
        content,
        edit: false,
      }),
    });
    await res.json();

    const getRes = await fetch('http://localhost:3000/todo');
    const json = await getRes.json();
    setTodoList(json);
  } catch (err) {
    console.error(err);
  }
};

export const modifyData = async (method, id, setTodoList, content, edit) => {
  try {
    const patchRes = await fetch(`http://localhost:3000/todo/${id}`, {
      method,
      body: JSON.stringify({ content, edit }),
    });
    await patchRes.json();

    const getRes = await fetch(`http://localhost:3000/todo`);
    const json = await getRes.json();
    setTodoList(json);
  } catch (err) {
    console.error(err);
  }
};
