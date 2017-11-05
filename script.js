
var listOfProducts;


fetch("./products.json")
.then(function(response) {
    return response.json();
})
.then(function(products) {
    listOfProducts = products;
    createUIFromLoadedProducts();
});




function createUIFromLoadedProducts() {
        var hole, first, second, third, last, btn;
        for(var i in listOfProducts) {

        var hole = document.createElement("div");
        hole.className ="content";

        var first = document.createElement("h1");
        first.appendChild(document.createTextNode(listOfProducts[i].title));
        hole.appendChild(first);

        var second = document.createElement("h2");
        second.appendChild(document.createTextNode(listOfProducts[i].description));
        hole.appendChild(second);

        var third = document.createElement("img");
        third.setAttribute("src", listOfProducts[i].image);
        third.setAttribute("width", "40%");
        third.setAttribute("height", "auto%");
        hole.appendChild(third);

        var last = document.createElement("h4");
        last.appendChild(document.createTextNode(listOfProducts[i].price + " kr"));
        hole.appendChild(last);

        var btn = document.createElement("button");
        btn.className ="btn";
        btn.appendChild(document.createTextNode(" Lägg till i kundvagnen"));
        hole.appendChild(btn);
        btn.setAttribute("onclick", "doFunction()");




        document.getElementById("container").appendChild(hole);

}
};
var x=0;
function doFunction(){
    
    if( x<x+1)

    document.getElementById("demo").innerHTML = x+1;
    x=x+1
}

    /* Check your console to see that the products are stored in the listOfProducts varible */
    

    /* Add your code here, remember to brake your code in to
    smaller function blocks to reduce complexity and increase readability */

    /* Each function must have an explainetory comment like the one for this function, see row 15 */
    
    /* Feel free to remove these other comments */


/* Read the projects readme before you start! */
/* Good luck and have fun 🤓 */

