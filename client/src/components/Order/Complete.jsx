import React from "react";
import "./Complete.css";

const Ordercomplete = () => {
  return (
    <>
      <div id="main_container">
        <h1>
          주문/결제가 정상적으로 <br />
          완료 되었습니다.
        </h1>
        <h2>주문번호: qwe125wrehdf</h2>
        <p>비회원의 경우, 주문번호를 꼭 메모해주세요!</p>
        <hr></hr>
        <div className="box">
          <div className="header">
            <p>주문 상품</p>
          </div>
          <div className="content">
            <p>까르베뇽 와인 외 1</p>
          </div>
        </div>
        <hr></hr>
        <div className="box">
          <div className="header">
            <p>배송지</p>
          </div>
          <div className="content">
            <p>부산시 일구 이동 삼삼아파트</p>
            <p>404동 501호</p>
          </div>
        </div>
        <hr></hr>
        <div className="box">
          <div className="header">
            <p>배송메모</p>
          </div>
          <div className="content">
            <p>배송 전에 미리 연락 바랍니다.</p>
          </div>
        </div>
        <hr></hr>
        <button
          id="button"
          type="button"
          className="button btn btn-secondary"
          style={{ backgroundColor: "#6c49b8" }}
        >
          주문 수정하기
        </button>
        <button
          type="button"
          className="button btn btn-secondary"
          style={{ backgroundColor: "#6c49b8" }}
          onClick={() => {
            window.location.href = "/categories";
          }}
        >
          메인 페이지로 돌아가기
        </button>
      </div>
    </>
  );
};

export default Ordercomplete;
