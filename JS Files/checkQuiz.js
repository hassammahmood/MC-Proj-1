function Item (question,answer,option){
	this.question = question;
	this.answer = answer;
	this.option = option;
}

Item.prototype.hasNull = function(){
	if(    this.question == ""
		|| this.answer == ""
		|| this.option.indexOf("") != -1)
		return true;
	else return false;
}