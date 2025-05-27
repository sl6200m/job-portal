// Sample job data
const jobs = [
    {
        title: "Frontend Developer",
        company: "TechCorp",
        logo: "images/techcorp-logo.jpg",
        location: "San Francisco, CA",
        type: "Full-time",
        salary: "$90,000 - $120,000",
        description: "We're looking for a skilled Frontend Developer to join our team and help build amazing user experiences.",
        posted: "2 days ago"
    },
    {
        title: "UX Designer",
        company: "DesignHub",
        logo: "images/designhub-logo.jpg",
        location: "Remote",
        type: "Contract",
        salary: "$70 - $90 per hour",
        description: "Join our design team to create beautiful and intuitive interfaces for our clients.",
        posted: "1 week ago"
    },
    {
        title: "Data Scientist",
        company: "DataWorks",
        logo: "images/dataworks-logo.jpg",
        location: "New York, NY",
        type: "Full-time",
        salary: "$110,000 - $140,000",
        description: "Seeking a data scientist to analyze complex data and derive actionable insights.",
        posted: "3 days ago"
    },
    {
        title: "Marketing Manager",
        company: "Growth Inc.",
        logo: "images/growth-logo.jpg",
        location: "Chicago, IL",
        type: "Full-time",
        salary: "$80,000 - $100,000",
        description: "Lead our marketing team and develop strategies to grow our customer base.",
        posted: "5 days ago"
    }
];

// Load jobs when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    const jobListings = document.getElementById('jobListings');
    
    jobs.forEach(job => {
        const jobCard = document.createElement('div');
        jobCard.className = 'job-card';
        jobCard.innerHTML = `
            <h3 class="job-title">${job.title}</h3>
            <div class="company-info">
                <img src="${job.logo}" alt="${job.company} Logo" class="company-logo">
                <span class="company-name">${job.company}</span>
            </div>
            <div class="job-meta">
                <span><i class="fas fa-map-marker-alt"></i> ${job.location}</span>
                <span><i class="fas fa-clock"></i> ${job.type}</span>
                <span><i class="fas fa-dollar-sign"></i> ${job.salary}</span>
                <span><i class="fas fa-calendar-alt"></i> ${job.posted}</span>
            </div>
            <p class="job-description">${job.description}</p>
            <button class="btn btn-apply">Apply Now</button>
        `;
        jobListings.appendChild(jobCard);
    });

    // Add event listeners to apply buttons
    document.querySelectorAll('.btn-apply').forEach(button => {
        button.addEventListener('click', function() {
            const jobTitle = this.parentElement.querySelector('.job-title').textContent;
            alert(`Applying for: ${jobTitle}`);
            // In a real app, this would redirect to an application form
        });
    });

    // Search functionality
    const searchBtn = document.querySelector('.btn-search');
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            const keyword = document.querySelector('.search-box input:first-of-type').value;
            const location = document.querySelector('.search-box input:last-of-type').value;
            
            if (keyword || location) {
                alert(`Searching for "${keyword}" jobs in "${location}"`);
                // In a real app, this would filter jobs or make an API call
            } else {
                alert('Please enter a job title or location');
            }
        });
    }
});

// Mobile menu toggle (can be added if needed)
function toggleMobileMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('active');
}