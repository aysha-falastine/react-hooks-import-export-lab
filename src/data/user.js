const username = "Liza";
const city = "New York";

const image = "https://i.imgur.com/mV8PQxj.gif";

// export all three variables as named exports
function getUser() {
  return {
    username,
    city,
    image
  };
}
export { username, city, image };
