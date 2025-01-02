document.querySelector('#send-btn').addEventListener('click', function () {
  sendMessage();
});

document.querySelector('#user-input').addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    sendMessage();
  }
});

async function sendMessage() {
  let userInput = document.getElementById('user-input').value;
  if (!userInput) return;

  addMessage('user', userInput);
  document.getElementById('user-input').value = '';

  try {
    const response = await fetch('http://127.0.0.1:8081/template', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ prompt: userInput }),
    });

    if (response.ok) {
      const responseText = await response.text();
      addMessage('bot', responseText);
    } else {
      addMessage('bot', 'Error: Unable to communicate with the API.');
      console.error('Error response:', response.status);
    }
  } catch (error) {
    addMessage('bot', 'Error: Unable to communicate with the AI.');
    console.error('Error:', error);
  }
}

function addMessage(sender, message) {
  let outputDiv = document.getElementById('output');
  let messageDiv = document.createElement('div');
  messageDiv.classList.add(sender);
  messageDiv.innerHTML = message;
  outputDiv.appendChild(messageDiv);
  messageDiv.scrollIntoView({ behavior: 'smooth', block: 'end' });
}

function formatReply(reply) {
  return reply.replace(/\n/g, '<br>');
}

function addIntroMessage() {
  const introMessage = `
    <p>Hi, I'm Need2Connect, your AI Assistant built with MuleChain on the MuleSoft Anypoint Platform.</p>
    <br>
    <p>Here's how I can help you:</p>
    <ul>
      <li>- Recommend the best <b>MuleSoft connectors</b> for your needs.</li>
      <li>- Simplify your integration process with <b>expert guidance</b>.</li>
      <li>- Offer <b>insights</b> on connector applications.</li>
    </ul>
  `;
  addMessage('bot', introMessage);
}

document.addEventListener('DOMContentLoaded', function() {
  addIntroMessage();
});