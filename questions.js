const questions = [
  {
    question: "What is the capital of India?",
    options: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
    answer: "Delhi",
  },
  {
    question: "Who is the CEO of Tesla?",
    options: ["Jeff Bezos", "Elon Musk", "Bill Gates", "Sundar Pichai"],
    answer: "Elon Musk",
  },
  {
    question: "React is a ________ library.",
    options: ["UI", "Database", "Server", "Language"],
    answer: "UI",
  },
  {
    question: "Which hook is used for state management in React?",
    options: ["useEffect", "useState", "useContext", "useRef"],
    answer: "useState"
  },
  {
    question: "React is developed by ________.",
    options: ["Google", "Facebook", "Microsoft", "Amazon"],
    answer: "Facebook"
  },
  {
    question: "What does HTML stand for?",
    options: ["Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyper Text Markup Language", "Hyper Tool Mark Language"],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "What is the correct HTML element for inserting a line break?",
    options: ["<br>", "<lb>", "<break>", "<newline>"],
    answer: "<br>"
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    options: ["class", "style", "font", "styles"],
    answer: "style"
  },
  {
    question: "Which CSS property controls the text size?",
    options: ["font-style", "text-size", "font-size", "text-style"],
    answer: "font-size"
  },
  {
    question: "What does CSS stand for?",
    options: ["Colorful Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets"],
    answer: "Cascading Style Sheets"
  },
  // {
  //   question: "Which property is used to change the background color?",
  //   options: ["color", "background-color", "bgcolor", "background"],
  //   answer: "background-color"
  // },
  // {
  //   question: "Inside which HTML element do we put the JavaScript?",
  //   options: ["<script>", "<js>", "<javascript>", "<code>"],
  //   answer: "<script>"
  // },
  // {
  //   question: "How do you write 'Hello World' in an alert box?",
  //   options: ["msgBox('Hello World');", "alertBox('Hello World');", "msg('Hello World');", "alert('Hello World');"],
  //   answer: "alert('Hello World');"
  // },
  // {
  //   question: "How do you create a function in JavaScript?",
  //   options: ["function:myFunction()", "function = myFunction()", "function myFunction()", "create myFunction()"],
  //   answer: "function myFunction()"
  // },
  // {
  //   question: "Which symbol is used for comments in JavaScript?",
  //   options: ["//", "/*", "#", "<!--"],
  //   answer: "//"
  // },
  
  // {
  //   question: "React components return ________.",
  //   options: ["HTML", "XML", "JSX", "Strings"],
  //   answer: "JSX"
  // },
  // {
  //   question: "Which method is used to create a new React app?",
  //   options: ["npx create-react-app", "react-create", "npm build react", "react-init"],
  //   answer: "npx create-react-app"
  // },
  // {
  //   question: "Which lifecycle method is used to fetch data in class components?",
  //   options: ["componentDidUpdate", "componentDidMount", "componentWillUnmount", "render"],
  //   answer: "componentDidMount"
  // },
  // {
  //   question: "Which company developed Java?",
  //   options: ["Microsoft", "Apple", "Sun Microsystems", "Google"],
  //   answer: "Sun Microsystems"
  // },
  // {
  //   question: "Java is a ________ language.",
  //   options: ["procedural", "functional", "object-oriented", "scripting"],
  //   answer: "object-oriented"
  // },
  // {
  //   question: "Which keyword is used to inherit a class in Java?",
  //   options: ["this", "super", "extends", "implements"],
  //   answer: "extends"
  // },
  // {
  //   question: "Which of the following is not a Java feature?",
  //   options: ["Object-oriented", "Use of pointers", "Portable", "Dynamic and Extensible"],
  //   answer: "Use of pointers"
  // },
  // {
  //   question: "What is the size of an `int` in Java?",
  //   options: ["4 bytes", "2 bytes", "8 bytes", "Depends on system"],
  //   answer: "4 bytes"
  // },
  // {
  //   question: "Which of these is a valid keyword in Java?",
  //   options: ["interface", "unsigned", "friend", "main"],
  //   answer: "interface"
  // },
  // {
  //   question: "Which method is the entry point of a Java program?",
  //   options: ["start()", "main()", "run()", "init()"],
  //   answer: "main()"
  // },
  // {
  //   question: "Which keyword is used to prevent inheritance?",
  //   options: ["final", "private", "static", "const"],
  //   answer: "final"
  // },
  // {
  //   question: "Which exception is thrown when dividing by zero?",
  //   options: ["IOException", "ArithmeticException", "NullPointerException", "IllegalArgumentException"],
  //   answer: "ArithmeticException"
  // },
  // {
  //   question: "Which class is the superclass of all classes in Java?",
  //   options: ["Object", "System", "Main", "Class"],
  //   answer: "Object"
  // },
  // {
  //   question: "Which access modifier makes a member visible to all classes?",
  //   options: ["private", "protected", "default", "public"],
  //   answer: "public"
  // },
  // {
  //   question: "Which of these is used to handle exceptions in Java?",
  //   options: ["catch", "handle", "try-catch", "catch-try"],
  //   answer: "try-catch"
  // },
  // {
  //   question: "Which keyword is used to create an interface in Java?",
  //   options: ["interface", "class", "abstract", "extends"],
  //   answer: "interface"
  // },
  // {
  //   question: "Which package contains the Scanner class?",
  //   options: ["java.io", "java.util", "java.lang", "java.net"],
  //   answer: "java.util"
  // },
  // {
  //   question: "Which loop is guaranteed to execute at least once?",
  //   options: ["for", "while", "do-while", "foreach"],
  //   answer: "do-while"
  // },
  // {
  //   question: "Which of the following is not a Java primitive type?",
  //   options: ["float", "boolean", "String", "int"],
  //   answer: "String"
  // },
  // {
  //   question: "Which Java keyword is used to define a constant?",
  //   options: ["final", "const", "static", "define"],
  //   answer: "final"
  // },
  // {
  //   question: "Which command compiles Java source code?",
  //   options: ["java", "javac", "javadoc", "jar"],
  //   answer: "javac"
  // },
  // {
  //   question: "Which method is used to start a thread in Java?",
  //   options: ["begin()", "run()", "start()", "execute()"],
  //   answer: "start()"
  // },
  // {
  //   question: "Which Java collection class does not allow duplicate elements?",
  //   options: ["List", "Map", "Set", "ArrayList"],
  //   answer: "Set"
  // }
];

export default questions;
