const Root = () => {
  return (
    <>
      You can edit your package in:
      <pre>packages\clauzzia-theme\src\index.js</pre>
    </>
  );
};

export default {
  name: "clauzzia-theme",
  roots: {
    theme: Root
  },
  state: {
    theme: {}
  },
  actions: {
    theme: {}
  }
};
