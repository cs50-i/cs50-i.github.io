const submitButton = document.querySelector('#submit')
const API_KEY= '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'
const outPutElement=document.querySelector('#output')
const inputElement=document.querySelector('input')
const historyElement=document.querySelector('.history')
const buttonElement=document.querySelector('button ')

//Date and Time
const currentDate = new Date();

// Get the current date components
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1; // Months are zero-based, so add 1
const day = currentDate.getDate();

// Get the current time components
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();
// Display the current time

let gpt_ans="";

function changeInput(value)
{
    const inputElement=document.querySelector('input')
    inputElement.value=value
}

async function getMessage() {

    console.log('clicked')
    const options = {
        method: 'POST',
        headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json'
            },

        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: inputElement.value}],
            max_tokens:1000
        })
    }
    try {

        const response = await fetch('https://api.openai.com/v1/chat/completions', options)
        const data = await response.json()
        // gpt_ans=data.choices[0].message.content //storing gpt answer
        console.log(data) 
        outPutElement.textContent=data.choices[0].message.content   
        if(data.choices[0].message.content){
            const pElement=document.createElement('p')
            pElement.textContent=inputElement.value
            pElement.addEventListener('click',()=>changeInput(pElement.textContent))
            historyElement.append(pElement)
        } 
        } catch (error) { 
        console.error(error)
        }
}

// document.getElementById('submit').addEventListener('click', async () => {
//     const user_msg = 'user:'+ inputElement.value+'\n';
//     const gpt_msg='gpt:'+ gpt_ans
//     const fileName = 'chat.txt';

//     try {
//         const fileHandle = await window.showOpenFilePicker();
//         const writableStream = await fileHandle[0].createWritable();

//         await writableStream.write(user_msg);
//         await writableStream.write(gpt_msg);
//         await writableStream.close();

//         console.log('Data appended to the file successfully.');
//     } catch (error) {
//         console.error('Error appending data to the file:', error);
//     }
// });

function clearInput()
{
    inputElement.value=''
}


submitButton.addEventListener('click',getMessage)
buttonElement.addEventListener('click',clearInput)
