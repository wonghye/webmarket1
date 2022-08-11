<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<% 
	//모든 세션을 삭제
	session.invalidate();
	
	//페이지 이동
	response.sendRedirect("./addProduct.jsp"); //로그인 페이지로 이동

%>