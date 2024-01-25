class Todo 
{
    id:string;
    title:string;

    constructor(todoText:string)
    {
        this.title=todoText;
        this.id= new Date().getMilliseconds().toString();
    }

};

export default Todo;