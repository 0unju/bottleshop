import "./Admin.css";
import axios from "axios";
import { React, useEffect, useState } from "react";
import {
  Nav,
  Button,
  Form,
  InputGroup,
  Table,
  Pagination,
} from "react-bootstrap";

// JSON 파일 가져오기
const api = require("../../API.json"); // API 불러오기
const admin_list = require("./Admin_list.json"); // Admin 리스트 불러오기

const Admin_orders = () => {
  // [GET] 데이터 불러오기

  const [dataList, setDataList] = useState(null);

  const fetchData = async () => {
    const response = await axios.get(api.orders_GET);
    setDataList(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // 입력칸 리셋
  const reset = () => {
    const form = document.querySelectorAll(".DB_data > .mb-1");
    document.querySelector("#DB_searchbar").value = "";
    form[0].lastChild.value = "";
    form[1].lastChild.value = "";
    form[2].lastChild.value = "";
    form[3].lastChild.value = "";
  };

  // [POST] 데이터 전송하기
  const db_post = async () => {
    const form = document.querySelectorAll(".DB_data > .mb-1");
    const user_id = form[0].lastChild.value;
    const guest_id = form[1].lastChild.value;
    const product_id = form[2].lastChild.value;
    const c_count = form[3].lastChild.value;

    let success = false;
    await axios
      .post(api.orders_POST, {
        user_id,
        guest_id,
        product_id,
        c_count,
      })
      .then((response) => {
        if (response.status === 200) {
          alert("추가되었습니다.");
          fetchData(); // 리스트 새로고침
          reset(); // 입력칸 리셋
          success = true;
        }
      });
    if (!success) alert("값을 바르게 입력해 주세요");
  };

  // [DELETE] ID로 선택된 데이터 삭제
  const db_delete = async () => {
    const searchbar_value = document.querySelector("#DB_searchbar").value;
    let success = false;
    await axios.delete(api.orders_DELETE + searchbar_value).then((response) => {
      if (response.status === 200) {
        alert("삭제되었습니다.");
        fetchData(); // 리스트 새로고침
        reset(); // 입력칸 리셋
        success = true;
      }
    });
    if (!success) alert("ID를 바르게 입력해 주세요");
  };

  // [PUT] ID로 선택된 데이터 수정
  const db_put = async () => {
    const form = document.querySelectorAll(".DB_data > .mb-1");
    const searchbar_value = document.querySelector("#DB_searchbar").value;
    const user_id = form[0].lastChild.value;
    const guest_id = form[1].lastChild.value;
    const product_id = form[2].lastChild.value;
    const c_count = form[3].lastChild.value;

    let success = false;
    await axios
      .put(api.orders_PUT + searchbar_value, {
        user_id,
        guest_id,
        product_id,
        c_count,
      })
      .then((response) => {
        if (response.status === 200) {
          alert("수정되었습니다.");
          fetchData(); // 리스트 새로고침
          reset(); // 입력칸 리셋
          success = true;
        }
      });
    if (!success) alert("ID와 값을 바르게 입력해 주세요");
  };

  // NAV바 만들기
  const nav_list = [];
  admin_list.forEach((data, index) => {
    nav_list.push(
      <Nav.Item key={index}>
        <Nav.Link href={data.href}>{data.name}</Nav.Link>
      </Nav.Item>
    );
  });

  // 페이지 넘버 만들기
  const dataList_length = dataList?.length;
  const page_number =
    dataList_length % 5 === 0
      ? parseInt(dataList_length / 5) - 1
      : parseInt(dataList_length / 5);
  let items = [];
  const [active, setActive] = useState(1);
  const page_onClick = (number) => setActive(number);

  for (let number = 1; number <= page_number + 1; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => {
          page_onClick(number);
        }}
      >
        {number}
      </Pagination.Item>
    );
  }

  // 데이터를 입력하면 입력폼에 표시하는 코드
  const show = (data) => {
    const form = document.querySelectorAll(".DB_data > .mb-1");
    const searchbar = document.querySelector("#DB_searchbar");
    searchbar.value = data._id;
    form[0].lastChild.value = data.user_id;
    form[1].lastChild.value = data.guest_id;
    form[2].lastChild.value = data.product_id;
    form[3].lastChild.value = data.c_count;
  };

  // 리스트 구현
  let db_list = [];
  dataList?.forEach((data, index) => {
    if (5 * (active - 1) <= index && index < 5 * active) {
      db_list.push(
        <tr
          key={index}
          onClick={() => {
            show(data);
          }}
        >
          <td>{data._id}</td>
          <td>{data.user_id}</td>
          <td>{data.guest_id}</td>
          <td>{data.product_id}</td>
          <td>{data.c_count}</td>
        </tr>
      );
    }
  });

  // 조회 기능
  const search = () => {
    const searchbar_value = document.querySelector("#DB_searchbar").value;
    let search_list = [];
    let success = false;
    for (let data of dataList) {
      if (searchbar_value === "") {
        fetchData();
        success = true;
        break;
      } else if (data.user_id === searchbar_value) {
        search_list.push(data);
        success = true;
      }
    }
    if (!success) alert("일치하는 데이터가 없습니다.");
    else if (searchbar_value != "1") setDataList(search_list);
  };

  return (
    <>
      {/* 네비게이션 바 */}
      <Nav id="nav_bar" variant="tabs" defaultActiveKey="/admin/orders">
        {nav_list}
      </Nav>

      {/* orders 페이지 */}

      {/* 상단바 */}
      <div class="DB_bar">
        <h2>Orders</h2>
        <InputGroup id="DB_manager" size="sm" className="mb-2">
          <Form.Control id="DB_searchbar" placeholder="Users_ID" />
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
          <Form.Label>Users_Id</Form.Label>
          <Form.Control type="text" placeholder="String" />
        </Form.Group>

        <Form.Group className="mb-1">
          <Form.Label>Guest_Id</Form.Label>
          <Form.Control type="text" placeholder="String" />
        </Form.Group>

        <Form.Group className="mb-1">
          <Form.Label>Product_Id</Form.Label>
          <Form.Control type="text" placeholder="String" />
        </Form.Group>

        <Form.Group className="mb-1">
          <Form.Label>Count</Form.Label>
          <Form.Control type="number" placeholder="Number" />
        </Form.Group>
      </div>

      {/* 리스트 */}
      <div>
        <Table striped bordered hover size="sm" id="DB_list">
          <thead>
            <tr>
              <th>ID</th>
              <th>User_Id</th>
              <th>Guest_Id</th>
              <th>Product_Id</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>{db_list}</tbody>
        </Table>
        <Pagination id="page" size="sm">
          {items}
        </Pagination>
      </div>
    </>
  );
};
export default Admin_orders;
