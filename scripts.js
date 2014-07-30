$.getJSON( "data.json", function( data ) {
	var messagesList = data.messages;
	count = 0
	while (count<messagesList.length){
		var body = document.getElementsByTagName("body")[0];
		var messages = document.createElement('div');
		messages.setAttribute("class", "messages");
		var message = document.createElement('div');
		message.setAttribute("class", "message");
		
		var mainBody = document.createElement('div');
		mainBody.setAttribute("class", "mainBody");
		var messageFrom = document.createElement('div');
		messageFrom.setAttribute("class", "messageFrom");
		var messageText = document.createElement('div');
		messageText.setAttribute("class", "messageText");
		mainBody.appendChild(messageFrom);
		mainBody.appendChild(messageText);

		var gravatarImage = document.createElement('img');
		gravatarImage.setAttribute("class", "gravatarImage");
		
		messageFrom.innerHTML=messagesList[count].from;
		gravatarImage.src=messagesList[count].gravatar_url;
		messageText.innerHTML=messagesList[count].message;
		
		message.appendChild(gravatarImage);
		message.appendChild(mainBody);
		messages.appendChild(message);
		body.appendChild(messages);
		count++;
	}
});