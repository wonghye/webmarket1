function checkAddProduct(){
		// name 속성을 사용한 유효성 검사
		//let productId = form.productId.value;
		
		//id 선택자를 이용하여 유효성 검사
		let productId = document.getElementById("productId");
		let pname = document.getElementById("pname");
		let unitPrice = document.getElementById("unitPrice");
		let unitsInStock = document.getElementById("unitsInStock");
		
		//정규 표현식 사용
		let regExpId = /^P[0-9]{4,11}/ 
		
		//상품 아이디 체크 -P와 숫자를 조합하여 5~12자까지 입력하세요.
		if(!regExpId.test(productId.value)){
			alert("[상품 코드]\nP와 숫자를 조합하여 5~12자까지 입력하세요!\n첫글자 반드시 대문자로 써주세요!");
			productId.focus();
			productId.select();
			return false;
		}
		if(pname.value.length < 4 || pname.value.length > 12){
			//상품명 체크 - 최소 4~12자까지 입력
			alert("[상품명]\n최소 4~12자까지 입력하세요!");
			pname.focus();
			pname.select();
			return false;
		}
		if(unitPrice.value.length == 0 || isNaN(unitPrice.value)){
			//상품 가격 체크 - 숫자만 입력 , 음수 입력할수 없습니다.
			alert("[가격]\n숫자만 입력하세요!");
			unitPrice.focus();
			unitPrice.select();
			return false;
		}
		if(unitPrice.value < 0){
			alert("[가격]\n음수는 입력 할 수 없습니다!");
			unitPrice.select();
			return false;
		}
		if(unitsInStock.value.length == 0 || isNaN(unitsInStock.value)){
			//재고수 체크 - 숫자만 입력, 음수 입력할수 없습니다.
			alert("[재고 수]\n숫자만 입력하세요!");
			unitsInStock.focus();
			unitsInStock.select();
			return false;
		}
		if(unitsInStock.value < 0){
			alert("[재고 수]\n음수는 입력 할 수 없습니다!");
			unitsInStock.select();
			return false;
		}
		document.newProduct.submit();  // 폼을 전송
	}