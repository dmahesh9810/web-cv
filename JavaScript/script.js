class ViewportAdjustment {
  constructor() {
    this.mobileDevicesRegex =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  }

  adjustForMobileDevices() {
    if (this.mobileDevicesRegex.test(navigator.userAgent)) {
      const viewportMetaTag = document.querySelector('meta[name="viewport"]');
      if (viewportMetaTag) {
        viewportMetaTag.setAttribute("content", "width=1200");
      }
    }
  }
}

class TypingAnimation {
  constructor(text, nameElement, picElement) {
    this.text = text;
    this.nameElement = nameElement;
    this.picElement = picElement;
    this.index = 0;
    this.typingSpeed = 100;
    this.typingInterval = null;
  }

  start() {
    this.typingInterval = setInterval(() => {
      this.typeText();
    }, this.typingSpeed);
  }

  typeText() {
    if (this.index < this.text.length) {
      this.nameElement.innerHTML += this.text.charAt(this.index);
      this.index++;
    } else {
      clearInterval(this.typingInterval);
      this.showPic();
    }
  }

  showPic() {
    setTimeout(() => {
      this.picElement.style.display = "inline";
      this.picElement.style.opacity = "1";
    }, 100);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const viewportAdjustment = new ViewportAdjustment();
  viewportAdjustment.adjustForMobileDevices();

  const text = "Mahesh\nDissanayaka";
  const nameElement = document.querySelector(".name");
  const picElement = document.querySelector(".pic");

  if (nameElement && picElement) {
    nameElement.innerHTML = "";
    const typingAnimation = new TypingAnimation(text, nameElement, picElement);
    typingAnimation.start();
  }
});

/// Function to change the background color of elements with a delay
function changeColorWithDelay(elements, index) {
  if (index < elements.length) {
    elements[index].style.backgroundColor = 'white';

    setTimeout(function() {
      changeColorWithDelay(elements, index + 1);
    }, 400);
  }
}

// Define class name groups
const classGroups = [
  ['.html1', '.html2', '.html3', '.html4', '.html5', '.html6', '.html7', '.html8'],
  ['.css1', '.css2', '.css3', '.css4', '.css5', '.css6', '.css7', '.css8'],
  ['.javascript1', '.javascript2', '.javascript3', '.javascript4', '.javascript5', '.javascript6'],
  ['.php1', '.php2', '.php3', '.php4', '.php5', '.php6'],
  ['.mysql1', '.mysql2', '.mysql3', '.mysql4', '.mysql5', '.mysql6'],
  ['.vb1', '.vb2', '.vb3', '.vb4', '.vb5', '.vb6'],
  ['.java1', '.java2', '.java3', '.java4', '.java5'],
  ['.cpp1', '.cpp2', '.cpp3', '.cpp4', '.cpp5'],
  ['.cshap1', '.cshap2', '.cshap3', '.cshap4', '.cshap5'],
  ['.py1', '.py2', '.py3', '.py4']
];

// Loop through class name groups and apply the color change function
classGroups.forEach(group => {
  const elements = document.querySelectorAll(group.join(', '));
  changeColorWithDelay(elements, 0);
});

// Text to be typed
var text = "To secure a challenging and rewarding developer position that allows me to leverage\nmy technical skills and experience in software development to build innovative\nsolutions. I am seeking a role in a dynamic organization that values creativity,\ncollaboration, and continuous learning. I bring expertise in a range of programming\nlanguages, frameworks, and tools and I am committed to delivering high-quality\nsoftware solutions that meet the needs of users. My goal is to work with a skilled and\nmotivated team and contribute to the development of cutting-edge products while\nadvancing my career as a developer";


// Get the element to type into
var objectiveElement = document.querySelector('.objective');

// Set initial content of the element
objectiveElement.innerHTML = '';

// Index to keep track of which character to type next
var index = 0;

// Speed of typing in milliseconds
var typingSpeed = 10; // Adjust as needed

// Function to type text
function typeText() {
  if (index < text.length) {
    objectiveElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeText, typingSpeed);
  }
}

// Show the objective and start typing when the page loads
window.onload = function() {
  objectiveElement.style.display = 'block';
  typeText();
};
