import React, { useEffect, useState, useRef } from "react";
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
const api = require("../../api.json"); // API 불러오기
const adminList = require("./adminList.json"); // Admin 리스트 불러오기
const domainList = require("../../domainList.json"); // Domain 리스트 불러오기
const adminPermission = require("./adminPermission.js");

const AdminOrders = () => {
  adminPermission.default();
  axios.defaults.withCredentials = true; // withCredentials 전역 설정

  // Element 제어
  let inputSearchBar = useRef(null);
  let inputUserId = useRef(null);
  let inputProductId = useRef(null);
  let inputGuestId = useRef(null);
  let inputCount = useRef(null);

  // [GET] 데이터 불러오기
  const [dataList, setDataList] = useState(null);

  const getDate = async () => {
    const response = await axios.get(api.orders_GET);
    setDataList(response.data);
  };

  useEffect(() => {
    getDate();
  }, []);

  // 입력칸 리셋
  const reSet = () => {
    inputSearchBar.current.value = "";
    inputUserId.current.value = "";
    inputProductId.current.value = "";
    inputGuestId.current.value = "";
    inputCount.current.value = "";
  };

  // [DELETE] ID로 선택된 데이터 삭제
  const handleDeleteButtonClick = async () => {
    const id = inputSearchBar.current.value;

    await axios
      .delete(api.orders_DELETE + id)
      .then((response) => {
        if (response.status === 200) {
          alert(response.data);
          getDate(); // 리스트 새로고침
          reSet(); // 입력칸 리셋
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  // Domain List 만들기
  const domainSelect = [];
  domainList.forEach((data) => {
    domainSelect.push(
      <option key={data.name} value={data.name}>
        {data.name}
      </option>
    );
  });

  // 페이지 넘버 만들기
  const row = 5; // 한 페이지에 넣을 개수
  const dataListLength = dataList?.length;
  const pageNumber =
    dataListLength % row === 0
      ? parseInt(dataListLength / row) - 1
      : parseInt(dataListLength / row);
  let setPageNumber = [];
  const [active, setActive] = useState(1);
  const handlePageClick = (number) => setActive(number);

  for (let number = 1; number <= pageNumber + 1; number++) {
    setPageNumber.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => {
          handlePageClick(number);
        }}
      >
        {number}
      </Pagination.Item>
    );
  }

  // 데이터를 입력하면 입력폼에 표시하는 코드
  const setInput = (data) => {
    // inputUserName.current.value = data.username;
    // inputDomain.current.value = data.domain;
    // inputPassword.current.value = data.password;
    // inputName.current.value = data.name;
    // inputPhone.current.value = data.phone;
    // inputBirthday.current.value = data.birthday;
    // inputAuthEmail.current.value = data.auth_email;
  };

  // 리스트 구현
  let setList = [];
  dataList?.forEach((data, index) => {
    if (row * (active - 1) <= index && index < row * active) {
      setList.push(
        <tr
          key={data._id}
          onClick={() => {
            setInput(data);
          }}
        >
          <td>{data._id}</td>
          <td>{data.username}</td>
        </tr>
      );
    }
  });

  // 조회 기능
  const handleSearchButtonClick = () => {
    const searchValue = inputSearchBar.current.value;
    let success = false;

    for (let data of dataList) {
      if (data.username === searchValue) {
        setInput(data);
        success = true;
        break;
      }
    }
    if (!success) alert("일치하는 데이터가 없습니다.");
  };

  return (
    <>
      {/* 네비게이션 바 */}
      <Nav id="nav_bar" variant="tabs" defaultActiveKey="/admin/orders">
        {adminList.map((data) => (
          <Nav.Item key={data.name}>
            <Nav.Link href={data.href}>{data.name}</Nav.Link>
          </Nav.Item>
        ))}
      </Nav>

      {/* 상단바 */}
      <div class="DB_bar">
        <h2>Orders</h2>
        <InputGroup id="DB_manager" size="sm" className="mb-2">
          <Form.Control
            ref={inputSearchBar}
            id="DB_searchbar"
            placeholder="ID"
          />
          <Button id="button" onClick={handleSearchButtonClick}>
            조회
          </Button>
          <Button id="button" onClick={handleDeleteButtonClick}>
            삭제
          </Button>
        </InputGroup>
      </div>

      {/* DB입력 부분 */}
      <div class="DB_data">
        <Form.Group className="mb-1">
          <Form.Label>User_Id</Form.Label>
          <Form.Control ref={inputUserId} type="text" placeholder="String" />
        </Form.Group>

        <Form.Group className="mb-1">
          <Form.Label>Product_id</Form.Label>
          <Form.Control ref={inputProductId} type="text" placeholder="String" />
        </Form.Group>

        <Form.Group className="mb-1">
          <Form.Label>Guest_Id</Form.Label>
          <Form.Control ref={inputGuestId} type="text" placeholder="String" />
        </Form.Group>

        <Form.Group className="mb-1">
          <Form.Label>Count</Form.Label>
          <Form.Control ref={inputCount} type="text" placeholder="String" />
        </Form.Group>
      </div>

      {/* 리스트 */}
      <div>
        <Table striped bordered hover size="sm" id="DB_list">
          <thead>
            <tr>
              <th>ID</th>
              <th>User_Name</th>
              <th>Guest_Name</th>
            </tr>
          </thead>
          <tbody>{setList}</tbody>
        </Table>
        <Pagination id="page" size="sm">
          {setPageNumber}
        </Pagination>
      </div>
    </>
  );
};
export default AdminOrders;
