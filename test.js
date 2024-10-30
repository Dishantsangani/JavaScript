async function dev() {
  let result = await fetch("https://jsonplaceholder.typicode.com/posts");
  console.log(await result.json());
}
dev();
