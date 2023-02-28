const api = require("../../api.json"); // API 불러오기
const getUserName = async () => {
  const username = await axios
    .get(api.users_auth_GET)
    .then((response) => response.data.username); // 쿠키 유저이름 가져오기
  if (username === "admin") return;
};
export default AdminCheck;
