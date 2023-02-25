import "./Admin.css";
import { React } from "react";
import {
  Nav,
  Button,
  Form,
  InputGroup,
  Table,
  Pagination,
} from "react-bootstrap";

// JSON 가져오기
const admin_list = require("./Admin_list.json"); // Admin 리스트 불러오기

let category_list = [{ name: "Wine" }, { name: "Cheese" }];

const Admin_category = () => {
  // NAV바 만들기
  const nav_list = [];
  admin_list.forEach((data, index) => {
    nav_list.push(
      <Nav.Item key={index}>
        <Nav.Link href={data.href}>{data.name}</Nav.Link>
      </Nav.Item>
    );
  });

  // 데이터를 입력하면 입력폼에 표시하는 코드
  const show = (data) => {
    const form = document.querySelector("#categories_value");
    const searchbar = document.querySelector("#DB_searchbar");
    searchbar.value = data.name;
    form.value = data.name;
  };
  let list = [];
  // 리스트 구현
  const list_update = () => {
    list = [];
    category_list.forEach((data, index) => {
      list.push(
        <tr
          key={index}
          onClick={() => {
            show(data);
          }}
        >
          <td>{data.name}</td>
        </tr>
      );
    });
  };
  list_update();

  // 추가 기능
  const db_post = () => {
    const form = document.querySelector("#categories_value");
    const searchbar = document.querySelector("#DB_searchbar");
    let overlap = false;
    category_list.forEach((data) => {
      if (data.name === form.value) {
        overlap = true; // 중복발생
      }
    });
    if (overlap) alert("중복된 이름이 있습니다.");
    else category_list.push({ name: form.value });
    list_update();
    console.log(category_list);
  };

  // 삭제 기능
  const db_delete = () => {
    const searchbar = document.querySelector("#DB_searchbar").value;
    category_list.forEach((data, index) => {
      if (data.name === searchbar.value) {
        category_list.splice(index, 1);
      }
    });
  };

  //저장 기능
  const db_put = () => {
    const searchbar = document.querySelector("#DB_searchbar").value;
    const form = document.querySelector("#categories_value");

    let overlap = false;
    let id = -1;

    category_list.forEach((data, index) => {
      if (data.name === form.value && form.value != searchbar.value)
        overlap = true; // 중복발생
      else if (data.name === searchbar.value) {
        id = index;
      }
      if (!overlap) {
        category_list[id].name = searchbar.value;
      }
    });
  };

  // 조회 기능
  const search = () => {
    const searchbar = document.querySelector("#DB_searchbar").value;

    let success = false;
    for (let data of category_list) {
      if (data.name === searchbar.value) {
        show(data);
        success = true;
        break;
      }
    }
    if (!success) alert("일치하는 데이터가 없습니다.");
  };

  return (
    <>
      {/* 네비게이션 바 */}
      <Nav id="nav_bar" variant="tabs" defaultActiveKey="/admin/categories">
        {nav_list}
      </Nav>

      {/* products 페이지 */}

      {/* 상단바 */}
      <div class="DB_bar">
        <h2>Categories</h2>
        <InputGroup id="DB_manager" size="sm" className="mb-2">
          <Form.Control id="DB_searchbar" placeholder="ID" />
          <Button id="button" onClick={search}>
            조회
          </Button>
          <Button id="button" onClick={db_put}>
            저장
          </Button>
          <Button id="button" onClick={db_delete}>
            삭제
          </Button>
          <Button id="button" onClick={db_post}>
            추가
          </Button>
        </InputGroup>
      </div>

      {/* DB입력 부분 */}
      <div class="DB_data">
        <Form.Group className="mb-1">
          <Form.Label>Name</Form.Label>
          <Form.Control
            id="categories_value"
            type="text"
            placeholder="String"
          />
        </Form.Group>
      </div>

      {/* 리스트 */}
      <div>
        <Table striped bordered hover size="sm" id="DB_list">
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>{list}</tbody>
        </Table>
      </div>
    </>
  );
};
export default Admin_category;
