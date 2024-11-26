let availableKeywords = [
    'Foto: #001',
    'Foto: #002',
    'Foto: #003',
];

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;
    if(input.length){
        result = availableKeywords.filter((keyword)=>{
           return keyword.toLocaleLowerCase().includes(input.toLocaleLowerCase());
        });
        console.log(result);
    }
    display(result);

    if(!result.length){
        resultsBox.innerHTML = '';
    }
}

function display(result){
    const content = result.map((list)=>{
        return "<li onclick=selectInput(this)>" + list + "</li>";
    });

    resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectInput(list){
    inputBox.value = list.innerHTML
    resultsBox.innerHTML = '';
}

function CraftingTable() {
    document.getElementById("search-box").style.display = "none";
}

const button = document.getElementById('checkButton');
button.addEventListener('click', function() {
    const input = document.getElementById('input-box').value;

    if (input === "Foto: #001") {
        Foto1();
    }

    if (input === "Foto: #002") {
        Foto2();
    }

    if (input === "Foto: #003") {
        Foto3();
    }
});

function home() {
    document.getElementById("big-container1").style.display = "block";
    document.getElementById("fotos1-container").style.display = "none";
    document.getElementById("fotos2-container").style.display = "none";
    document.getElementById("fotos3-container").style.display = "none";
    document.getElementById("button1-1").style.display = "none";
    document.getElementById("button1-2").style.display = "none";
    document.getElementById("button1-3").style.display = "none";
}

function performFunction1() {
    document.getElementById("big-container1").style.display = "none";
    document.getElementById("mega-container").style.display = "flex";
    document.getElementById("button1-1").style.display = "block";
    document.getElementById("button1-2").style.display = "block";
    document.getElementById("button1-3").style.display = "block";
}

function Foto1() {
    document.getElementById("big-container1").style.display = "none";
    document.getElementById("mega-container").style.display = "flex";
    document.getElementById("fotos1-container").style.display = "flex";
    document.getElementById("fotos2-container").style.display = "none";
    document.getElementById("fotos3-container").style.display = "none";
    document.getElementById("button1-1").style.display = "none";
    document.getElementById("button1-2").style.display = "none";
    document.getElementById("button1-3").style.display = "none";
}

function Foto2() {
    document.getElementById("big-container1").style.display = "none";
    document.getElementById("mega-container").style.display = "flex";
    document.getElementById("fotos1-container").style.display = "none";
    document.getElementById("fotos2-container").style.display = "flex";
    document.getElementById("fotos3-container").style.display = "none";
    document.getElementById("button1-1").style.display = "none";
    document.getElementById("button1-2").style.display = "none";
    document.getElementById("button1-3").style.display = "none";
}

function Foto3() {
    document.getElementById("big-container1").style.display = "none";
    document.getElementById("mega-container").style.display = "flex";
    document.getElementById("fotos1-container").style.display = "none";
    document.getElementById("fotos2-container").style.display = "none";
    document.getElementById("fotos3-container").style.display = "flex";
    document.getElementById("button1-1").style.display = "none";
    document.getElementById("button1-2").style.display = "none";
    document.getElementById("button1-3").style.display = "none";
}

const form = document.getElementById('commentForm');
const commentInput = document.getElementById('commentInput');
const commentsSection = document.getElementById('commentsSection');

// Function to load comments from localStorage
function loadComments() {
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.forEach(comment => {
        displayComment(comment);
    });
}

// Function to display a comment
function displayComment(comment) {
    const commentDiv = document.createElement('div');
    commentDiv.textContent = comment;
    commentsSection.appendChild(commentDiv);
}

// Event listener for the form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the page from refreshing
    const comment = commentInput.value;
    commentInput.value = ''; // Clear the input field

    // Save the comment to localStorage
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.push(comment);
    localStorage.setItem('comments', JSON.stringify(comments));

    // Display the new comment
    displayComment(comment);
});

// Load comments when the page is loaded
window.onload = loadComments;

//localStorage.removeItem("comments");