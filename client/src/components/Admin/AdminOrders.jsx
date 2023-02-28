import "./Admin.css";
import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import {
  Nav,
  Button,
  Form,
  InputGroup,
  Table,
  Pagination,
} from "react-bootstrap";

// JSON 파일 가져오기
const api = require("../../api.json"); // API 불러오기
const adminList = require("./adminList.json"); // Admin 리스트 불러오기

const AdminOrders = () => {
  // Element 제어
  let inputSearchBar = useRef(null);
  let inputUserId = useRef(null);
  let inputGuestId = useRef(null);
  let inputProductId = useRef(null);
  let inputCount = useRef(null);

  // [GET] 데이터 불러오기
  const [dataList, setDataList] = useState(null);

  const getDate = async () => {
    const response = await axios.get(api.orders_GET);
    if (response.data === "access denied /orders") {
      window.location.assign("/categories");
    } else {
      setDataList(response.data);
    }
  };

  useEffect(() => {
    getDate();
  }, []);

  // 입력칸 리셋
  const reSet = () => {
    inputSearchBar.current.value = "";
    inputUserId.current.value = "";
    inputGuestId.current.value = "";
    inputProductId.current.value = "";
    inputCount.current.value = "";
  };

  // [POST] 데이터 전송하기
  const handlePostButtonClick = async () => {
    const user_id = inputUserId.current.value;
    const guest_id = inputGuestId.current.value;
    const product_id = inputProductId.current.value;
    const c_count = inputCount.current.value;

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
          getDate(); // 리스트 새로고침
          reSet(); // 입력칸 리셋
          success = true;
        }
      })
      .catch((err) => {
        alert(err.message);
        success = true;
      })
      .catch((err) => {
        alert(err.message);
        success = true;
      });
    if (!success) alert("값을 바르게 입력해 주세요");
  };

  // [DELETE] ID로 선택된 데이터 삭제
  const handleDeleteButtonClick = async () => {
    const id = inputSearchBar.current.value;
    let success = false;
    await axios
      .delete(api.orders_DELETE + id)
      .then((response) => {
        if (response.status === 200) {
          alert("삭제되었습니다.");
          getDate(); // 리스트 새로고침
          reSet(); // 입력칸 리셋
          success = true;
        }
      })
      .catch((err) => {
        alert(err.message);
        success = true;
      });
    if (!success) alert("ID를 바르게 입력해 주세요");
  };

  // [PUT] ID로 선택된 데이터 수정
  const handlePutButtonClick = async () => {
    const id = inputSearchBar.current.value;
    const user_id = inputUserId.current.value;
    const guest_id = inputGuestId.current.value;
    const product_id = inputProductId.current.value;
    const c_count = inputCount.current.value;

    let success = false;
    await axios
      .put(api.orders_PUT + id, {
        user_id,
        guest_id,
        product_id,
        c_count,
      })
      .then((response) => {
        if (response.status === 200) {
          alert("수정되었습니다.");
          getDate(); // 리스트 새로고침
          reSet(); // 입력칸 리셋
          success = true;
        }
      })
      .catch((err) => {
        alert(err.message);
        success = true;
      });
    if (!success) alert("ID와 값을 바르게 입력해 주세요");
  };

  // 페이지 넘버 만들기
  const row = 5; // 한 페이지에 넣을 개수
  const dataListLength = dataList?.length;
  const pageNumber =
    dataListLength % row === 0
      ? parseInt(dataListLength / row) - 1
      : parseInt(dataListLength / row);
  let items = [];
  const [active, setActive] = useState(1);
  const handlePageClick = (number) => setActive(number);

  for (let number = 1; number <= pageNumber + 1; number++) {
    items.push(
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
    inputSearchBar.current.value = data._id;
    inputUserId.current.value = data.user_id;
    inputGuestId.current.value = data.guest_id;
    inputProductId.current.value = data.product_id;
    inputCount.current.value = data.c_count;
  };

  // 리스트 구현
  let setList = [];
  dataList?.forEach((data, index) => {
    if (row * (active - 1) <= index && index < row * active) {
      setList.push(
        <tr
          key={data.id}
          onClick={() => {
            setInput(data);
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
  const handleSearchButtonClick = () => {
    const user_id = inputSearchBar.current.value;
    let searchList = [];
    let success = false;
    for (let data of dataList) {
      console.log(data.user_id);
      if (user_id === "") {
        getDate();
        success = true;
        break;
      } else if (data.user_id === user_id) {
        searchList.push(data);
        success = true;
      }
    }
    if (!success) alert("일치하는 데이터가 없습니다.");
    else if (user_id !== "") setDataList(searchList);
  };

  return (
    <>
      {/* 네비게이션 바 */}
      <Nav id="nav_bar" variant="tabs" defaultActiveKey="/admin/orders">
        {adminList.map((data) => (
          <Nav.Item key={data.id}>
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
            placeholder="Users_ID"
          />
          <Button id="button" onClick={handleSearchButtonClick}>
            조회
          </Button>
          <Button id="button" onClick={handlePutButtonClick}>
            저장
          </Button>
          <Button id="button" onClick={handleDeleteButtonClick}>
            삭제
          </Button>
          <Button id="button" onClick={handlePostButtonClick}>
            추가
          </Button>
        </InputGroup>
      </div>

      {/* DB입력 부분 */}
      <div class="DB_data">
        <Form.Group className="mb-1">
          <Form.Label>Users_Id</Form.Label>
          <Form.Control ref={inputUserId} type="text" placeholder="String" />
        </Form.Group>

        <Form.Group className="mb-1">
          <Form.Label>Guest_Id</Form.Label>
          <Form.Control ref={inputGuestId} type="text" placeholder="String" />
        </Form.Group>

        <Form.Group className="mb-1">
          <Form.Label>Product_Id</Form.Label>
          <Form.Control ref={inputProductId} type="text" placeholder="String" />
        </Form.Group>

        <Form.Group className="mb-1">
          <Form.Label>Count</Form.Label>
          <Form.Control ref={inputCount} type="number" placeholder="Number" />
        </Form.Group>
      </div>

      {/* 리스트 */}
      <div>
        <Table striped bordered hover size="sm" id="setList">
          <thead>
            <tr>
              <th>ID</th>
              <th>User_Id</th>
              <th>Guest_Id</th>
              <th>Product_Id</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>{setList}</tbody>
        </Table>
        <Pagination id="page" size="sm">
          {items}
        </Pagination>
      </div>
    </>
  );
};
export default AdminOrders;
