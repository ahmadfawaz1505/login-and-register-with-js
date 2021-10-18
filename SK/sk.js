function ambil() {
  var a=document.getElementById('tombol');
  a.parentElement.removeChild(a);
  // membuat form
  var form=document.createElement("form");
  var div=document.getElementsByTagName("div")[0];
  div.appendChild(form);
  // membuat element
  var p=document.createElement("P");
  p.className="tulisan_login";
  p.innerHTML="Silahkan login";
  // membuat label dan input username
  var label1=document.createElement("label");
  label1.className="label";
  label1.innerHTML="username";
  form.appendChild(label1);
  var input1=document.createElement("input");
  input1.className="form_login";
  input1.placeholder="username";
  form.appendChild(input1);
  // membuat label dan input password
  var label2=document.createElement("label");
  label2.className="label";
  label2.innerHTML="password";
  form.appendChild(label2);
  var input2=document.createElement("input");
  input2.className="form_login";
  input2.type="password";
  input2.placeholder="password";
  form.appendChild(input2);
  // membuat tombol
  var tombol=document.createElement("input");
  tombol.className="tombol_login";
  tombol.type="submit";
  form.appendChild(tombol);
}
