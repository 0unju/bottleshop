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

// JSON 가져오기
const api = require("../../API.json"); // API 불러오기
const admin_list = require("./Admin_list.json"); // Admin 리스트 불러오기
const category_list = require("../../Category_list.json"); // Category 리스트 불러오기

const Admin_products = () => {
  // Element 제어
  const input_name = useRef(null);
  const input_type = useRef(null);
  const input_price = useRef(null);
  const input_description = useRef(null);
  const input_wine_type = useRef(null);
  const input_origin = useRef(null);
  const input_abv = useRef(null);
  const input_image_path = useRef(null);
  const input_search = useRef(null);

  // [GET] 데이터 불러오기
  const [dataList, setDataList] = useState(null);

  const fetchData = async () => {
    const response = await axios.get(api.products_GET);
    setDataList(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // 입력칸 리셋
  const reset = () => {
    input_search.value = "";
    input_name.current.value = "";
    input_type.current.value = "null";
    input_price.current.value = "";
    input_description.current.value = "";
    input_wine_type.current.value = "null";
    input_origin.current.value = "";
    input_abv.current.value = "";
    input_image_path.current.value = "";
  };

  // [POST] 데이터 전송하기
  const db_post = async () => {
    const name = input_name.current.value;
    const type = input_type.current.value;
    const price = input_price.current.value;
    const description = input_description.current.value;
    const wine_type = input_wine_type.current.value;
    const origin = input_origin.current.value;
    const abv = input_abv.current.value;
    const image_path = input_image_path.current.value;

    // 이름 중복 방지
    let overlap = false;
    for (let data of dataList) {
      if (data.name === name) {
        alert("이름이 중복됩니다");
        overlap = true;
      }
    }
    if (!overlap) {
      let success = false;
      await axios
        .post(api.products_POST, {
          name,
          type,
          price,
          description,
          wine_type,
          origin,
          abv,
          image_path,
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
    const searchbar_value = input_search.value;
    let success = false;
    await axios
      .delete(api.products_DELETE + searchbar_value)
      .then((response) => {
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
    const searchbar_value = input_search.value;
    const name = input_name.value;
    const type = input_type.value;
    const price = input_price.value;
    const description = input_description.value;
    const wine_type = input_wine_type.value;
    const origin = input_origin.value;
    const abv = input_abv.value;
    const image_path = input_image_path.value;

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
        .put(api.products_PUT + searchbar_value, {
          name,
          type,
          price,
          description,
          wine_type,
          origin,
          abv,
          image_path,
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

  // Category List 만들기
  const category_form_list = [];
  category_list.forEach((data) => {
    category_form_list.push(<option value={data.name}>{data.name}</option>);
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
    input_search.current.value = data._id;
    input_name.current.value = data.name;
    input_type.current.value = data.type;
    input_price.current.value = data.price;
    input_description.current.value = data.description;
    input_wine_type.current.value = data.wine_type;
    input_origin.current.value = data.origin;
    input_abv.current.value = data.abv;
    input_image_path.current.value = data.image_path;
  };

  // 리스트 구현
  let list = [];
  dataList?.forEach((data, index) => {
    if (5 * (active - 1) <= index && index < 5 * active) {
      list.push(
        <tr
          key={index}
          onClick={() => {
            show(data);
          }}
        >
          <td>{data._id}</td>
          <td>{data.name}</td>
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
      <Nav id="nav_bar" variant="tabs" defaultActiveKey="/admin/products">
        {admin_list.map((data) => (
          <Nav.Item key={data.name}>
            <Nav.Link href={data.href}>{data.name}</Nav.Link>
          </Nav.Item>
        ))}
      </Nav>

      {/* products 페이지 */}

      {/* 상단바 */}
      <div class="DB_bar">
        <h2>Products</h2>
        <InputGroup id="DB_manager" size="sm">
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
          <Form.Label>Name</Form.Label>
          <Form.Control ref={input_name} type="text" placeholder="String" />
        </Form.Group>

        <Form.Group className="mb-1">
          <Form.Label>Type</Form.Label>
          <Form.Select ref={input_type}>
            <option></option>
            <option value="Wine">Wine</option>
            <option value="Cheese">Cheese</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-1">
          <Form.Label>Price</Form.Label>
          <Form.Control ref={input_price} type="text" placeholder="Number" />
        </Form.Group>

        <Form.Group className="mb-1">
          <Form.Label>Description</Form.Label>
          <Form.Control
            ref={input_description}
            type="text"
            placeholder="String"
          />
        </Form.Group>

        <Form.Group className="mb-1">
          <Form.Label>Wine_type</Form.Label>
          <Form.Select ref={input_wine_type}>
            <option></option>
            <option value="Red_Wine">Red</option>
            <option value="White_Wine">White</option>
            <option value="Sparkling">Sparkling</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-1">
          <Form.Label>Origin</Form.Label>
          <Form.Control ref={input_origin} type="text" placeholder="String" />
        </Form.Group>

        <Form.Group className="mb-1">
          <Form.Label>Abv</Form.Label>
          <Form.Control ref={input_abv} type="text" placeholder="Number" />
        </Form.Group>

        <Form.Group className="mb-1">
          <Form.Label>Image_path</Form.Label>
          <Form.Control
            ref={input_image_path}
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
              <th>ID</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>{list}</tbody>
        </Table>
        <Pagination id="page" size="sm">
          {items}
        </Pagination>
      </div>
    </>
  );
};
export default Admin_products;
