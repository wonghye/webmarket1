<%@ page import="vo.Product"%>
<%@ page import="dao.ProductRepository"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	request.setCharacterEncoding("utf-8"); //한글 인코딩
	
	//폼의 자료 수집(가져옴)
	String productId = request.getParameter("productId");
	String pname = request.getParameter("pname");
	String unitPrice = request.getParameter("unitPrice");
	String description = request.getParameter("description");
	String manufacturer = request.getParameter("manufacturer");
	String category = request.getParameter("category");
	String unitsInStock = request.getParameter("unitsInStock");
	String condition = request.getParameter("condition");

	//숫자 자료형 변환
	int price;
	if(unitPrice.isEmpty()){
		price = 0;
	}else{
		price = Integer.valueOf(unitPrice);
	}
	
	long stock;
	if(unitsInStock.isEmpty()){
		stock = 0;
	}else{
		stock = Long.valueOf(unitsInStock);
	}
	
	//dao 상품 추가
	ProductRepository dao = ProductRepository.getInstance();
	Product product = new Product(); //기본 생성자로 객체 생성
	
	product.setProductId(productId);
	product.setPname(pname);
	product.setUnitPrice(price);  //변수 이름 확인
	product.setDescription(description);
	product.setManufacturer(manufacturer);
	product.setCategory(category);
	product.setUnitsInStock(stock); //변수 이름 확인
	product.setCondition(condition);
	
	dao.addProduct(product);
	
	//페이지 이동
	response.sendRedirect("./products.jsp");
	
%>