const POPUP = document.getElementById('popup')

const btnModal = document.createElement('button')
POPUP.append(btnModal)
const btnModal2 = document.createElement('button')
POPUP.append(btnModal2)
const btnModal3 = document.createElement('button')
POPUP.append(btnModal3)

btnModal.textContent = 'Show modal 1'
btnModal.style.cssText = `
font-size: 20px;
padding: 10px 30px;
margin: 10px 30px 0 0;
border-radius: 30px;
border: white;
cursor: pointer;
background-color: white;
`
btnModal.addEventListener('mouseover', () => {
    btnModal.style.borderColor = 'blue';
})

btnModal.addEventListener('mouseout', () => {
    btnModal.style.backgroundColor = 'white';
})

const modal = document.createElement('div')
modal.style.cssText = `
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
backdrop-filter: blur(2px);
display: flex;
justify-content: center;
align-items: center;
`


// btnModal.addEventListener('click', () => {
//     console.log('clicked');
// })



const modalWindow = document.createElement('div')

modalWindow.innerHTML = `
<h1>I'm modal window 😍</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero tempore dolore repellat! Dicta, consectetur dolorum doloribus magni soluta culpa, consequatur dolore iure facilis eaque commodi ea laborum incidunt adipisci excepturi cumque, quasi neque nemo. Praesentium veniam, excepturi distinctio laborum saepe aut unde. Velit nemo quod repellat porro ab assumenda, tempore aspernatu.</p>`

modalWindow.style.cssText = `
padding: 10px 20px 30px;
width: 1050px;
height: 150px;
background-color: white;
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
`

modal.append(modalWindow);

btnModal.addEventListener('click', () => {
    POPUP.append(modal)
    console.log('clicked');
})


btnModal2.textContent = 'Show modal 2'
btnModal2.style.cssText = `
font-size: 20px;
padding: 10px 30px;
margin: 10px 30px 0 0;
border-radius: 30px;
border: none;
cursor: pointer;
background-color: white;
`
btnModal2.addEventListener('mouseover', () => {
    btnModal2.style.borderColor = 'blue';
})

btnModal2.addEventListener('mouseout', () => {
    btnModal2.style.backgroundColor = 'white';
})

btnModal3.textContent = 'Show modal 3'
btnModal3.style.cssText = `
font-size: 20px;
padding: 10px 30px;
margin: 10px 30px 0 0;
border-radius: 30px;
border: none;
cursor: pointer;
background-color: white;
`
btnModal3.addEventListener('mouseover', () => {
    btnModal3.style.borderColor = 'blue';
})

btnModal3.addEventListener('mouseout', () => {
    btnModal3.style.backgroundColor = 'white';
})

const closeWindow = document.createElement('button');
closeWindow.textContent="X";
closeWindow.style.cssText=`
cursor: pointer;
transform: translate(998px, -108px);
background-color: red;
font-size: 20px;
width: 33px;
height: 23px;
`
closeWindow.addEventListener('click', ()=>{
    modal.remove(modal);
})

modalWindow.append(closeWindow);

closeWindow.addEventListener('click', (event) => {
    // console.log(event);
    // modal.remove();
    ROOT.removeChild(modal)

})

modal.addEventListener('click' , (event) => {
    if(event.targer !== modalWindow)
    modal.remove()
})

POPUP.show(modal);
POPUP.append(modal);