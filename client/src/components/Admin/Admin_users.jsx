import { React, useEffect, useState, useRef } from "react";
import "./Admin.css";
import axios from "axios";

import {
  Nav,
  Button,
  Form,
  InputGroup,
  Table,
  Pagination,
} from "react-bootstrap";

// json 연결
const api = require("../../API.json"); // API 불러오기
const admin_list = require("./Admin_list.json"); // Admin 리스트 불러오기
const domain_list = require("../../Domain_list.json"); // Domain 리스트 불러오기

const Admin_users = () => {
  // Element 제어
  const input_search = useRef(null);
  const input_username = useRef(null);
  const input_domain = useRef(null);
  const input_password = useRef(null);
  const input_name = useRef(null);
  const input_phone = useRef(null);
  const input_birthday = useRef(null);
  const input_auth_email = useRef(null);

  // [GET] 데이터 불러오기
  const [dataList, setDataList] = useState(null);

  const fetchData = async () => {
    const response = await axios.get(api.users_GET);
    setDataList(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // 입력칸 리셋
  const reset = () => {
    input_search = "";
    input_username.current.value = "";
    input_domain.current.value = "null";
    input_password.current.value = "";
    input_name.current.value = "";
    input_phone.current.value = "";
    input_birthday.current.value = "";
    input_auth_email.current.value = "";
  };

  // [POST] 데이터 전송하기
  const db_post = async () => {
    const username = input_username.current.value;
    const domain = input_domain.current.value;
    const password = input_password.current.value;
    const name = input_name.current.value;
    const phone = input_phone.current.value;
    const birthday = input_birthday.current.value;

    console.log(username);
    console.log(domain);
    console.log(password);
    console.log(name);
    console.log(phone);
    console.log(birthday);

    // 이름 중복 방지
    let overlap = false;
    for (let data of dataList) {
      if (data.username === username) {
        alert("이름이 중복됩니다");
        overlap = true;
      }
    }

    if (!overlap) {
      let success = false;
      await axios
        .post(api.users_POST, {
          username,
          domain,
          password,
          name,
          phone,
          birthday,
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
    }
  };

  // [DELETE] ID로 선택된 데이터 삭제
  const db_delete = async () => {
    const searchbar_value = input_search.current.value;
    let success = false;
    await axios.delete(api.users_DELETE + searchbar_value).then((response) => {
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
    const searchbar_value = input_search.current.value;
    const username = input_username.current.value;
    const domain = input_domain.current.value;
    const password = input_password.current.value;
    const name = input_name.current.value;
    const phone = input_phone.current.value;
    const birthday = input_birthday.current.value.replace("T00:00:00.000Z", "");
    const auth_email = input_auth_email.current.value;

    // 이름 중복 방지
    let overlap = false;
    for (let data of dataList) {
      if (data._id != searchbar_value) {
        // 수정전 이름과 다를경우
        if (data.name === name) {
          // 중복체크
          alert("이름이 중복됩니다");
          overlap = true;
        }
      }
    }

    if (!overlap) {
      let success = false;
      await axios
        .put(api.users_PUT + searchbar_value, {
          username,
          domain,
          password,
          name,
          phone,
          birthday,
          auth_email,
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
    }
  };

  // Domain List 만들기
  const domain_form_list = [];
  domain_list.forEach((data, index) => {
    domain_form_list.push(
      <option key={index} value={data.name}>
        {data.name}
      </option>
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
    console.log(data.birthday.replace("T00:00:00.000Z", ""));
    input_search.current.value = data._id;
    input_username.current.value = data.username;
    input_domain.current.value = data.domain;
    input_password.current.value = data.password;
    input_name.current.value = data.name;
    input_phone.current.value = data.phone;
    input_birthday.current.value = data.birthday;
    input_auth_email.current.value = data.auth_email;
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
          <td>{data.username}</td>
        </tr>
      );
    }
  });

  // 조회 기능
  const search = () => {
    const searchbar_value = input_search.value;

    let success = false;
    for (let data of dataList) {
      if (data._id === searchbar_value) {
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
      <Nav id="nav_bar" variant="tabs" defaultActiveKey="/admin/users">
        {admin_list.map((data) => (
          <Nav.Item key={data.name}>
            <Nav.Link href={data.href}>{data.name}</Nav.Link>
          </Nav.Item>
        ))}
      </Nav>

      {/* users 페이지 */}

      {/* 상단바 */}
      <div class="DB_bar">
        <h2>Users</h2>
        <InputGroup id="DB_manager" size="sm" className="mb-2">
          <Form.Control ref={input_search} id="DB_searchbar" placeholder="ID" />
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
          <Form.Label>User_Name</Form.Label>
          <Form.Control ref={input_username} type="text" placeholder="String" />
        </Form.Group>

        <Form.Group className="mb-1">
          <Form.Label>Domain</Form.Label>
          <Form.Select ref={input_domain}>
            <option></option>
            {domain_form_list}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-1">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={input_password} type="text" placeholder="String" />
        </Form.Group>

        <Form.Group className="mb-1">
          <Form.Label>Name</Form.Label>
          <Form.Control ref={input_name} type="text" placeholder="String" />
        </Form.Group>

        <Form.Group className="mb-1">
          <Form.Label>Phone</Form.Label>
          <Form.Control ref={input_phone} type="phone" placeholder="Number" />
        </Form.Group>

        <Form.Group className="mb-1">
          <Form.Label>Birthday</Form.Label>
          <Form.Control ref={input_birthday} type="date" />
        </Form.Group>

        <Form.Group className="mb-1">
          <Form.Label>Auth_email</Form.Label>
          <Form.Control
            ref={input_auth_email}
            type="boolean"
            placeholder="Boolean"
          />
        </Form.Group>
      </div>

      {/* 리스트 */}
      <div>
        <Table striped bordered hover size="sm" id="DB_list">
          <thead>
            <tr>
              <th>ID</th>
              <th>User_Name</th>
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
export default Admin_users;
