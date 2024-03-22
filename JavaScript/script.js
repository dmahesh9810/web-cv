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

function changeColorWithDelay(elements, index) {
  if (index < elements.length) {
    elements[index].style.backgroundColor = "white";

    setTimeout(function () {
      changeColorWithDelay(elements, index + 1);
    }, 400);
  }
}

const classGroups = [
  [
    ".html1",
    ".html2",
    ".html3",
    ".html4",
    ".html5",
    ".html6",
    ".html7",
    ".html8",
  ],
  [".css1", ".css2", ".css3", ".css4", ".css5", ".css6", ".css7", ".css8"],
  [
    ".javascript1",
    ".javascript2",
    ".javascript3",
    ".javascript4",
    ".javascript5",
    ".javascript6",
  ],
  [".php1", ".php2", ".php3", ".php4", ".php5", ".php6"],
  [".mysql1", ".mysql2", ".mysql3", ".mysql4", ".mysql5", ".mysql6"],
  [".vb1", ".vb2", ".vb3", ".vb4", ".vb5", ".vb6"],
  [".java1", ".java2", ".java3", ".java4", ".java5"],
  [".cpp1", ".cpp2", ".cpp3", ".cpp4", ".cpp5"],
  [".cshap1", ".cshap2", ".cshap3", ".cshap4", ".cshap5"],
  [
    ".laravel1",
    ".laravel2",
    ".laravel3",
    ".laravel4",
    ".laravel5",
    ".laravel6",
  ],
  [".vue1", ".vue2", ".vue3", ".vue4", ".vue5", ".vue6"],
  [".react1", ".react2", ".react3", ".react4"],
  [
    ".Tailwind1",
    ".Tailwind2",
    ".Tailwind3",
    ".Tailwind4",
    ".Tailwind5",
    ".Tailwind6",
  ],
  [
    ".Bootstrap1",
    ".Bootstrap2",
    ".Bootstrap3",
    ".Bootstrap4",
    ".Bootstrap5",
    ".Bootstrap6",
  ],
  [".api1", ".api2", ".api3", ".api4", ".api5", ".api6"],
  [".git1", ".git2", ".git3", ".git4", ".git5", ".git6"],
  [".Docker1", ".Docker2", ".Docker3", ".Docker4", ".Docker5", ".Docker6"],
  [
    ".Wordpress1",
    ".Wordpress2",
    ".Wordpress3",
    ".Wordpress4",
    ".Wordpress5",
    ".Wordpress6",
  ],
  [".Arduino1", ".Arduino2", ".Arduino3", ".Arduino4"],
  [".Cisco1", ".Cisco2", ".Cisco3", ".Cisco4"],
  [".ps1", ".ps2", ".ps3", ".ps4", ".ps5"],
  [".ai1", ".ai2", ".ai3", ".ai4", ".ai5"],
  [".pr1", ".pr2", ".pr3", ".pr4", ".pr5"],
  [".af1", ".af2", ".af3"],
  [".aa1", ".aa2", ".aa3", ".aa4"],
  [
    ".Word1",
    ".Word2",
    ".Word3",
    ".Word4",
    ".Word5",
    ".Word6",
    ".Word7",
    ".Word8",
  ],
  [
    ".Excel1",
    ".Excel2",
    ".Excel3",
    ".Excel4",
    ".Excel5",
    ".Excel6",
    ".Excel7",
    ".Excel8",
  ],
  [
    ".Access1",
    ".Access2",
    ".Access3",
    ".Access4",
    ".Access5",
    ".Access6",
    ".Access7",
    ".Access8",
  ],
  [
    ".Powerpoint1",
    ".Powerpoint2",
    ".Powerpoint3",
    ".Powerpoint4",
    ".Powerpoint5",
    ".Powerpoint6",
    ".Powerpoint7",
    ".Powerpoint8",
  ],
  [".py1", ".py2", ".py3", ".py4"],
];

function applyColorChange(groups) {
  groups.forEach((group) => {
    const elements = document.querySelectorAll(group.join(", "));
    changeColorWithDelay(elements, 0);
  });
}

const jobDescriptions = [
  "To be employed as a developer in a challenging and rewarding role where I can apply my technical know-how and experience in software development to produce original solutions. I'm searching for a job with a dynamic organization that promotes creativity, collaboration as well as continuous learning. I am committed to offering people top-notch software solutions, and my field of expertise includes a wide range of programming languages, frameworks, and tools. Working with a creative and motivated team and making a contribution to the project are my goals as a developer.",
  "Obtain a demanding and fulfilling role as a developer where I can utilize my software development expertise and technical abilities to create inventive solutions. I want to work for a fast-paced company that encourages creativity, cooperation and ongoing education. I am dedicated to providing high-quality software solutions that satisfy customer expectations, and I bring skills in a variety of programming languages, frameworks, and tools. My objective is to further my career as a developer while collaborating with an innovative and driven team to create cutting-edge solutions.",
  "To land a demanding and fulfilling developer job where I can use my software development expertise and technical know-how to create creative solutions. My goal is to work for a fast-paced company that encourages innovation, partnership and ongoing education. In addition to my commitment to provide users with high-quality software solutions, I contribute expertise in a variety of programming languages, frameworks, and tools. As I progress in my career as a developer, I hope to collaborate with an innovative and driven team to create cutting-edge products.",
];

function typeText(textElement, text, speed) {
  let index = 0;
  const typeInterval = setInterval(() => {
    if (index < text.length) {
      textElement.innerHTML += text.charAt(index);
      index++;
    } else {
      clearInterval(typeInterval);
    }
  }, speed);
}

document.addEventListener("DOMContentLoaded", () => {
  const randomNumber = Math.floor(Math.random() * jobDescriptions.length);
  const objectiveElement = document.querySelector(".objective");

  objectiveElement.innerHTML = "";

  typeText(objectiveElement, jobDescriptions[randomNumber], 10);

  applyColorChange(classGroups);
});

window.onload = function () {
  objectiveElement.style.display = "block";
  typeText();
};
