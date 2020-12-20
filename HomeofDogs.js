		    var oUname = document.getElementById("uname");
		    var oUpass = document.getElementById("upass");
		    var oError = document.getElementById("error_box");
		    var oError1 = document.getElementById("error_box1");
		    var oProgr = document.getElementById("progr");
		    var oBox = document.getElementById("box");

		    function Chinese(){
		        oError.innerHTML = "支持中文数字";
		    }
		    function Donot(){
		        if(oUname.value == ""){
		            oError.innerHTML = "用户名不能为空";
		        }else{
		            oError.innerHTML = "";
		        }
		    }
		    function Atleast(){
		        oError1.innerHTML = "建议至少使用两种字符组合";
		    }
		    function DonotYet(){
		        if(oUpass.value == ""){
		            oError1.innerHTML = "密码不能为空";
		        }
		        else{
		            oError1.innerHTML = "";
		        }
		    }
		    function prog(){
		        if(oUpass.value != "" && oUname.value != ""){
		            oBox.innerHTML = "注册成功！"+"</br>"+"用户名:" + oUname.value + "</br>" + "密码:" + oUpass.value;
		        }
		        
		    }

		    var inps = document.getElementsByTagName("input");
			var label = document.getElementsByTagName("label")[0];
			var oA = document.getElementsByTagName("a")[0];
			inps[0].onclick = function(){
				for(var i=1; i<inps.length; i++){
					inps[i].checked = inps[0].checked;
				}
				inps[0].checked?label.innerHTML = "全不选":label.innerHTML ="全选"
			}
			oA.onclick = function(){
				for(var i=1; i<inps.length; i++){
					inps[i].checked = !inps[i].checked;
				}
				isCheckAll()
			}
			for(var i=1; i<inps.length; i++){
				inps[i].onclick = function(){
					isCheckAll()
				}
			}
			function isCheckAll(){
				var flag = true;
				for(var i=1; i<inps.length; i++){
					if(inps[i].checked == false){
						flag = false;
						break;
					}
				}
				inps[0].checked = flag;
				flag?label.innerHTML = "全不选":label.innerHTML ="全选"
			}