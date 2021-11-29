const Add = () => {
return(
    <div class="add">
        <section class="add-sec">
            <h1>NEW DeliSH</h1>
            <form class ="add-form" action="">
                <label for="title">Title</label>
                <input type="text" name="add" id="add"/>
                <label for="img">Image URL</label>
                <input type="url" name="img" id= "img"/>
                <label for="ingredients">INGREDIENTS</label>
                <textarea name="products" id="ingredients" cols="30" rows="30"></textarea>
                <label for="text">DIRECTIONS</label>
                <textarea name="text" id="text" cols="50" rows="30"></textarea>
                <button type="add"><b>ADD</b></button>
            </form>
        </section>
    </div>
);

}

export default Add;