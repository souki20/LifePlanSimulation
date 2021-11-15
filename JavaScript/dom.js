const submitForm = () => {
  var forms = document.forms.formItem;
  const userAge2 = forms.userAge.value;
  return console.log(userAge2);
}



const getData = () => {
  var forms = document.forms.formItem;
  const userAge2 = forms.userAge.value;
  return console.log(userAge2);
  // return userAge2;
}


const display = (userAge) => {
  console.log('test');
  console.log(userAge);
}

const clickEvent = () => {
  getData();
  display();
}


const submit = document.getElementById('submit');
submit.addEventListener('click', submitForm);
submit.addEventListener('click', location.href='[graph.html]')
// submit.addEventListener('click', (e) => {
//   e.preventDefault();
  
//   let forms = document.forms.formItem;
//   userAge = forms.userAge.value;
//   // console.log(userAge);

//   // document.location.reload();
//   return userAge;
// })




// const asyncAwaitFunc = async () => {
//   submit.addEventListener('click', (e) => {
//   e.preventDefault();

//   // console.log('test');
  
//   let forms = document.forms.formItem;
//   userAge = forms.userAge.value;
//   // console.log(userAge);
//   // document.location.reload();
//   return userAge;

//   }).then((userAge) => {
//     return console.log(userAge);
//   }).catch(() => {
//     return console.log('失敗しました');
//   })
// }
// asyncAwaitFunc();


// やりたいこと
// クリックされたら変数に値を代入して
// クリックされるまではグラフを作成しない
// ページをリロードする



// const getGitUsername = async() => {
//   const message = 'GitのユーザーIDは、';
//   const url = 'https://api.github.com/users/deatiger';
//   const json = await fetch(url)

//   .then(res => {
//     console.log('非同期処理成功')
//     return res.json()
//   }).catch(error => {
//     console.log('非同期処理失敗')
//     return null;
//   })

//   const userName = json.login;
//   console.log(message + userName);
// }
// getGitUsername();


// const getname = () => {
//   const message = 'GitのユーザーIDは、';
//   const url = 'https://api.github.com/users/deatiger';
//   const json = fetch(url)

//   if(res) {
//     console.log('成功');
//     return res.json();
//   } else {
//     console.log('失敗');
//     return null;
//   }

//   const userName = json.login;
//   console.log(message + userName);
// }
// getname();