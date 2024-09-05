        // Change the text using innerHTML
        function changeText() {
            const heading = document.getElementById("mainHeading");
            heading.innerHTML = "Text Changed: Explore the <span class='highlight'>Dynamic Web!</span>";
        }

        // Change CSS properties
        function changeStyle() {
            const intro = document.getElementsByTagName("p")[0];
            intro.style.color = "green";
            intro.style.fontSize = "20px";
            intro.style.position = "relative";
            intro.style.top = "10px";
        }

        // Change the image source
        function swapImage() {
            const image = document.getElementById("mainImage");
            if (image.src.includes("400x300?text=Image+1")) {
                image.src = "https://via.placeholder.com/400x300?text=Image+2";
            } else {
                image.src = "https://via.placeholder.com/400x300?text=Image+1";
            }
        }

        // Add a text node and attach it to a parent node
        function addTextNode() {
            const textContainer = document.getElementById("dynamicTextContainer");
            const newText = document.createTextNode("This is a dynamically added text node.");
            textContainer.appendChild(newText);
        }

        // Delete a node
        function deleteNode() {
            const nodeToDelete = document.getElementsByClassName("infoText")[0];
            nodeToDelete.parentNode.removeChild(nodeToDelete);
        }
    