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
const adminPermission = require("./adminPermission.js");

const AdminOrders = () => {
  adminPermission.default();
  // Element 제어
  let inputSearchBar = useRef(null);
  let inputUserId = useRef(null);
  let inputGuestId = useRef(null);
  let inputProductId = useRef(null);
  let inputStatus = useRef(null);

  // [GET] 데이터 불러오기
  const [dataList, setDataList] = useState(null);

  const getDate = async () => {
    const response = await axios.get(api.orders_GET);
    setDataList(response.data);
    console.log(response.data);
    console.log(response.data[9].product_id);
    console.log(response.data[9].count);
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
    inputStatus.current.value = "";
  };

  // [POST] 데이터 전송하기
  // const handlePostButtonClick = async () => {
  //   const user_id = inputUserId.current.value;
  //   const guest_id = inputGuestId.current.value;
  //   const product_id = inputProductId.current.value;
  //   const count = inputStatus.current.value;

  //
  //   await axios
  //     .post(api.orders_POST, {
  //       user_id,
  //       guest_id,
  //       product_id,
  //       count,
  //     })
  //     .then((response) => {
  //       if (response.status === 200) {
  //         alert(response.data);
  //         getDate(); // 리스트 새로고침
  //         reSet(); // 입력칸 리셋
  //
  //       }
  //     })
  //     .catch((err) => {
  //       alert(err.message);
  //
  //     })
  //     .catch((err) => {
  //       alert(err.message);
  //
  //     });
  //   if (!success) alert("값을 바르게 입력해 주세요");
  // };

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

  // [PUT] ID로 선택된 데이터 수정
  const handlePutButtonClick = async () => {
    const id = inputSearchBar.current.value;
    const status = inputStatus.current.value;

    await axios
      .put(api.orders_PUT + id, {
        status,
      })
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

  const [countList, setCountList] = useState([]);
  // let countList=[];
  // 데이터를 입력하면 입력폼에 표시하는 코드
  const setInput = (data) => {
    inputSearchBar.current.value = data._id;
    inputUserId.current.value = data.user_id;
    inputGuestId.current.value = data.guest_id;
    inputProductId.current.value = data.product_id;

    // Count 리스트 구현
    setCountList([]);
    data.product_id.forEach((id) => {
      console.log("id=" + id);
      setCountList(
        <>
          {countList[0]}
          <tr key={id}>
            <td>{id}</td>
            <td>{data.count[id]}</td>
          </tr>
        </>
      );
    });
    // data.product_id.forEach((id) => {
    //   countList.push(
    //     <tr key={id}>
    //       <td>{id}</td>
    //       <td>{data.count[id]}</td>
    //     </tr>
    //   );
    // });
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
          {/* <td>{data.count}</td> */}
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
      if (user_id === "") {
        getDate();
        success = true;
        break;
      } else if (data.user_id === user_id) {
        searchList.push(data);
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
          {/* <Button id="button" onClick={handlePostButtonClick}>
            추가
          </Button> */}
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
          <Form.Label>Status</Form.Label>
          <Form.Select ref={inputStatus}>
            <option></option>
            <option value="배송전">배송전</option>
            <option value="배송중">배송중</option>
            <option value="배송완료">배송완료</option>
          </Form.Select>
        </Form.Group>
      </div>

      {/* count 리스트 */}
      <div>
        <Table striped bordered hover size="sm" id="DB_countlist">
          <thead>
            <tr>
              <th>Product_Id</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>{countList}</tbody>
        </Table>
      </div>

      {/* 리스트 */}
      <div>
        <Table striped bordered hover size="sm" id="DB_list">
          <thead>
            <tr>
              <th>Orders_Id</th>
              <th>User_Id</th>
              <th>Guest_Id</th>
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
