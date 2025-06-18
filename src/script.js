// FAQ Data
const faqData = [
    {
        question: "What is Netflix?",
        answer: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"
    },
    {
        question: "How much does Netflix cost?",
        answer: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $7.99 to $24.99 a month. No extra costs, no contracts."
    },
    {
        question: "Where can I watch?",
        answer: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles."
    },
    {
        question: "How do I cancel?",
        answer: "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
    },
    {
        question: "What can I watch on Netflix?",
        answer: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
    }
];

// Create FAQ elements
const faqContainer = document.getElementById('faq-container');

faqData.forEach((faq, index) => {
    const faqElement = document.createElement('div');
    faqElement.className = 'mb-4';
    faqElement.innerHTML = `
        <button class="w-full bg-gray-800 p-6 text-left flex justify-between items-center hover:bg-gray-700 transition-colors" onclick="toggleFAQ(${index})">
            <span class="text-2xl">${faq.question}</span>
            <span class="text-2xl transform transition-transform duration-200" id="faq-icon-${index}">+</span>
        </button>
        <div class="bg-gray-800 mt-px overflow-hidden max-h-0 transition-all duration-200" id="faq-answer-${index}">
            <p class="p-6 text-xl">${faq.answer}</p>
        </div>
    `;
    faqContainer.appendChild(faqElement);
});

// Toggle FAQ answers
function toggleFAQ(index) {
    const answer = document.getElementById(`faq-answer-${index}`);
    const icon = document.getElementById(`faq-icon-${index}`);
    
    // Close all other FAQs
    const allAnswers = document.querySelectorAll('[id^="faq-answer-"]');
    const allIcons = document.querySelectorAll('[id^="faq-icon-"]');
    
    allAnswers.forEach((element, i) => {
        if (i !== index) {
            element.style.maxHeight = '0';
        }
    });
    
    allIcons.forEach((element, i) => {
        if (i !== index) {
            element.style.transform = 'rotate(0deg)';
        }
    });
    
    // Toggle current FAQ
    if (answer.style.maxHeight === '0px' || !answer.style.maxHeight) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
        icon.style.transform = 'rotate(45deg)';
    } else {
        answer.style.maxHeight = '0';
        icon.style.transform = 'rotate(0deg)';
    }
}

// Handle email form submission
document.querySelector('button').addEventListener('click', function(e) {
    const emailInput = document.querySelector('input[type="email"]');
    if (emailInput.value) {
        // Here you would typically handle the form submission
        console.log('Email submitted:', emailInput.value);
        alert('Thank you for your interest! This is a clone website for demonstration purposes.');
    } else {
        alert('Please enter a valid email address.');
    }
}); 